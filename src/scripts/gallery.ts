/**
 * Gallery page behaviour: category filter and the full-screen photo viewer.
 *
 * <gallery-browser> wraps the filter buttons, the photo grid and the viewer <dialog>.
 * The viewer is a native modal dialog, so the browser traps focus inside it, closes it on
 * Esc and makes the rest of the page inert. We add arrow keys, swipe, the thumbnail strip
 * and restore focus to the photo that opened it.
 */

const SWIPE_DISTANCE = 50;

/**
 * Phone layout: tall photos take two rows, every seventh other photo is featured across
 * both columns. Applied to the photos a filter leaves visible, so the grid never has gaps.
 */
function setShapes(items: HTMLElement[]) {
	let k = 0;
	for (const item of items) {
		if (item.dataset.tall === "true") {
			item.dataset.shape = "tall";
		} else {
			item.dataset.shape = k % 7 === 0 ? "wide" : "small";
			k++;
		}
	}
}

class GalleryBrowser extends HTMLElement {
	private viewer!: HTMLDialogElement;
	private img!: HTMLImageElement;
	private caption!: HTMLElement;
	private count!: HTMLElement;
	private thumbs!: HTMLElement;
	private prevButtons: HTMLButtonElement[] = [];
	private nextButtons: HTMLButtonElement[] = [];
	private all: HTMLButtonElement[] = [];
	private items: HTMLButtonElement[] = [];
	private index = 0;
	private opener: HTMLElement | null = null;
	private swipeStart: { x: number; y: number } | null = null;

	connectedCallback() {
		const grid = this.querySelector<HTMLElement>("[data-grid]");
		const viewer = this.querySelector<HTMLDialogElement>("[data-viewer]");
		if (!grid || !viewer) return;
		this.viewer = viewer;
		this.img = viewer.querySelector<HTMLImageElement>("[data-img]")!;
		this.caption = viewer.querySelector<HTMLElement>("[data-caption]")!;
		this.count = viewer.querySelector<HTMLElement>("[data-count]")!;
		this.thumbs = viewer.querySelector<HTMLElement>("[data-thumbs]")!;
		this.prevButtons = [...viewer.querySelectorAll<HTMLButtonElement>("[data-prev]")];
		this.nextButtons = [...viewer.querySelectorAll<HTMLButtonElement>("[data-next]")];
		this.all = [...grid.querySelectorAll<HTMLButtonElement>("[data-photo]")];

		this.setupFilters();
		this.setupViewer();
	}

	private setupFilters() {
		const filters = this.querySelector<HTMLElement>("[data-filters]");
		if (!filters) return;
		filters.hidden = false;
		const buttons = [...filters.querySelectorAll<HTMLButtonElement>("[data-filter]")];
		for (const button of buttons) {
			button.addEventListener("click", () => {
				const category = button.dataset.filter;
				for (const b of buttons) b.setAttribute("aria-pressed", String(b === button));
				const visible: HTMLButtonElement[] = [];
				for (const item of this.all) {
					const show = category === "toate" || item.dataset.cat === category;
					item.hidden = !show;
					if (show) visible.push(item);
				}
				setShapes(visible);
			});
		}
	}

	private setupViewer() {
		for (const item of this.all) {
			item.addEventListener("click", () => this.open(item));
		}
		for (const b of this.prevButtons) b.addEventListener("click", () => this.step(-1));
		for (const b of this.nextButtons) b.addEventListener("click", () => this.step(1));
		this.viewer.querySelector("[data-close]")?.addEventListener("click", () => this.viewer.close());

		this.viewer.addEventListener("keydown", (event) => {
			if (event.key === "ArrowLeft") this.step(-1);
			else if (event.key === "ArrowRight") this.step(1);
			else if (event.key === "Tab") this.trapFocus(event);
		});
		// Click on the dark area around the photo closes it
		this.viewer.addEventListener("click", (event) => {
			const target = event.target as HTMLElement;
			if (target === this.viewer || target.matches("[data-stage]")) this.viewer.close();
		});
		this.viewer.addEventListener("close", () => {
			this.img.removeAttribute("src");
			this.opener?.focus();
			this.opener = null;
		});

		// Swipe on touch screens (vertical scroll is left to the browser via touch-action)
		const stage = this.viewer.querySelector<HTMLElement>("[data-stage]")!;
		stage.addEventListener("pointerdown", (event) => {
			if (event.pointerType === "mouse") return;
			this.swipeStart = { x: event.clientX, y: event.clientY };
		});
		stage.addEventListener("pointerup", (event) => {
			const start = this.swipeStart;
			this.swipeStart = null;
			if (!start) return;
			const dx = event.clientX - start.x;
			const dy = event.clientY - start.y;
			if (Math.abs(dx) >= SWIPE_DISTANCE && Math.abs(dx) > Math.abs(dy) * 1.5) {
				this.step(dx < 0 ? 1 : -1);
			}
		});
		stage.addEventListener("pointercancel", () => (this.swipeStart = null));
	}

	/** Keep Tab inside the dialog: wrap from the last control to the first and back. */
	private trapFocus(event: KeyboardEvent) {
		const focusable = [...this.viewer.querySelectorAll<HTMLButtonElement>("button")].filter(
			(b) => !b.disabled,
		);
		const first = focusable[0];
		const last = focusable[focusable.length - 1];
		if (!first || !last) return;
		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault();
			last.focus();
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault();
			first.focus();
		}
	}

	private open(item: HTMLButtonElement) {
		// Only the photos the current filter shows
		this.items = this.all.filter((el) => !el.hidden);
		this.index = this.items.indexOf(item);
		this.opener = item;
		this.buildThumbs();
		this.viewer.showModal();
		this.show();
	}

	private buildThumbs() {
		this.thumbs.replaceChildren(
			...this.items.map((item, i) => {
				const button = document.createElement("button");
				button.type = "button";
				button.setAttribute("aria-label", `${i + 1} / ${this.items.length}`);
				const thumb = document.createElement("img");
				thumb.src = item.dataset.thumb ?? "";
				thumb.alt = "";
				thumb.width = 88;
				thumb.height = 60;
				button.append(thumb);
				button.addEventListener("click", () => {
					this.index = i;
					this.show();
				});
				return button;
			}),
		);
	}

	private step(delta: number) {
		const next = this.index + delta;
		if (next < 0 || next >= this.items.length) return;
		this.index = next;
		this.show();
	}

	private show() {
		const item = this.items[this.index];
		if (!item) return;
		const alt = item.dataset.alt ?? "";
		this.img.src = item.dataset.full ?? "";
		this.img.alt = alt;
		this.caption.textContent = alt;
		this.count.textContent = `${this.index + 1} / ${this.items.length}`;
		for (const b of this.prevButtons) b.disabled = this.index === 0;
		for (const b of this.nextButtons) b.disabled = this.index === this.items.length - 1;
		[...this.thumbs.children].forEach((thumb, i) => {
			if (i === this.index) thumb.setAttribute("aria-current", "true");
			else thumb.removeAttribute("aria-current");
		});
		this.thumbs.children[this.index]?.scrollIntoView({ block: "nearest", inline: "center" });
		// Warm the neighbours so stepping feels instant
		for (const n of [this.items[this.index - 1], this.items[this.index + 1]]) {
			if (n?.dataset.full) new Image().src = n.dataset.full;
		}
		// A disabled button can't keep focus; move it to the one that still works
		if (document.activeElement === document.body || !this.viewer.contains(document.activeElement)) {
			this.viewer.querySelector<HTMLElement>("[data-close]")?.focus();
		}
	}
}

customElements.define("gallery-browser", GalleryBrowser);
