/**
 * Draws the hand strokes (.ink-line) once when they scroll into view.
 *
 * The strokes use `vector-effect: non-scaling-stroke`, so the browser measures
 * dashes in screen pixels, after the SVG is stretched by preserveAspectRatio="none".
 * `pathLength` can't normalise that, so we measure each path's on-screen length
 * and animate the dash offset in real pixels.
 *
 * Without JS, or with reduced motion, the strokes are simply shown fully drawn.
 */

const SAMPLES = 200;

/** Length of a path as rendered on screen, in CSS pixels. */
function screenLength(path: SVGPathElement): number {
	const matrix = path.getScreenCTM();
	if (!matrix) return 0;
	const total = path.getTotalLength();
	let length = 0;
	let previous: DOMPoint | null = null;
	for (let i = 0; i <= SAMPLES; i++) {
		const point = path.getPointAtLength((total * i) / SAMPLES).matrixTransform(matrix);
		if (previous) length += Math.hypot(point.x - previous.x, point.y - previous.y);
		previous = point;
	}
	// Small margin so the round line cap never peeks out before drawing starts
	return Math.ceil(length) + 4;
}

function arm(container: Element) {
	container.querySelectorAll<SVGPathElement>(".ink-line").forEach((path) => {
		path.style.setProperty("--len", `${screenLength(path)}px`);
	});
	container.classList.add("is-armed");
	// Commit the undrawn state now; otherwise a line already in view gets
	// .is-drawn in the same frame and jumps to the end without animating.
	container.getBoundingClientRect();
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const containers = [...document.querySelectorAll("[data-draw]")];

if (!reducedMotion && "IntersectionObserver" in window) {
	containers.forEach(arm);

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				const target = entry.target;
				requestAnimationFrame(() => target.classList.add("is-drawn"));
				observer.unobserve(entry.target);
			}
		},
		{ threshold: 0.35 },
	);
	containers.forEach((el) => observer.observe(el));

	// Once drawn, drop the dash pattern so later resizes can't cut the line short.
	document.addEventListener("transitionend", (event) => {
		const target = event.target;
		if (!(target instanceof SVGPathElement) || !target.classList.contains("ink-line")) return;
		const container = target.closest("[data-draw]");
		if (container?.classList.contains("is-drawn")) container.classList.add("is-done");
	});

	// Re-measure strokes that haven't been drawn yet when the layout width changes.
	let lastWidth = window.innerWidth;
	let timer: number | undefined;
	window.addEventListener("resize", () => {
		if (window.innerWidth === lastWidth) return;
		lastWidth = window.innerWidth;
		clearTimeout(timer);
		timer = window.setTimeout(() => {
			containers.filter((el) => !el.classList.contains("is-drawn")).forEach(arm);
		}, 150);
	});
}
