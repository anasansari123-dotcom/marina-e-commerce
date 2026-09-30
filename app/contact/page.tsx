import Image from "next/image";
import Link from "next/link";
import { Clock3, ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { company, companyDirections, companyMapSrc, companyTel, companyWhatsApp } from "@/lib/company";

const desks = [
  { title: "Retail", body: "Orders, tracking and product advice." },
  { title: "Wholesale / B2B", body: "Catalogues, MOQs and trade terms." },
  { title: "OEM & custom", body: "Drawings, logos and sampling." },
];

export default function ContactPage() {
  return (
    <div className="bg-[#FAF7F2]">
      <section className="relative min-h-[340px] overflow-hidden bg-[#0d0a08] text-cream-50 md:min-h-[400px] lg:aspect-[1600/633] lg:max-h-[640px] lg:min-h-0">
        <Image
          src="/contact-us-slide.jpeg"
          alt="Brass globe, binoculars and compass on a desk with a world route map and cargo ship"
          fill
          sizes="100vw"
          className="object-cover object-[70%_center] lg:object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent lg:from-black/60 lg:via-black/20" />
        <div className="relative mx-auto flex h-full min-h-[340px] max-w-[1320px] flex-col justify-center px-5 py-10 md:min-h-[400px] lg:min-h-0">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#C9A84C]">Contact us</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-[1.08] md:text-[3.4rem]">
            Atelier & trade desk.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/80">
            Retail questions, wholesale pricing, or a drawing you want in brass — write to us. WhatsApp is often fastest.
          </p>
        </div>
      </section>

      <section className="px-5 py-10 md:py-14">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">Reach {company.name}</h2>
            <p className="mt-4 max-w-md text-navy-600">
              We reply within one business day. For urgent wholesale samples, WhatsApp the trade desk.
            </p>
            <ul className="mt-10 space-y-5 text-navy-800">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]" />
                <span>
                  <strong>{company.name}</strong>
                  <br />
                  <span className="text-xs uppercase tracking-[0.16em] text-[#8C6E28]">
                    {company.role}
                  </span>
                  <br />
                  Corporate Office &amp; Factory
                  <br />
                  {company.address[0]}
                  <br />
                  {company.address[1]}
                  <br />
                  {company.address[2]}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]" />
                <span>
                  <a href={`mailto:${company.email}`} className="hover:text-[#8C6E28]">
                    {company.email}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]" />
                <a href={companyTel} className="hover:text-[#8C6E28]">
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]" />
                <span>{company.hours}</span>
              </li>
            </ul>
            <a
              href={companyWhatsApp}
              target="_blank"
              rel="noreferrer"
              className="btn-gold mt-8 inline-flex gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {desks.map((d) => (
                <div key={d.title} className="rounded-2xl border border-[#eee7db] bg-white p-4">
                  <p className="font-serif text-xl">{d.title}</p>
                  <p className="mt-1 text-sm text-navy-600">{d.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-navy-600">
              Looking for volume?{" "}
              <Link href="/wholesale" className="text-[#8C6E28] underline">
                Open a wholesale account
              </Link>{" "}
              or{" "}
              <Link href="/wholesale/quote" className="text-[#8C6E28] underline">
                request a bulk quote
              </Link>
              .
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="border-t border-[#eee7db] px-5 pb-10 pt-8 md:pb-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#8C6E28]">Visit us</p>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl">Find the atelier</h2>
              <p className="mt-2 max-w-lg text-navy-600">
                Corporate office &amp; factory — {company.address.join(", ")}. Appointments welcome for
                wholesale buyers and OEM sampling.
              </p>
            </div>
            <a
              href={companyDirections}
              target="_blank"
              rel="noreferrer"
              className="btn-gold inline-flex gap-2"
            >
              Get directions
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-[#eee7db] bg-white shadow-soft">
            <iframe
              title={`${company.name} factory map — Roorkee, Uttarakhand, India`}
              src={companyMapSrc}
              className="h-[280px] w-full md:h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="border-t border-[#eee7db] bg-white p-4 md:absolute md:bottom-auto md:left-6 md:right-auto md:top-6 md:z-10 md:max-w-xs md:rounded-2xl md:border-0 md:bg-white/95 md:p-4 md:shadow-soft md:pointer-events-none">
              <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#8C6E28]">
                <MapPin className="h-3.5 w-3.5" />
                Factory
              </p>
              <p className="mt-2 font-serif text-2xl text-navy-950">{company.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-navy-600">
                {company.address[0]}
                <br />
                {company.address[1]}
                <br />
                {company.address[2]}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
