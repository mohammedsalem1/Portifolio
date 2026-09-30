/**
 * Everything contact-related in one place. Safe to import anywhere.
 *
 * CV:      put the PDF at public/cv/Mohammed-Salem-CV.pdf. The download and
 *          view buttons turn on automatically when the file exists
 *          (see src/config/files.ts).
 * Photo:   put a portrait at public/images/profile.jpg (4:5 works best).
 *          Until then the About section shows a labelled placeholder.
 * Cut-out: put the same portrait with its background removed at
 *          public/images/profile-cutout.png (transparent PNG, remove.bg or
 *          similar). The hero then uses it instead of the photo, standing
 *          in the page with no room behind it.
 * Booking: set NEXT_PUBLIC_BOOKING_URL (Cal.com, Calendly, a Google Calendar
 *          appointment page...). Until then "Book a call" opens an email.
 * Telegram: set the username below (without @). Until then the Telegram
 *          link is left out of the Contact section.
 */
export const site = {
  email: "m7.salim3@gmail.com",
  whatsappNumber: "972595040991",
  whatsappDisplay: "+972 59 504 0991",
  github: "https://github.com/mohammedsalem1",
  linkedin: "https://www.linkedin.com/in/mohammedsalem9/",
  telegramUsername: "mohammedsalim39" as string,
  cvPath: "/cv/Mohammed-Salem-CV.pdf",
  photoPath: "/images/profile.jpg",
  cutoutPath: "/images/profile-cutout.png",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}`;
export const phoneUrl = `tel:+${site.whatsappNumber}`;
export const telegramUrl = site.telegramUsername ? `https://t.me/${site.telegramUsername}` : "";

export type BookingLink = { href: string; external: boolean };

/** The real scheduling page when configured, otherwise a prefilled email. */
export function bookingLink(subject: string): BookingLink {
  if (site.bookingUrl) return { href: site.bookingUrl, external: true };
  return {
    href: `mailto:${site.email}?subject=${encodeURIComponent(subject)}`,
    external: false,
  };
}
