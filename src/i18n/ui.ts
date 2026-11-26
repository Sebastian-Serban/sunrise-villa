export const languages = {
	ro: "Română",
	en: "English",
	de: "Deutsch",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "ro";

/** Localised string, one value per language. Used by content collections and UI. */
export type Localized = Record<Lang, string>;

export const BOOKING_URL = "https://www.booking.com/Share-49dqhZ";
/**
 * Full Booking.com property URL (https://www.booking.com/hotel/ro/....html).
 * The share link above can't take dates, so the booking bar needs this to pass
 * check-in/check-out along. TODO: fill in from the property's Booking.com page.
 */
export const BOOKING_PROPERTY_URL: string | null = null;
export const GOOGLE_REVIEWS_URL =
	"https://search.google.com/local/reviews?placeid=ChIJ_xV__eA4RkcRi-wsENwXWsE";
export const MAPS_URL =
	"https://www.google.com/maps/search/?api=1&query=Sunrise+Villa+Str.+Mihai+Eminescu+41+S%C3%A2nmartin";
export const DIRECTIONS_URL =
	"https://www.google.com/maps/dir/?api=1&destination=Str.+Mihai+Eminescu+41+S%C3%A2nmartin";
export const PHONE = "+40 771 734 907";
export const PHONE_HREF = "tel:+40771734907";
export const WHATSAPP_HREF = "https://wa.me/40771734907";
export const EMAIL = "contact@sunrisevilla-felix.com";
export const SOCIAL_LINKS = [
	{ name: "Facebook", href: "https://www.facebook.com/p/SunriseVilla-100057196700621" },
	{ name: "Instagram", href: "https://www.instagram.com/sunrisevilla" },
	{ name: "TikTok", href: "https://www.tiktok.com/@sunrise.villa6" },
] as const;
export const ADDRESS_SHORT = "Str. Mihai Eminescu 41, Sânmartin";
export const ADDRESS = `${ADDRESS_SHORT}, Băile Felix`;
/** Times shown in several places. Source: docs/sunrise-villa.md, Policies. */
export const CHECKIN_TIME = "14:00–22:00";
export const CHECKOUT_TIME = "11:00";
export const RECEPTION_HOURS = "07:00 – 22:00";

/**
 * UI strings. Romanian is the source; EN/DE are drafts until the client reviews them.
 * Keys are grouped by where they appear.
 */
export const ui = {
	ro: {
		"meta.title": "Sunrise Villa ★★★ | Pensiune în Băile Felix",
		"meta.description":
			"Pensiune cu 10 camere în Băile Felix, la 2 km de centrul stațiunii. Piscină privată, grădină, parcare gratuită. Nota 9.9 pe Booking.com.",
		"nav.rooms": "Camere",
		"nav.contact": "Contact",
		"nav.menu": "Meniu",
		"cta.seeRooms": "Vezi camerele",
		"rooms.title": "Camerele noastre",
		"rooms.lead":
			"10 camere confortabile, fiecare cu dotări moderne pentru un sejur plăcut. Simplitate, curățenie și liniște, exact ce ai nevoie după o zi la băi.",
		"rooms.persons": "persoane",
		"rooms.details": "Detalii cameră",
		"footer.tagline": "Pensiune de 3 stele în Băile Felix, la câțiva pași de apele termale.",
		"facilities.title": "Facilități oferite de Sunrise Villa",
		"facilities.lead":
			"Descoperă dotările noastre, create special pentru a-ți transforma sejurul într-o experiență relaxantă. Tot ce ai nevoie pentru confortul tău, într-un singur loc.",
		"facilities.pool.title": "Piscină în aer liber",
		"facilities.pool.text": "Piscină exclusivă pentru oaspeții noștri, înconjurată de grădină.",
		"facilities.garden.title": "Grădină & terasă",
		"facilities.garden.text":
			"Spațiu verde privat cu terasă, șezlonguri și zonă de relaxare în aer liber.",
		"facilities.parking.title": "Parcare gratuită",
		"facilities.parking.text": "Parcare privată gratuită în incinta pensiunii.",
		"facilities.wifi.title": "WiFi gratuit",
		"facilities.wifi.text":
			"Internet wireless de mare viteză, în toate camerele și spațiile comune.",
		"facilities.transfer.title": "Transfer aeroport",
		"facilities.transfer.text": "De la și spre Aeroportul Oradea, la cerere. Tarif suplimentar.",
		"nav.gallery": "Galerie",
		"nav.language": "Limba",
		"dock.call": "Sună-ne",
		"dock.whatsapp": "WhatsApp",
		"spaces.title": "Spații comune",
		"carousel.prev": "Fotografia anterioară",
		"carousel.next": "Fotografia următoare",
		"contact.label": "Contact și rezervări",
		"contact.title": "Te așteptăm la Sunrise Villa.",
		"contact.lead":
			"Scrie-ne pentru disponibilitate, grupuri sau orice întrebare. Răspundem rapid.",
		"contact.phone": "Telefon și WhatsApp",
		"contact.email": "Email",
		"contact.address": "Adresă",
		"contact.times": "Check-in / check-out",
		"contact.times.value": `${CHECKIN_TIME} / până la ${CHECKOUT_TIME}`,
		"form.label": "Formular de contact",
		"form.name": "Nume",
		"form.email": "Email",
		"form.phone": "Telefon",
		"form.dates": "Perioada dorită",
		"form.message": "Mesaj",
		"form.submit": "Trimite mesajul",
		"form.privacy": "Datele tale sunt folosite doar pentru a-ți răspunde.",
		"form.sent": "Mulțumim! Mesajul a fost trimis, revenim în curând.",
		"form.error":
			"Mesajul nu a putut fi trimis. Te rugăm să ne suni sau să ne scrii direct pe email.",
		"footer.pages": "Navigație",
		"footer.rules": "Informații",
		"footer.social": "Urmărește-ne",
		"footer.rules.checkin": `Check-in ${CHECKIN_TIME}`,
		"footer.rules.checkout": `Check-out până la ${CHECKOUT_TIME}`,
		"footer.rules.pets": "Fără animale de companie",
		"footer.privacy": "Politica de confidențialitate",
		"nav.home": "Acasă",
		"roomsPage.meta.title": "Camere | Sunrise Villa ★★★ Băile Felix",
		"roomsPage.meta.description":
			"Camere duble, twin și triple de 20 m² la Sunrise Villa, Băile Felix. Baie proprie, aer condiționat și liniște, la 2 km de centrul stațiunii.",
		"roomsPage.title.before": "Trei feluri de a dormi",
		"roomsPage.title.accent": "bine.",
		"roomsPage.lead":
			"Camere de 20 m², fiecare cu baie proprie, aer condiționat și liniște. Cel mult trei persoane într-o cameră.",
		"roomsPage.showPhoto": "Arată fotografia",
		"roomsPage.extraBed": "+1 pat suplimentar",
		"roomsPage.allin.label": "În toate camerele",
		"roomsPage.allin.title": "Aceleași dotări, oricare ai alege.",
		"amenity.ac": "Aer condiționat",
		"amenity.tv": "TV",
		"amenity.minibar": "Minibar",
		"amenity.desk": "Birou",
		"amenity.bath": "Baie proprie cu duș",
		"amenity.wifi": "WiFi gratuit",
		"galleryPage.meta.title": "Galerie foto | Sunrise Villa ★★★ Băile Felix",
		"galleryPage.meta.description":
			"Sunrise Villa în imagini: camerele, piscina, grădina cu foișor și vila văzută din dronă.",
		// gallery page
		"galleryPage.title": "Galerie foto",
		"galleryPage.filter": "Filtrează fotografiile",
		"galleryPage.cat.toate": "Toate",
		"galleryPage.cat.camere": "Camere",
		"galleryPage.cat.gradina": "Grădină",
		"galleryPage.cat.interior": "Interior",
		"galleryPage.cat.drona": "Din dronă",
		"galleryPage.hint": "Atinge o fotografie pentru a o vedea mare.",
		"galleryPage.viewer.hint": "Glisează stânga sau dreapta",
		"galleryPage.viewer.label": "Vizualizare fotografie",
		"galleryPage.open": "Deschide fotografia:",
		"lightbox.close": "Închide galeria",
		"contactPage.meta.title": "Contact | Sunrise Villa ★★★ Băile Felix",
		"contactPage.meta.description":
			"Contactează Sunrise Villa pentru disponibilitate și tarife: telefon și WhatsApp +40 771 734 907, email sau formular. Vorbim română, germană și engleză.",
		"contactPage.title.before": "Scrie-ne, sună-ne sau",
		"contactPage.title.accent": "rezervă direct.",
		"contactPage.lead":
			"Pentru tarife și disponibilitate sună-ne: recepția răspunde zilnic între 07:00 și 22:00. Pe WhatsApp ne poți scrie oricând.",
		"contactPage.notes.label": "Bine de știut",
		"contactPage.notes.title": "Înainte să suni.",
		"contactPage.notes.extraBed.title": "Pat suplimentar",
		"contactPage.notes.extraBed.text":
			"La cerere, în camera dublă sau twin. Maximum trei persoane într-o cameră.",
		"contactPage.notes.single.title": "O singură persoană",
		"contactPage.notes.single.text": "Poți sta singur într-o cameră dublă, la cerere.",
		"contactPage.notes.payment.title": "Plată și anulare",
		"contactPage.notes.payment.text":
			"Avans 50% prin transfer bancar. Anulare gratuită cu până la 14 zile înainte de sosire.",
		"contactPage.reach.label": "Cum ajungi",
		"contactPage.reach.title": "Aproape de tot, departe de zgomot.",
		"contactPage.reach.alt": "Vila, piscina și grădina văzute din dronă",
		"contactPage.reach.car.title": "Cu mașina",
		"contactPage.reach.car.text":
			"Din centrul Oradea sunt 8 km, cam 15 minute. Parcare privată gratuită în curte.",
		"contactPage.reach.plane.title": "Cu avionul",
		"contactPage.reach.plane.text":
			"Aeroportul Oradea e la aproximativ 8 km, cam 15 minute cu taxiul.",
		"contactPage.reach.resort.title": "În stațiune",
		"contactPage.reach.resort.text":
			"Centrul Băile Felix și Lacul cu Nuferi sunt la 2 km, pe jos sau cu bicicleta.",
		"contact.reception": "Recepție",
		"contact.reception.value": `Zilnic, ${RECEPTION_HOURS}`,
		"form.privacyLink": "Confidențialitate",
		// legal page
		"privacy.updated": "Ultima actualizare:",
		"notFound.meta.title": "Pagina nu există | Sunrise Villa",
		// 404
		"notFound.title": "Pagina nu a fost găsită",
		"notFound.lead": "Se pare că adresa nu mai există sau a fost mutată.",
		"notFound.home": "Înapoi acasă",
		"nav.openMenu": "Deschide meniul",
		"nav.closeMenu": "Închide meniul",
		"header.book": "Rezervare acum",
		"header.homeLabel": "Sunrise Villa, acasă",
		"cta.bookNow": "Rezervă acum",
		"cta.seeGallery": "Vezi galeria",
		"cta.title": "Rezervă-ți momentele de liniște la Sunrise Villa",
		"cta.text":
			"Nu lăsa vacanța pe mai târziu. Te așteptăm cu apa pregătită în piscină și o atmosferă creată special pentru odihna ta.",
		"hero.tagline": "Comfort, liniște și relaxare",
		"hero.stars": "3 stele",
		"rooms.prev": "Camera anterioară",
		"rooms.next": "Camera următoare",
		"spaces.lead":
			"Bucură-te de spațiile noastre comune primitoare, create special pentru momente de liniște sau socializare.",
		"spaces.prev": "Spațiul anterior",
		"spaces.next": "Spațiul următor",
		"carousel.dot": "Mergi la elementul",
		"away.title": "Acasă, departe de casă",
		"away.text":
			"Te întâmpinăm cu liniște, confort și atenție la fiecare detaliu. Rezervă-ți următoarea escapadă și lasă restul în grija noastră.",
		"away.more": "Descoperă mai mult",
		"away.alt": "Interior Sunrise Villa",
		"facilities.pool.short": "Doar pentru oaspeții noștri, înconjurată de grădină.",
		"facilities.wifi.short": "În toate camerele și spațiile comune.",
		"facilities.parking.short": "Parcare privată în incinta pensiunii.",
		"facilities.garden.short": "Spațiu verde privat cu șezlonguri.",
		"facilities.bbq.title": "Grătar / BBQ",
		"facilities.bbq.text": "Pregătește o masă în aer liber cu familia sau prietenii.",
		"facilities.bbq.short": "Pentru o masă în aer liber cu ai tăi.",
		"facilities.transfer.short": "De la și spre Oradea, la cerere.",
		"aquaparks.title": "Reduceri la aquaparkuri pentru oaspeții noștri",
		"aquaparks.lead":
			"Un sejur la Sunrise Villa vine cu un avantaj în plus: pe durata șederii, oaspeții noștri beneficiază de tarife reduse la două dintre cele mai apreciate aquaparkuri din Băile Felix.",
		"aquaparks.details": "Vezi detalii",
		"attractions.title": "Relaxare la Felix, aventură în Oradea",
		"attractions.lead":
			"Pensiunea noastră este poarta ta de acces către cele mai renumite ape termale din România și către farmecul arhitectural al Oradei.",
		"reviews.title": "Ce spun oaspeții noștri",
		"reviews.lead":
			"Peste 100 de recenzii, nota 9.9 din 10 pe Booking.com. Cuvintele lor spun mai mult decât am putea noi.",
		"reviews.prev": "Recenziile anterioare",
		"reviews.next": "Recenziile următoare",
		"reviews.stars": "5 din 5 stele",
		"reviews.google.short": "Google · 113 recenzii",
		"reviews.booking.short": "Booking · Excepțional",
		"reviews.google.name": "Google Reviews",
		"reviews.google.count": "113 recenzii",
		"reviews.booking.name": "Booking.com",
		"reviews.booking.badge": "Excepțional",
		"reviews.booking.count": "Peste 100 de recenzii",
		"homeContact.title": "Pregătit pentru o escapadă?",
		"homeContact.lead":
			"Rezervă direct pe Booking.com sau contactează-ne pentru orice întrebare. Răspundem rapid.",
		"homeContact.hours": "Program recepție",
		"dock.email": "Trimite email",
		"map.load": "Arată harta Google",
		"map.note": "Harta se încarcă de la Google doar după ce apeși butonul.",
		"map.iframeTitle": "Hartă Google: Sunrise Villa",
		"footer.rights": "Toate drepturile rezervate.",
		"footer.rules.reception": `Recepție ${RECEPTION_HOURS}`,
		"footer.rules.smoking": "Fumatul interzis în interior",
		"footer.map.directions": "Indicații de drum",
	},
	en: {
		"meta.title": "Sunrise Villa ★★★ | Guesthouse in Băile Felix",
		"meta.description":
			"A 10-room guesthouse in Băile Felix, 2 km from the resort centre. Private pool, garden, free parking. Rated 9.9 on Booking.com.",
		"nav.rooms": "Rooms",
		"nav.contact": "Contact",
		"nav.menu": "Menu",
		"cta.seeRooms": "See the rooms",
		"rooms.title": "Our rooms",
		"rooms.lead":
			"10 comfortable rooms, each with modern amenities for a pleasant stay. Simplicity, cleanliness and quiet, exactly what you need after a day at the baths.",
		"rooms.persons": "guests",
		"rooms.details": "Room details",
		"footer.tagline": "3-star guesthouse in Băile Felix, a few steps from the thermal waters.",
		"facilities.title": "Facilities at Sunrise Villa",
		"facilities.lead":
			"Discover our amenities, made to turn your stay into a relaxing experience. Everything you need for your comfort, in one place.",
		"facilities.pool.title": "Outdoor pool",
		"facilities.pool.text": "A pool exclusively for our guests, surrounded by the garden.",
		"facilities.garden.title": "Garden & terrace",
		"facilities.garden.text":
			"A private green space with a terrace, loungers and an outdoor relaxation area.",
		"facilities.parking.title": "Free parking",
		"facilities.parking.text": "Free private parking on the guesthouse grounds.",
		"facilities.wifi.title": "Free WiFi",
		"facilities.wifi.text": "High-speed wireless internet in all rooms and common spaces.",
		"facilities.transfer.title": "Airport transfer",
		"facilities.transfer.text": "To and from Oradea Airport, on request. Extra charge.",
		"nav.gallery": "Gallery",
		"nav.language": "Language",
		"dock.call": "Call us",
		"dock.whatsapp": "WhatsApp",
		"spaces.title": "Common spaces",
		"carousel.prev": "Previous photo",
		"carousel.next": "Next photo",
		"contact.label": "Contact and bookings",
		"contact.title": "We look forward to welcoming you.",
		"contact.lead": "Write to us about availability, groups or anything else. We reply quickly.",
		"contact.phone": "Phone and WhatsApp",
		"contact.email": "Email",
		"contact.address": "Address",
		"contact.times": "Check-in / check-out",
		"contact.times.value": `${CHECKIN_TIME} / by ${CHECKOUT_TIME}`,
		"form.label": "Contact form",
		"form.name": "Name",
		"form.email": "Email",
		"form.phone": "Phone",
		"form.dates": "Preferred dates",
		"form.message": "Message",
		"form.submit": "Send message",
		"form.privacy": "Your details are only used to reply to you.",
		"form.sent": "Thank you! Your message has been sent, we'll be in touch soon.",
		"form.error": "Your message couldn't be sent. Please call us or email us directly.",
		"footer.pages": "Navigation",
		"footer.rules": "Information",
		"footer.social": "Follow us",
		"footer.rules.checkin": `Check-in ${CHECKIN_TIME}`,
		"footer.rules.checkout": `Check-out by ${CHECKOUT_TIME}`,
		"footer.rules.pets": "No pets",
		"footer.privacy": "Privacy policy",
		"nav.home": "Home",
		"roomsPage.meta.title": "Rooms | Sunrise Villa ★★★ Băile Felix",
		"roomsPage.meta.description":
			"Double, twin and triple rooms of 20 m² at Sunrise Villa, Băile Felix. Private bathroom, air conditioning and quiet, 2 km from the resort centre.",
		"roomsPage.title.before": "Three ways to sleep",
		"roomsPage.title.accent": "well.",
		"roomsPage.lead":
			"Rooms of 20 m², each with a private bathroom, air conditioning and quiet. Up to three people per room.",
		"roomsPage.showPhoto": "Show photo",
		"roomsPage.extraBed": "+1 extra bed",
		"roomsPage.allin.label": "In every room",
		"roomsPage.allin.title": "The same comforts, whichever you choose.",
		"amenity.ac": "Air conditioning",
		"amenity.tv": "TV",
		"amenity.minibar": "Minibar",
		"amenity.desk": "Desk",
		"amenity.bath": "Private bathroom with shower",
		"amenity.wifi": "Free WiFi",
		"galleryPage.meta.title": "Photo gallery | Sunrise Villa ★★★ Băile Felix",
		"galleryPage.meta.description":
			"Sunrise Villa in pictures: the rooms, the pool, the garden with its gazebo and the villa from above.",
		// gallery page
		"galleryPage.title": "Photo gallery",
		"galleryPage.filter": "Filter photos",
		"galleryPage.cat.toate": "All",
		"galleryPage.cat.camere": "Rooms",
		"galleryPage.cat.gradina": "Garden",
		"galleryPage.cat.interior": "Indoors",
		"galleryPage.cat.drona": "From above",
		"galleryPage.hint": "Tap a photo to see it larger.",
		"galleryPage.viewer.hint": "Swipe left or right",
		"galleryPage.viewer.label": "Photo viewer",
		"galleryPage.open": "Open photo:",
		"lightbox.close": "Close gallery",
		"contactPage.meta.title": "Contact | Sunrise Villa ★★★ Băile Felix",
		"contactPage.meta.description":
			"Contact Sunrise Villa for availability and rates: phone and WhatsApp +40 771 734 907, email or the form. We speak Romanian, German and English.",
		"contactPage.title.before": "Write, call or",
		"contactPage.title.accent": "book directly.",
		"contactPage.lead":
			"Call us for rates and availability: reception answers daily from 07:00 to 22:00. You can message us on WhatsApp at any time.",
		"contactPage.notes.label": "Good to know",
		"contactPage.notes.title": "Before you call.",
		"contactPage.notes.extraBed.title": "Extra bed",
		"contactPage.notes.extraBed.text":
			"On request, in the double or twin room. Up to three people per room.",
		"contactPage.notes.single.title": "Travelling alone",
		"contactPage.notes.single.text": "You can stay alone in a double room, on request.",
		"contactPage.notes.payment.title": "Payment and cancellation",
		"contactPage.notes.payment.text":
			"50% deposit by bank transfer. Free cancellation up to 14 days before arrival.",
		"contactPage.reach.label": "Getting here",
		"contactPage.reach.title": "Close to everything, away from the noise.",
		"contactPage.reach.alt": "The villa, pool and garden from above",
		"contactPage.reach.car.title": "By car",
		"contactPage.reach.car.text":
			"8 km from central Oradea, about 15 minutes. Free private parking in the courtyard.",
		"contactPage.reach.plane.title": "By plane",
		"contactPage.reach.plane.text":
			"Oradea airport is about 8 km away, roughly 15 minutes by taxi.",
		"contactPage.reach.resort.title": "In the resort",
		"contactPage.reach.resort.text":
			"The centre of Băile Felix and the Water Lily Lake are 2 km away, on foot or by bike.",
		"contact.reception": "Reception",
		"contact.reception.value": `Daily, ${RECEPTION_HOURS}`,
		"form.privacyLink": "Privacy",
		// legal page
		"privacy.updated": "Last updated:",
		"notFound.meta.title": "Page not found | Sunrise Villa",
		// 404
		"notFound.title": "Page not found",
		"notFound.lead": "It looks like this address no longer exists or has moved.",
		"notFound.home": "Back home",
		"nav.openMenu": "Open menu",
		"nav.closeMenu": "Close menu",
		"header.book": "Book now",
		"header.homeLabel": "Sunrise Villa, home",
		"cta.bookNow": "Book now",
		"cta.seeGallery": "See the gallery",
		"cta.title": "Book your moments of calm at Sunrise Villa",
		"cta.text":
			"Don't put your holiday off. We'll be waiting with the pool ready and an atmosphere made for your rest.",
		"hero.tagline": "Comfort, calm and relaxation",
		"hero.stars": "3 stars",
		"rooms.prev": "Previous room",
		"rooms.next": "Next room",
		"spaces.lead":
			"Enjoy our welcoming common spaces, made for moments of quiet or for socialising.",
		"spaces.prev": "Previous space",
		"spaces.next": "Next space",
		"carousel.dot": "Go to item",
		"away.title": "A home away from home",
		"away.text":
			"We welcome you with quiet, comfort and attention to every detail. Book your next getaway and leave the rest to us.",
		"away.more": "Discover more",
		"away.alt": "Inside Sunrise Villa",
		"facilities.pool.short": "Just for our guests, surrounded by garden.",
		"facilities.wifi.short": "In all rooms and common spaces.",
		"facilities.parking.short": "Private parking on the grounds.",
		"facilities.garden.short": "Private green space with loungers.",
		"facilities.bbq.title": "Barbecue / BBQ",
		"facilities.bbq.text": "Prepare an outdoor meal with family or friends.",
		"facilities.bbq.short": "For an outdoor meal with your loved ones.",
		"facilities.transfer.short": "To and from Oradea, on request.",
		"aquaparks.title": "Aquapark discounts for our guests",
		"aquaparks.lead":
			"A stay at Sunrise Villa comes with an extra benefit: during their stay, our guests get reduced rates at two of the most popular aquaparks in Băile Felix.",
		"aquaparks.details": "See details",
		"attractions.title": "Relaxation in Felix, adventure in Oradea",
		"attractions.lead":
			"Our guesthouse is your gateway to the most renowned thermal waters in Romania and to the architectural charm of Oradea.",
		"reviews.title": "What our guests say",
		"reviews.lead":
			"Over 100 reviews, rated 9.9 out of 10 on Booking.com. Their words say more than we could.",
		"reviews.prev": "Previous reviews",
		"reviews.next": "Next reviews",
		"reviews.stars": "5 out of 5 stars",
		"reviews.google.short": "Google · 113 reviews",
		"reviews.booking.short": "Booking · Exceptional",
		"reviews.google.name": "Google Reviews",
		"reviews.google.count": "113 reviews",
		"reviews.booking.name": "Booking.com",
		"reviews.booking.badge": "Exceptional",
		"reviews.booking.count": "Over 100 reviews",
		"homeContact.title": "Ready for a getaway?",
		"homeContact.lead":
			"Book directly on Booking.com or contact us with any question. We reply quickly.",
		"homeContact.hours": "Reception hours",
		"dock.email": "Send an email",
		"map.load": "Show Google map",
		"map.note": "The map only loads from Google after you press the button.",
		"map.iframeTitle": "Google map: Sunrise Villa",
		"footer.rights": "All rights reserved.",
		"footer.rules.reception": `Reception ${RECEPTION_HOURS}`,
		"footer.rules.smoking": "No smoking indoors",
		"footer.map.directions": "Directions",
	},
	de: {
		"meta.title": "Sunrise Villa ★★★ | Pension in Băile Felix",
		"meta.description":
			"Pension mit 10 Zimmern in Băile Felix, 2 km vom Kurortzentrum. Privater Pool, Garten, kostenlose Parkplätze. Bewertet mit 9.9 auf Booking.com.",
		"nav.rooms": "Zimmer",
		"nav.contact": "Kontakt",
		"nav.menu": "Menü",
		"cta.seeRooms": "Zimmer ansehen",
		"rooms.title": "Unsere Zimmer",
		"rooms.lead":
			"10 komfortable Zimmer, jedes mit moderner Ausstattung für einen angenehmen Aufenthalt. Schlichtheit, Sauberkeit und Ruhe, genau das, was Sie nach einem Tag in den Bädern brauchen.",
		"rooms.persons": "Personen",
		"rooms.details": "Zimmerdetails",
		"footer.tagline": "3-Sterne-Pension in Băile Felix, wenige Schritte von den Thermalwassern.",
		"facilities.title": "Ausstattung der Sunrise Villa",
		"facilities.lead":
			"Entdecken Sie unsere Ausstattung, die Ihren Aufenthalt zu einem entspannenden Erlebnis macht. Alles für Ihren Komfort an einem Ort.",
		"facilities.pool.title": "Aussenpool",
		"facilities.pool.text": "Ein Pool exklusiv für unsere Gäste, umgeben von Garten.",
		"facilities.garden.title": "Garten & Terrasse",
		"facilities.garden.text":
			"Ein privater Garten mit Terrasse, Liegen und Entspannungsbereich im Freien.",
		"facilities.parking.title": "Kostenlose Parkplätze",
		"facilities.parking.text": "Kostenlose private Parkplätze auf dem Gelände der Pension.",
		"facilities.wifi.title": "Kostenloses WLAN",
		"facilities.wifi.text": "Schnelles WLAN in allen Zimmern und Gemeinschaftsbereichen.",
		"facilities.transfer.title": "Flughafentransfer",
		"facilities.transfer.text": "Von und zum Flughafen Oradea, auf Anfrage. Gegen Aufpreis.",
		"nav.gallery": "Galerie",
		"nav.language": "Sprache",
		"dock.call": "Anrufen",
		"dock.whatsapp": "WhatsApp",
		"spaces.title": "Gemeinschaftsbereiche",
		"carousel.prev": "Vorheriges Foto",
		"carousel.next": "Nächstes Foto",
		"contact.label": "Kontakt und Buchung",
		"contact.title": "Wir freuen uns auf Sie.",
		"contact.lead":
			"Schreiben Sie uns zu Verfügbarkeit, Gruppen oder anderen Fragen. Wir antworten rasch.",
		"contact.phone": "Telefon und WhatsApp",
		"contact.email": "E-Mail",
		"contact.address": "Adresse",
		"contact.times": "Check-in / Check-out",
		"contact.times.value": `${CHECKIN_TIME} / bis ${CHECKOUT_TIME}`,
		"form.label": "Kontaktformular",
		"form.name": "Name",
		"form.email": "E-Mail",
		"form.phone": "Telefon",
		"form.dates": "Gewünschter Zeitraum",
		"form.message": "Nachricht",
		"form.submit": "Nachricht senden",
		"form.privacy": "Ihre Angaben werden nur für unsere Antwort verwendet.",
		"form.sent": "Vielen Dank! Ihre Nachricht wurde gesendet, wir melden uns bald.",
		"form.error":
			"Die Nachricht konnte nicht gesendet werden. Bitte rufen Sie uns an oder schreiben Sie direkt eine E-Mail.",
		"footer.pages": "Navigation",
		"footer.rules": "Informationen",
		"footer.social": "Folgen Sie uns",
		"footer.rules.checkin": `Check-in ${CHECKIN_TIME}`,
		"footer.rules.checkout": `Check-out bis ${CHECKOUT_TIME}`,
		"footer.rules.pets": "Keine Haustiere",
		"footer.privacy": "Datenschutzerklärung",
		"nav.home": "Startseite",
		"roomsPage.meta.title": "Zimmer | Sunrise Villa ★★★ Băile Felix",
		"roomsPage.meta.description":
			"Doppel-, Zweibett- und Dreibettzimmer mit 20 m² in der Sunrise Villa, Băile Felix. Eigenes Bad, Klimaanlage und Ruhe, 2 km vom Kurort entfernt.",
		"roomsPage.title.before": "Drei Arten, gut zu",
		"roomsPage.title.accent": "schlafen.",
		"roomsPage.lead":
			"Zimmer mit 20 m², alle mit eigenem Bad, Klimaanlage und Ruhe. Höchstens drei Personen pro Zimmer.",
		"roomsPage.showPhoto": "Foto zeigen",
		"roomsPage.extraBed": "+1 Zustellbett",
		"roomsPage.allin.label": "In allen Zimmern",
		"roomsPage.allin.title": "Gleiche Ausstattung, egal welches Zimmer.",
		"amenity.ac": "Klimaanlage",
		"amenity.tv": "TV",
		"amenity.minibar": "Minibar",
		"amenity.desk": "Schreibtisch",
		"amenity.bath": "Eigenes Bad mit Dusche",
		"amenity.wifi": "Gratis-WLAN",
		"galleryPage.meta.title": "Fotogalerie | Sunrise Villa ★★★ Băile Felix",
		"galleryPage.meta.description":
			"Sunrise Villa in Bildern: Zimmer, Pool, Garten mit Pavillon und die Villa von oben.",
		// gallery page
		"galleryPage.title": "Fotogalerie",
		"galleryPage.filter": "Fotos filtern",
		"galleryPage.cat.toate": "Alle",
		"galleryPage.cat.camere": "Zimmer",
		"galleryPage.cat.gradina": "Garten",
		"galleryPage.cat.interior": "Innen",
		"galleryPage.cat.drona": "Von oben",
		"galleryPage.hint": "Tippen Sie auf ein Foto, um es gross zu sehen.",
		"galleryPage.viewer.hint": "Nach links oder rechts wischen",
		"galleryPage.viewer.label": "Fotoansicht",
		"galleryPage.open": "Foto öffnen:",
		"lightbox.close": "Galerie schliessen",
		"contactPage.meta.title": "Kontakt | Sunrise Villa ★★★ Băile Felix",
		"contactPage.meta.description":
			"Kontaktieren Sie die Sunrise Villa für Verfügbarkeit und Preise: Telefon und WhatsApp +40 771 734 907, E-Mail oder Formular. Wir sprechen Rumänisch, Deutsch und Englisch.",
		"contactPage.title.before": "Schreiben, anrufen oder",
		"contactPage.title.accent": "direkt buchen.",
		"contactPage.lead":
			"Für Preise und Verfügbarkeit rufen Sie uns an: Die Rezeption ist täglich von 07:00 bis 22:00 erreichbar. Per WhatsApp jederzeit.",
		"contactPage.notes.label": "Gut zu wissen",
		"contactPage.notes.title": "Bevor Sie anrufen.",
		"contactPage.notes.extraBed.title": "Zustellbett",
		"contactPage.notes.extraBed.text":
			"Auf Anfrage im Doppel- oder Zweibettzimmer. Höchstens drei Personen pro Zimmer.",
		"contactPage.notes.single.title": "Allein reisend",
		"contactPage.notes.single.text": "Ein Doppelzimmer kann auf Anfrage allein belegt werden.",
		"contactPage.notes.payment.title": "Zahlung und Stornierung",
		"contactPage.notes.payment.text":
			"50% Anzahlung per Banküberweisung. Kostenlose Stornierung bis 14 Tage vor Anreise.",
		"contactPage.reach.label": "Anreise",
		"contactPage.reach.title": "Nah an allem, weit weg vom Trubel.",
		"contactPage.reach.alt": "Villa, Pool und Garten von oben",
		"contactPage.reach.car.title": "Mit dem Auto",
		"contactPage.reach.car.text":
			"8 km vom Zentrum Oradeas, etwa 15 Minuten. Kostenlose private Parkplätze im Hof.",
		"contactPage.reach.plane.title": "Mit dem Flugzeug",
		"contactPage.reach.plane.text":
			"Der Flughafen Oradea liegt rund 8 km entfernt, etwa 15 Minuten mit dem Taxi.",
		"contactPage.reach.resort.title": "Im Kurort",
		"contactPage.reach.resort.text":
			"Das Zentrum von Băile Felix und der Seerosensee sind 2 km entfernt, zu Fuss oder mit dem Velo.",
		"contact.reception": "Rezeption",
		"contact.reception.value": `Täglich, ${RECEPTION_HOURS}`,
		"form.privacyLink": "Datenschutz",
		// legal page
		"privacy.updated": "Zuletzt aktualisiert:",
		"notFound.meta.title": "Seite nicht gefunden | Sunrise Villa",
		// 404
		"notFound.title": "Seite nicht gefunden",
		"notFound.lead": "Diese Adresse existiert nicht mehr oder wurde verschoben.",
		"notFound.home": "Zur Startseite",
		"nav.openMenu": "Menü öffnen",
		"nav.closeMenu": "Menü schliessen",
		"header.book": "Jetzt buchen",
		"header.homeLabel": "Sunrise Villa, Startseite",
		"cta.bookNow": "Jetzt buchen",
		"cta.seeGallery": "Galerie ansehen",
		"cta.title": "Buchen Sie Ihre Momente der Ruhe in der Sunrise Villa",
		"cta.text":
			"Verschieben Sie Ihren Urlaub nicht. Wir erwarten Sie mit bereitem Pool und einer Atmosphäre, die für Ihre Erholung geschaffen ist.",
		"hero.tagline": "Komfort, Ruhe und Entspannung",
		"hero.stars": "3 Sterne",
		"rooms.prev": "Vorheriges Zimmer",
		"rooms.next": "Nächstes Zimmer",
		"spaces.lead":
			"Geniessen Sie unsere einladenden Gemeinschaftsbereiche, geschaffen für Momente der Ruhe oder der Geselligkeit.",
		"spaces.prev": "Voriger Bereich",
		"spaces.next": "Nächster Bereich",
		"carousel.dot": "Gehe zu Element",
		"away.title": "Ein Zuhause fern der Heimat",
		"away.text":
			"Wir empfangen Sie mit Ruhe, Komfort und Liebe zum Detail. Buchen Sie Ihre nächste Auszeit und überlassen Sie den Rest uns.",
		"away.more": "Mehr entdecken",
		"away.alt": "Innenraum der Sunrise Villa",
		"facilities.pool.short": "Nur für unsere Gäste, umgeben von Garten.",
		"facilities.wifi.short": "In allen Zimmern und Gemeinschaftsbereichen.",
		"facilities.parking.short": "Private Parkplätze auf dem Gelände.",
		"facilities.garden.short": "Privater Garten mit Liegen.",
		"facilities.bbq.title": "Grill / BBQ",
		"facilities.bbq.text": "Bereiten Sie ein Essen im Freien mit Familie oder Freunden zu.",
		"facilities.bbq.short": "Für ein Essen im Freien mit Ihren Liebsten.",
		"facilities.transfer.short": "Von und nach Oradea, auf Anfrage.",
		"aquaparks.title": "Ermässigungen in Aquaparks für unsere Gäste",
		"aquaparks.lead":
			"Ein Aufenthalt in der Sunrise Villa bietet einen zusätzlichen Vorteil: Während ihres Aufenthalts erhalten unsere Gäste ermässigte Preise in zwei der beliebtesten Aquaparks in Băile Felix.",
		"aquaparks.details": "Details ansehen",
		"attractions.title": "Entspannung in Felix, Abenteuer in Oradea",
		"attractions.lead":
			"Unsere Pension ist Ihr Tor zu den bekanntesten Thermalwassern Rumäniens und zum architektonischen Charme von Oradea.",
		"reviews.title": "Was unsere Gäste sagen",
		"reviews.lead":
			"Über 100 Bewertungen, 9.9 von 10 auf Booking.com. Ihre Worte sagen mehr, als wir es könnten.",
		"reviews.prev": "Vorherige Bewertungen",
		"reviews.next": "Nächste Bewertungen",
		"reviews.stars": "5 von 5 Sternen",
		"reviews.google.short": "Google · 113 Bewertungen",
		"reviews.booking.short": "Booking · Aussergewöhnlich",
		"reviews.google.name": "Google-Bewertungen",
		"reviews.google.count": "113 Bewertungen",
		"reviews.booking.name": "Booking.com",
		"reviews.booking.badge": "Aussergewöhnlich",
		"reviews.booking.count": "Über 100 Bewertungen",
		"homeContact.title": "Bereit für eine Auszeit?",
		"homeContact.lead":
			"Buchen Sie direkt auf Booking.com oder kontaktieren Sie uns bei Fragen. Wir antworten rasch.",
		"homeContact.hours": "Empfangszeiten",
		"dock.email": "E-Mail senden",
		"map.load": "Google-Karte anzeigen",
		"map.note": "Die Karte wird erst nach dem Klick von Google geladen.",
		"map.iframeTitle": "Google-Karte: Sunrise Villa",
		"footer.rights": "Alle Rechte vorbehalten.",
		"footer.rules.reception": `Empfang ${RECEPTION_HOURS}`,
		"footer.rules.smoking": "Rauchen im Innenbereich verboten",
		"footer.map.directions": "Route planen",
	},
} as const satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)["ro"];

// Compile-time guard: every language must define every key Romanian defines.
const _complete: Record<Lang, Record<UiKey, string>> = ui;
void _complete;

export function useTranslations(lang: Lang) {
	return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/** Narrow Astro.currentLocale (string | undefined) to a site language. */
export function getLang(locale: string | undefined): Lang {
	return locale && locale in languages ? (locale as Lang) : defaultLang;
}
