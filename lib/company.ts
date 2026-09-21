export const company = {
  name: "Marina Muse International",
  role: "Exporter, Manufacturer & Supplier",
  address: [
    "Rampur Chungi, Doon School Road",
    "Green Park Colony, Lane No. 9",
    "Roorkee-247667, Uttarakhand, India",
  ],
  city: "Roorkee",
  state: "Uttarakhand",
  country: "India",
  mapQuery:
    "Rampur Chungi, Doon School Road, Green Park Colony, Lane No. 9, Roorkee 247667, Uttarakhand, India",
  hours: "Mon–Sat · 9:30am – 6:30pm IST",
  email: "hello@marinamuse.com",
} as const;

export const companyAddress = company.address.join(", ");
export const companyMapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&hl=en&z=16&output=embed`;
export const companyDirections = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(company.mapQuery)}`;
