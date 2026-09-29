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
  mapLat: 29.887181,
  mapLng: 77.879039,
  hours: "Mon–Sat · 9:30am – 6:30pm IST",
  email: "muaasiyainternational@gmail.com",
  phone: "+91 74570 99540",
  phoneTel: "+917457099540",
  whatsapp: "917457099540",
} as const;

export const companyMailto = `mailto:${company.email}`;
export const companyTel = `tel:${company.phoneTel}`;
export const companyWhatsApp = `https://wa.me/${company.whatsapp}`;

export const companyAddress = company.address.join(", ");
export const companyMapSrc = `https://maps.google.com/maps?q=${company.mapLat},${company.mapLng}&ll=${company.mapLat},${company.mapLng}&z=17&hl=en&output=embed&iwloc=`;
export const companyDirections = `https://www.google.com/maps/dir/?api=1&destination=${company.mapLat},${company.mapLng}`;
