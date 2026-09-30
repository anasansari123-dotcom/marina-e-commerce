export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-solid-brass-still-matters",
    title: "Why solid brass still matters in nautical interiors",
    excerpt:
      "How Marina Muse finishes instruments that age well in homes, hotels and trade programmes — and why plated zinc never lasts.",
    date: "September 8, 2026",
    image: "/about-us-slide.jpeg",
    body: [
      "A working compass, a floor telescope, a ship bell — these pieces earn their place when the metal is honest. Solid brass takes a file, a flame and a wax in a way plated zinc never will.",
      "At Marina Muse International we cast, age and inspect in our own facility. The finish is not a spray antique; it is a hand patina that deepens with use. That is why hospitality buyers and collectors come back to the same SKUs season after season.",
      "If you are specifying a lobby or a gift programme, ask for unlacquered or lightly waxed brass. It will mark, then mellow — which is the point of the material.",
    ],
  },
  {
    slug: "choosing-a-telescope-for-display-and-viewing",
    title: "Choosing a telescope for display and actual viewing",
    excerpt:
      "Floor tripods, spyglasses and binocular telescopes — what to specify for retail, hotels and private collections.",
    date: "August 22, 2026",
    image: "/5-slide.jpeg",
    body: [
      "Not every brass telescope is meant only for a shelf. Our nautical spyglasses and binocular telescopes are built with optical glass so they can be used, then closed and shown.",
      "For hotels and showrooms, a wooden-tripod floor piece reads as furniture. For gifting and retail, a leather-wrapped handheld spyglass in a box is easier to ship and to brand.",
      "Tell us the lens size, the finish and the destination. We will match a standard model or a custom barrel to the brief.",
    ],
  },
  {
    slug: "oem-and-wholesale-from-india",
    title: "OEM and wholesale: how we work from India",
    excerpt:
      "Sampling, logos, packing and FOB or CIF — a short guide for importers, retailers and corporate buyers.",
    date: "July 14, 2026",
    image: "/4-slide.jpeg",
    body: [
      "Since 2011, Marina Muse International has manufactured and exported handcrafted nautical, brass and armour goods from India. Wholesale accounts receive catalogues, MOQs and repeat pricing.",
      "Custom manufacturing covers design, size, material, finish and branding. We sample before production, inspect every piece and pack for export.",
      "Open a wholesale account or send a bulk quote with destination and Incoterm. The trade desk replies within one business day.",
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
