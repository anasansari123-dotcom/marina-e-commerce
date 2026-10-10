export type AppLocale = "en" | "en-GB" | "en-US" | "ar" | "zh" | "hi";

export const APP_LOCALES: AppLocale[] = ["en", "en-GB", "en-US", "ar", "zh", "hi"];

type Messages = Record<string, string>;

const en: Messages = {
  "nav.home": "Home",
  "nav.shop": "B2C Retail Collection",
  "nav.wholesale": "B2B Wholesale Collection",
  "nav.custom": "Custom Manufacturing",
  "nav.shipping": "Shipping",
  "nav.blog": "Blog",
  "nav.about": "About us",
  "nav.contact": "Contact us",
  "nav.login": "Login",
  "nav.logout": "Logout",
  "nav.admin": "Admin Dashboard",
  "top.premium": "Premium Quality",
  "top.handcrafted": "Handcrafted & Made in Our Own Factory",
  "top.wholesaleQuote": "Wholesale? Get a Custom Quote",
  "footer.shop": "Shop",
  "footer.business": "Business with Us",
  "footer.company": "Company",
  "footer.contact": "Contact",
  "footer.link.retail": "B2C Retail Collection",
  "footer.link.collections": "Collections",
  "footer.link.wishlist": "My Wishlist",
  "footer.link.cart": "Add to Cart",
  "footer.link.wholesale": "B2B Wholesale Collection",
  "footer.link.wholesaleAccount": "Create Wholesale Account",
  "footer.link.quote": "Bulk Quote",
  "footer.link.custom": "Custom Manufacturing",
  "footer.link.about": "About Us",
  "footer.link.contact": "Contact Us",
  "footer.link.blog": "Blog",
  "footer.link.shipping": "Shipping",
  "footer.tagline":
    "Premium nautical instruments, handcrafted brass décor and custom manufacturing from India — exporter, manufacturer & supplier.",
  "footer.office": "Corporate Office & Factory",
  "login.title.login": "Login",
  "login.title.register": "Register",
  "login.tab.login": "Login",
  "login.tab.register": "Register",
  "login.tab.customer": "Customer",
  "login.tab.wholesale": "Wholesale",
  "login.orEmail": "or use email",
  "login.signIn": "Sign in",
  "login.createAccount": "Create account",
  "login.password": "Password",
  "login.confirmPassword": "Confirm password",
  "login.fullName": "Full name",
  "login.email": "Email",
  "login.wholesaleIntro": "Sign in or create a wholesale account to access B2B pricing and quotes.",
  "login.wholesaleRegisterTitle": "Create your wholesale account",
  "login.submitWholesale": "Submit wholesale application",
  "home.reviews.title": "What Our Customers Say",
  "home.wholesale.eyebrow": "B2B / Wholesale",
  "home.wholesale.title1": "Built for Businesses.",
  "home.wholesale.title2": "Priced for Volume.",
  "home.wholesale.body":
    "Partner with us for premium nautical & brass products. Competitive pricing, reliable supply and global logistics — from 50 pieces to container programmes.",
  "home.wholesale.location": "From Roorkee, Uttarakhand, India",
  "home.wholesale.openAccount": "Open a trade account",
  "home.wholesale.createAccount": "Create Wholesale Account",
  "home.wholesale.alreadyMember": "Already a member? Login",
  "home.wholesale.ourStory": "Our Story",
  "home.wholesale.welcomeBack": "Welcome back",
  "home.wholesale.goCatalogue": "Go to wholesale catalogue",
  "admin.login.title": "Admin sign in",
  "admin.login.subtitle": "Marina Muse International — staff dashboard",
  "admin.login.email": "Admin email",
  "admin.login.password": "Password",
  "admin.login.submit": "Sign in to admin",
  "admin.login.back": "Back to storefront",
};

const enGB: Messages = { ...en, "nav.about": "About us", "footer.link.collections": "Collections" };

const enUS: Messages = { ...en, "nav.about": "About Us", "footer.link.shipping": "Shipping" };

const hi: Messages = {
  ...en,
  "nav.home": "होम",
  "nav.shop": "B2C रिटेल संग्रह",
  "nav.wholesale": "B2B थोक संग्रह",
  "nav.custom": "कस्टम निर्माण",
  "nav.shipping": "शिपिंग",
  "nav.blog": "ब्लॉग",
  "nav.about": "हमारे बारे में",
  "nav.contact": "संपर्क",
  "nav.login": "लॉगिन",
  "nav.admin": "एडमिन डैशबोर्ड",
  "top.premium": "प्रीमियम गुणवत्ता",
  "top.handcrafted": "हस्तनिर्मित — अपनी फैक्ट्री में बना",
  "top.wholesaleQuote": "थोक? कस्टम कोट प्राप्त करें",
  "footer.shop": "खरीदारी",
  "footer.business": "व्यापार",
  "footer.company": "कंपनी",
  "footer.contact": "संपर्क",
  "home.reviews.title": "हमारे ग्राहक क्या कहते हैं",
  "home.wholesale.title1": "व्यवसायों के लिए बना।",
  "home.wholesale.title2": "मात्रा के लिए मूल्य।",
  "login.tab.login": "लॉगिन",
  "login.tab.register": "पंजीकरण",
  "login.signIn": "साइन इन",
  "login.tab.customer": "ग्राहक",
  "login.tab.wholesale": "थोक",
};

const zh: Messages = {
  ...en,
  "nav.home": "首页",
  "nav.shop": "B2C 零售系列",
  "nav.wholesale": "B2B 批发系列",
  "nav.custom": "定制制造",
  "nav.shipping": "运输",
  "nav.blog": "博客",
  "nav.about": "关于我们",
  "nav.contact": "联系我们",
  "nav.login": "登录",
  "top.premium": "优质品质",
  "top.handcrafted": "手工制作 · 自有工厂",
  "top.wholesaleQuote": "批发？获取定制报价",
  "footer.shop": "购物",
  "footer.business": "商务合作",
  "footer.company": "公司",
  "footer.contact": "联系",
  "home.reviews.title": "客户评价",
  "home.wholesale.title1": "为商业而生。",
  "home.wholesale.title2": "批量更优价。",
  "login.tab.login": "登录",
  "login.tab.register": "注册",
  "login.signIn": "登录",
  "login.tab.customer": "零售客户",
  "login.tab.wholesale": "批发",
};

const ar: Messages = {
  ...en,
  "nav.home": "الرئيسية",
  "nav.shop": "مجموعة التجزئة B2C",
  "nav.wholesale": "مجموعة الجملة B2B",
  "nav.custom": "تصنيع مخصص",
  "nav.shipping": "الشحن",
  "nav.blog": "المدونة",
  "nav.about": "من نحن",
  "nav.contact": "اتصل بنا",
  "nav.login": "تسجيل الدخول",
  "top.premium": "جودة ممتازة",
  "top.handcrafted": "صنع يدوي في مصنعنا",
  "top.wholesaleQuote": "جملة؟ احصل على عرض سعر",
  "footer.shop": "تسوق",
  "footer.business": "أعمال",
  "footer.company": "الشركة",
  "footer.contact": "تواصل",
  "home.reviews.title": "آراء عملائنا",
  "home.wholesale.title1": "صُمم للأعمال.",
  "home.wholesale.title2": "أسعار للكميات.",
  "login.tab.login": "دخول",
  "login.tab.register": "تسجيل",
  "login.signIn": "دخول",
  "login.tab.customer": "عميل",
  "login.tab.wholesale": "جملة",
};

export const messageCatalog: Record<AppLocale, Messages> = {
  en,
  "en-GB": enGB,
  "en-US": enUS,
  hi,
  zh,
  ar,
};

export function translate(locale: AppLocale, key: string): string {
  const table = messageCatalog[locale] ?? messageCatalog.en;
  return table[key] ?? messageCatalog.en[key] ?? key;
}

export function normalizeLocale(code: string): AppLocale {
  if (APP_LOCALES.includes(code as AppLocale)) return code as AppLocale;
  if (code.startsWith("hi")) return "hi";
  if (code.startsWith("zh")) return "zh";
  if (code.startsWith("ar")) return "ar";
  if (code === "en-US") return "en-US";
  if (code === "en-GB") return "en-GB";
  return "en";
}
