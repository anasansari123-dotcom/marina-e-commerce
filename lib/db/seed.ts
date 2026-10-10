import { getDb } from "@/lib/mongodb";
import type { Testimonial } from "./types";

const defaultTestimonials: Omit<Testimonial, "_id">[] = [
  {
    title: "Absolutely beautiful",
    body: "The quality and finish exceeded expectations. Gifted it to my father — he keeps it on his desk.",
    name: "James W.",
    location: "London",
    product: "Antique Brass Nautical Compass",
    published: true,
    showOnHome: true,
    sortOrder: 1,
    createdAt: new Date(),
  },
  {
    title: "Wholesale, sorted",
    body: "We ordered 200 officer brass binoculars for our store. On time, boxed perfectly — still our bestseller.",
    name: "Priya S.",
    location: "Mumbai",
    product: "Officer Brass Binoculars",
    published: true,
    showOnHome: true,
    sortOrder: 2,
    createdAt: new Date(),
  },
  {
    title: "Hotel programme",
    body: "Used the lanterns and porthole mirrors across 40 rooms. Guests photograph them constantly.",
    name: "Marco D.",
    location: "Barcelona",
    product: "Ship Lantern in Brass",
    published: true,
    showOnHome: true,
    sortOrder: 3,
    createdAt: new Date(),
  },
];

export async function ensureTestimonialsSeeded() {
  const db = await getDb();
  const col = db.collection<Testimonial>("testimonials");
  const count = await col.countDocuments();
  if (count === 0) {
    await col.insertMany(defaultTestimonials);
  }
}
