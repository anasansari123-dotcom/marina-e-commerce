import type { Product } from "./products";
import { img } from "./images";

export type ShopNowChild = { slug: string; name: string };
export type ShopNowParent = {
  slug: string;
  name: string;
  children: ShopNowChild[];
};

export const shopNowTree: ShopNowParent[] = [
  {
    slug: "brass-binocular",
    name: "Handheld Brass Binoculars",
    children: [
      { slug: "handheld-brass-binocular", name: "Antique Field Binocular 6×30" },
      { slug: "officer-field-binocular", name: "Officer Leather Binocular 8×40" },
      { slug: "brass-handheld-binocular", name: "Polished Pocket Binocular 4×30" },
    ],
  },
  {
    slug: "brass-spyglass-telescope",
    name: "Brass Spyglasses",
    children: [
      { slug: "leather-wrapped-spyglass", name: "Leather-Wrapped Handheld Spyglass" },
      { slug: "handheld-brass-spyglass", name: "Retractable Brass Pocket Spyglass" },
      { slug: "handheld-retractable-telescope", name: 'Marine Mini Spyglass 6"' },
    ],
  },
  {
    slug: "brass-telescope-tripod",
    name: "Floor Telescopes on Tripod",
    children: [
      { slug: "vintage-brass-telescope-wood-tripod", name: "Vintage Telescope on Wooden Tripod" },
      { slug: "nautical-spyglass-tripod", name: "Nautical Spyglass on Studio Tripod" },
      { slug: "marine-telescope-brass-tripod", name: "Marine Telescope on Brass Tripod" },
      { slug: "floor-telescope", name: "Adjustable Floor Standing Telescope" },
    ],
  },
  {
    slug: "brass-telescope-stand",
    name: "Tabletop Telescope Stands",
    children: [
      { slug: "tabletop-brass-telescope-stand", name: "Desk Telescope on Short Stand" },
      { slug: "tabletop-telescope-stand", name: "Tabletop Brass Telescope with Base" },
    ],
  },
  {
    slug: "brass-binocular-tripod",
    name: "Observation Binoculars on Tripod",
    children: [
      { slug: "binocular-telescope-wood-tripod", name: "Dual-Head Binocular on Wooden Tripod" },
      { slug: "brass-tripod-binocular", name: "Brass Observation Binocular on Tripod" },
    ],
  },
  {
    slug: "brass-lamp-tripod",
    name: "Marine Tripod Lamps",
    children: [
      { slug: "marine-brass-lamp-tripod", name: "Marine Oil Lamp on Wooden Tripod" },
    ],
  },
  {
    slug: "wooden-ship-wheel",
    name: "Wooden Ship Wheels",
    children: [
      { slug: "handmade-wooden-ship-wheel", name: 'Handmade Teak Ship Wheel 18"' },
    ],
  },
  {
    slug: "royal-lamp-tripod",
    name: "Royal Floor Lamps",
    children: [
      { slug: "royal-brass-lamp-tripod", name: "Royal Brass Floor Lamp on Tripod" },
    ],
  },
  {
    slug: "armor-breast-plate",
    name: "Armor Breast Plate & Jackets",
    children: [
      { slug: "gloves", name: "Steel Armor Combat Gloves" },
    ],
  },
  {
    slug: "armor-helmets",
    name: "Armor Helmets",
    children: [
      { slug: "roman-centurion-helmet", name: "Roman Centurion Helmet with Plume" },
      { slug: "armor-shield", name: "Heraldic Knight Shield" },
      { slug: "norman-knight-helmet", name: "Norman Knight Nasal Helmet" },
      { slug: "movie-replica-armor-helmet", name: "Movie Replica Armor Helmet" },
      { slug: "corinthian-armor-helmet", name: "Corinthian Greek Helmet" },
      { slug: "german-armor-helmet", name: "German Sallet Helmet" },
      { slug: "roman-armor-helmet", name: "Roman Legionary Helmet" },
      { slug: "medieval-armor-helmet", name: "Medieval Great Helm" },
    ],
  },
  {
    slug: "muscle-armour",
    name: "Muscle Armour",
    children: [
      { slug: "steel-shield", name: "Solid Steel Battle Shield" },
      { slug: "armour-shield", name: "Round Brass-Rimmed Shield" },
      { slug: "muscle-armor", name: "Greek Muscle Cuirass" },
      { slug: "leather-muscle-armor", name: "Leather Muscle Cuirass" },
    ],
  },
  {
    slug: "armory-props",
    name: "Armory Props",
    children: [
      { slug: "medieval-shield", name: "Medieval Heater Shield" },
      { slug: "chainmail-armor", name: "Chainmail Hauberk" },
      { slug: "roman-legion-belt", name: "Roman Legion Cingulum Belt" },
      { slug: "armor-shoes-sandals", name: "Roman Armor Caligae Sandals" },
      { slug: "armor-gauntlet", name: "Steel Armor Gauntlet" },
      { slug: "armor-hand-leg-guard", name: "Armor Vambrace & Greave Set" },
      { slug: "armor-shoulder", name: "Armor Pauldron Shoulder Guard" },
    ],
  },
  {
    slug: "compass",
    name: "Compass",
    children: [
      { slug: "push-button-compass", name: "Push-Button Pocket Compass" },
      { slug: "compass-with-lid", name: "Hinged-Lid Desk Compass" },
      { slug: "flat-compass", name: "Flat Card Compass" },
      { slug: "brunton-compass", name: "Brunton Survey Compass" },
      { slug: "sundial-compass", name: "Brass Sundial Compass" },
    ],
  },
  {
    slug: "spotlight-searchlight",
    name: "Spotlight / Searchlight",
    children: [
      { slug: "table-lamp", name: "Brass Cabin Table Lamp" },
      { slug: "spot-light", name: "Marine Deck Spot Light" },
      { slug: "spotlight", name: "Brass Bulkhead Searchlight" },
      { slug: "floor-lamp", name: "Nautical Floor Lantern" },
    ],
  },
  {
    slug: "clocks",
    name: "Clocks",
    children: [
      { slug: "pocket-watches", name: "Brass Open-Face Pocket Watch" },
      { slug: "table-clocks", name: "Maritime Desk Clock" },
      { slug: "brass-table-watch", name: "Brass Table Watch with Compass Dial" },
      { slug: "nautical-pocket-watch", name: "Nautical Pocket Watch on Chain" },
    ],
  },
  {
    slug: "ship-bell",
    name: "Ship Bell",
    children: [
      { slug: "hand-bell", name: "Brass Hand Bell" },
      { slug: "hanging-bell", name: "Hanging Ship Bell with Bracket" },
      { slug: "desk-bell", name: "Captain’s Desk Bell" },
    ],
  },
  {
    slug: "nautical-decor-gifts",
    name: "Nautical Decor & Gifts",
    children: [
      { slug: "brass-burner", name: "Brass Incense Burner" },
      { slug: "pen-holder", name: "Brass Desk Pen Holder" },
      { slug: "wooden-mug", name: "Turned Wooden Tankard" },
      { slug: "wooden-game", name: "Wooden Chess & Board Game" },
      { slug: "wooden-boxes", name: "Wooden Keepsake Boxes" },
      { slug: "wooden-cross", name: "Wooden Cross Pendant" },
      { slug: "game", name: "Nautical Dice & Card Game" },
      { slug: "mirror", name: "Nautical Porthole Mirror" },
      { slug: "home-kitchen", name: "Brass Kitchen Décor Set" },
      { slug: "home-appliances", name: "Nautical Home Accents" },
      { slug: "crystal-wood-crafts", name: "Crystal & Wood Desk Crafts" },
      { slug: "armillary", name: "Brass Armillary Sphere" },
    ],
  },
];

function product(
  data: Pick<Product, "slug" | "name" | "sku" | "price" | "collection" | "image"> & Partial<Product>
): Product {
  const image = data.image;
  return {
    rating: 4.6,
    reviews: 32,
    stock: "in-stock",
    finish: "Antique / polished",
    material: data.material || "Brass / steel / wood",
    dimensions: data.dimensions || "As pictured",
    weight: "—",
    packaging: "Export carton",
    included: ["Product", "Export packing"],
    description: data.description || data.name,
    story: "Handcrafted for wholesale export from India. Logo and packaging programmes available.",
    moq: 12,
    ...data,
    image,
    gallery: data.gallery || [image],
  };
}

function listing(
  parent: string,
  sub: string,
  name: string,
  sku: string,
  price: number,
  collection: string,
  image: string
): Product {
  return product({
    slug: `${sub}-1`,
    name,
    sku: `${sku}-01`,
    price,
    wholesaleFrom: Number((price * 0.68).toFixed(2)),
    moq: 12,
    collection,
    category: parent,
    subcategory: sub,
    image,
    description: `${name}. Handcrafted for export from our Roorkee factory — logo and packaging programmes available.`,
  });
}

const armor = [img.armor, img.knight, img.helmet, img.armor];
const helm = [img.helmet, img.knight, img.armor, img.helmet];
const glass = [img.telescope, img.telescopeNight, img.telescopeAstro, img.telescope];
const bins = [img.binoculars, img.binocularsField, img.binocularsMap, img.binoculars];
const comps = [img.compassBrass, img.compassGold, img.compassMap, img.compassBrass];
const lamps = [img.lanternCandle, img.lanternOil, img.lanternVintage, img.lanternCandle];
const time = [img.watch, img.clock, img.watch, img.clock];
const bells = [img.antiques6, img.lanternVintage, img.ship, img.rope];
const wood = [img.workshop, img.gift, img.jewelry, img.globe];
const tripods = [img.tripodWood, img.tripodSpyglass, img.tripodMarine, img.tripodWood];
const binTripods = [img.tripodBinocular, img.binoculars, img.binocularsMap, img.tripodBinocular];
const wheels = [img.shipWheelWood, img.sail, img.sailboat, img.ship];
const lampStands = [img.lampTripod, img.royalLamp, img.lanternVintage, img.lanternOil];

export const shopNowProducts: Product[] = [
  listing("brass-binocular", "handheld-brass-binocular", "Antique Field Binocular 6×30", "MM-BIN-HB", 36, "brass-binoculars", bins[0]),
  listing("brass-binocular", "officer-field-binocular", "Officer Leather Binocular 8×40", "MM-BIN-OF", 42, "brass-binoculars", bins[1]),
  listing("brass-binocular", "brass-handheld-binocular", "Polished Pocket Binocular 4×30", "MM-BIN-HH", 29, "brass-binoculars", bins[2]),
  listing("brass-spyglass-telescope", "leather-wrapped-spyglass", "Leather-Wrapped Handheld Spyglass", "MM-SPY-LW", 48, "telescopes", glass[1]),
  listing("brass-spyglass-telescope", "handheld-brass-spyglass", "Retractable Brass Pocket Spyglass", "MM-SPY-HH", 39, "telescopes", glass[0]),
  listing("brass-spyglass-telescope", "handheld-retractable-telescope", 'Marine Mini Spyglass 6"', "MM-TEL-HR", 4.95, "telescopes", glass[2]),
  listing("brass-telescope-stand", "tabletop-brass-telescope-stand", "Desk Telescope on Short Stand", "MM-STD-TT", 89, "telescopes", tripods[0]),
  listing("brass-telescope-stand", "tabletop-telescope-stand", "Tabletop Brass Telescope with Base", "MM-TEL-TT", 29, "telescopes", glass[0]),
  listing("brass-telescope-tripod", "floor-telescope", "Adjustable Floor Standing Telescope", "MM-TEL-FL", 79, "telescopes", tripods[2]),
  listing("brass-binocular-tripod", "brass-tripod-binocular", "Brass Observation Binocular on Tripod", "MM-BIN-TR", 48, "brass-binoculars", binTripods[0]),
  listing("brass-lamp-tripod", "marine-brass-lamp-tripod", "Marine Oil Lamp on Wooden Tripod", "MM-LMP-TR", 72, "nautical-decor", lampStands[0]),
  listing("wooden-ship-wheel", "handmade-wooden-ship-wheel", 'Handmade Teak Ship Wheel 18"', "MM-WHL-WD", 54, "ship-wheels", wheels[0]),
  listing("royal-lamp-tripod", "royal-brass-lamp-tripod", "Royal Brass Floor Lamp on Tripod", "MM-LMP-RY", 86, "nautical-decor", lampStands[1]),
  listing("armor-breast-plate", "gloves", "Steel Armor Combat Gloves", "MM-GLV", 24, "nautical-decor", armor[0]),
  listing("armor-helmets", "roman-centurion-helmet", "Roman Centurion Helmet with Plume", "MM-HLM-RC", 79, "nautical-decor", helm[0]),
  listing("armor-helmets", "armor-shield", "Heraldic Knight Shield", "MM-HLM-SH", 35, "nautical-decor", armor[1]),
  listing("armor-helmets", "norman-knight-helmet", "Norman Knight Nasal Helmet", "MM-HLM-NK", 88, "nautical-decor", helm[1]),
  listing("armor-helmets", "movie-replica-armor-helmet", "Movie Replica Armor Helmet", "MM-HLM-MV", 95, "nautical-decor", helm[2]),
  listing("armor-helmets", "corinthian-armor-helmet", "Corinthian Greek Helmet", "MM-HLM-CO", 82, "nautical-decor", helm[0]),
  listing("armor-helmets", "german-armor-helmet", "German Sallet Helmet", "MM-HLM-GE", 86, "nautical-decor", helm[1]),
  listing("armor-helmets", "roman-armor-helmet", "Roman Legionary Helmet", "MM-HLM-RA", 79, "nautical-decor", helm[2]),
  listing("armor-helmets", "medieval-armor-helmet", "Medieval Great Helm", "MM-HLM-MD", 84, "nautical-decor", helm[0]),
  listing("muscle-armour", "steel-shield", "Solid Steel Battle Shield", "MM-MSC-SS", 42, "nautical-decor", armor[0]),
  listing("muscle-armour", "armour-shield", "Round Brass-Rimmed Shield", "MM-MSC-AS", 39, "nautical-decor", armor[1]),
  listing("muscle-armour", "muscle-armor", "Greek Muscle Cuirass", "MM-MSC-MA", 249, "nautical-decor", armor[2]),
  listing("muscle-armour", "leather-muscle-armor", "Leather Muscle Cuirass", "MM-MSC-LM", 189, "nautical-decor", armor[3]),
  listing("armory-props", "medieval-shield", "Medieval Heater Shield", "MM-PRP-MS", 32, "nautical-decor", armor[1]),
  listing("armory-props", "chainmail-armor", "Chainmail Hauberk", "MM-PRP-CM", 110, "nautical-decor", armor[0]),
  listing("armory-props", "roman-legion-belt", "Roman Legion Cingulum Belt", "MM-PRP-BL", 28, "nautical-decor", helm[2]),
  listing("armory-props", "armor-shoes-sandals", "Roman Armor Caligae Sandals", "MM-PRP-SH", 36, "nautical-decor", armor[2]),
  listing("armory-props", "armor-gauntlet", "Steel Armor Gauntlet", "MM-PRP-GT", 39, "nautical-decor", helm[0]),
  listing("armory-props", "armor-hand-leg-guard", "Armor Vambrace & Greave Set", "MM-PRP-HG", 44, "nautical-decor", armor[1]),
  listing("armory-props", "armor-shoulder", "Armor Pauldron Shoulder Guard", "MM-PRP-SD", 41, "nautical-decor", armor[0]),
  listing("compass", "push-button-compass", "Push-Button Pocket Compass", "MM-CMP-PB", 5.5, "brass-compasses", comps[0]),
  listing("compass", "compass-with-lid", "Hinged-Lid Desk Compass", "MM-CMP-LD", 6.5, "brass-compasses", comps[1]),
  listing("compass", "flat-compass", "Flat Card Compass", "MM-CMP-FL", 4.8, "brass-compasses", comps[2]),
  listing("compass", "brunton-compass", "Brunton Survey Compass", "MM-CMP-BR", 12, "brass-compasses", comps[3]),
  listing("compass", "sundial-compass", "Brass Sundial Compass", "MM-CMP-SD", 14, "brass-compasses", comps[0]),
  listing("spotlight-searchlight", "table-lamp", "Brass Cabin Table Lamp", "MM-LGT-TL", 22, "nautical-decor", lamps[0]),
  listing("spotlight-searchlight", "spot-light", "Marine Deck Spot Light", "MM-LGT-SP", 28, "nautical-decor", lamps[1]),
  listing("spotlight-searchlight", "spotlight", "Brass Bulkhead Searchlight", "MM-LGT-SL", 32, "nautical-decor", lamps[2]),
  listing("spotlight-searchlight", "floor-lamp", "Nautical Floor Lantern", "MM-LGT-FL", 45, "nautical-decor", lamps[3]),
  listing("clocks", "pocket-watches", "Brass Open-Face Pocket Watch", "MM-CLK-PW", 18, "nautical-instruments", time[0]),
  listing("clocks", "table-clocks", "Maritime Desk Clock", "MM-CLK-TC", 22, "nautical-instruments", time[1]),
  listing("clocks", "brass-table-watch", "Brass Table Watch with Compass Dial", "MM-CLK-TW", 26, "nautical-instruments", time[2]),
  listing("clocks", "nautical-pocket-watch", "Nautical Pocket Watch on Chain", "MM-CLK-NP", 21, "nautical-instruments", time[3]),
  listing("ship-bell", "hand-bell", "Brass Hand Bell", "MM-BEL-HN", 16, "nautical-decor", bells[0]),
  listing("ship-bell", "hanging-bell", "Hanging Ship Bell with Bracket", "MM-BEL-HG", 22, "nautical-decor", bells[1]),
  listing("ship-bell", "desk-bell", "Captain’s Desk Bell", "MM-BEL-DK", 14, "nautical-decor", bells[2]),
  listing("nautical-decor-gifts", "brass-burner", "Brass Incense Burner", "MM-DEC-BR", 18, "corporate-gifts", wood[0]),
  listing("nautical-decor-gifts", "pen-holder", "Brass Desk Pen Holder", "MM-DEC-PH", 8, "corporate-gifts", wood[1]),
  listing("nautical-decor-gifts", "wooden-mug", "Turned Wooden Tankard", "MM-DEC-MG", 7, "corporate-gifts", wood[2]),
  listing("nautical-decor-gifts", "wooden-game", "Wooden Chess & Board Game", "MM-DEC-WG", 15, "corporate-gifts", wood[3]),
  listing("nautical-decor-gifts", "wooden-boxes", "Wooden Keepsake Boxes", "MM-DEC-BX", 12, "corporate-gifts", wood[0]),
  listing("nautical-decor-gifts", "wooden-cross", "Wooden Cross Pendant", "MM-DEC-CR", 2.2, "corporate-gifts", img.jewelry),
  listing("nautical-decor-gifts", "game", "Nautical Dice & Card Game", "MM-DEC-GM", 11, "corporate-gifts", wood[1]),
  listing("nautical-decor-gifts", "mirror", "Nautical Porthole Mirror", "MM-DEC-MR", 28, "nautical-decor", img.lighthouse),
  listing("nautical-decor-gifts", "home-kitchen", "Brass Kitchen Décor Set", "MM-DEC-HK", 16, "corporate-gifts", wood[2]),
  listing("nautical-decor-gifts", "home-appliances", "Nautical Home Accents", "MM-DEC-HA", 19, "corporate-gifts", wood[3]),
  listing("nautical-decor-gifts", "crystal-wood-crafts", "Crystal & Wood Desk Crafts", "MM-DEC-CW", 24, "corporate-gifts", wood[0]),
  listing("nautical-decor-gifts", "armillary", "Brass Armillary Sphere", "MM-DEC-AR", 39, "nautical-instruments", img.globe),
  product({
    slug: "vintage-brass-telescope-wooden-tripod",
    name: "Vintage Telescope on Wooden Tripod",
    sku: "MM-TEL-TR-01",
    price: 189,
    wholesaleFrom: 129,
    moq: 4,
    rating: 4.8,
    reviews: 64,
    collection: "telescopes",
    category: "brass-telescope-tripod",
    subcategory: "vintage-brass-telescope-wood-tripod",
    finish: "Antique brass, leather wrap",
    material: "Solid brass, genuine leather, hardwood tripod",
    dimensions: 'Floor standing · 36"–60" adjustable',
    featured: true,
    image: img.tripodWood,
    gallery: [img.tripodWood, img.tripodSpyglass, img.telescope],
    description:
      "A floor-standing vintage brass telescope with leather wrap and a hardwood tripod. Built for actual viewing and for nautical interiors, hotels and wholesale display.",
  }),
  product({
    slug: "vintage-brass-nautical-spyglass-tripod",
    name: "Nautical Spyglass on Studio Tripod",
    sku: "MM-TEL-TR-02",
    price: 198,
    wholesaleFrom: 138,
    moq: 4,
    rating: 4.7,
    reviews: 41,
    collection: "telescopes",
    category: "brass-telescope-tripod",
    subcategory: "nautical-spyglass-tripod",
    finish: "Polished nickel / antique brass",
    material: "Brass barrel, optical glass, hardwood tripod",
    dimensions: 'Floor standing · 40"–62" adjustable',
    featured: true,
    image: img.tripodSpyglass,
    gallery: [img.tripodSpyglass, img.tripodWood, img.telescopeNight],
    description:
      "Nautical spyglass on a studio tripod — a presentation piece for showrooms and a working instrument for collectors.",
  }),
  product({
    slug: "handcrafted-brass-binocular-telescope-tripod",
    name: "Dual-Head Binocular on Wooden Tripod",
    sku: "MM-BIN-TR-01",
    price: 245,
    wholesaleFrom: 168,
    moq: 2,
    rating: 4.9,
    reviews: 38,
    collection: "brass-binoculars",
    category: "brass-binocular-tripod",
    subcategory: "binocular-telescope-wood-tripod",
    finish: "Polished brass",
    material: "Solid brass binocular head, hardwood tripod",
    dimensions: 'Floor standing · dual 20×80 style head',
    featured: true,
    image: img.tripodBinocular,
    gallery: [img.tripodBinocular, img.binoculars, img.binocularsMap],
    description:
      "Handcrafted brass binocular telescope on a wooden tripod — dual optics for viewing and a statement piece for lobbies and trade floors.",
  }),
  product({
    slug: "vintage-style-brass-marine-telescope-tripod",
    name: "Marine Telescope on Brass Tripod",
    sku: "MM-TEL-TR-03",
    price: 219,
    wholesaleFrom: 158,
    moq: 4,
    rating: 4.8,
    reviews: 52,
    collection: "telescopes",
    category: "brass-telescope-tripod",
    subcategory: "marine-telescope-brass-tripod",
    finish: "Full polished brass",
    material: "Solid brass barrel and tripod, optical glass",
    dimensions: 'Floor standing · 42"–64" adjustable',
    featured: true,
    image: img.tripodMarine,
    gallery: [img.tripodMarine, img.tripodWood, img.telescope],
    description:
      "Full-brass marine telescope on a matching brass tripod. Export-ready for retailers, hotels and nautical collections.",
  }),
];

export function findShopNowLabel(slug: string | null) {
  if (!slug) return "Shop Now";
  for (const parent of shopNowTree) {
    if (parent.slug === slug) return parent.name;
    const child = parent.children.find((c) => c.slug === slug);
    if (child) return child.name;
  }
  return "Shop Now";
}
