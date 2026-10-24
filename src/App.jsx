import React, { useEffect, useState } from "react";

/* ---------------------------------------------------------
   ICONS — small inline line-icon set, one consistent stroke
   style throughout so nothing looks like a stock icon pack
--------------------------------------------------------- */
const Icon = ({ name, size = 26, color = "currentColor" }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "home":
      return (
        <svg {...common}>
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5.5 10v9a1 1 0 0 0 1 1H10v-5.5h4V20h3.5a1 1 0 0 0 1-1v-9" />
        </svg>
      );
    case "pulse":
      return (
        <svg {...common}>
          <path d="M3 12h4l2-7 4 14 2-7h6" />
        </svg>
      );
    case "droplet":
      return (
        <svg {...common}>
          <path d="M12 3.5S6 10 6 14.5a6 6 0 0 0 12 0C18 10 12 3.5 12 3.5Z" />
        </svg>
      );
    case "cross":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
    case "device":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="12" rx="1.5" />
          <path d="M4 16h16M9 20h6M12 16v4" />
          <circle cx="12" cy="9" r="2.4" />
        </svg>
      );
    case "bandage":
      return (
        <svg {...common}>
          <rect x="3.5" y="9.5" width="17" height="5" rx="2.5" transform="rotate(-20 12 12)" />
          <circle cx="9.3" cy="10.6" r="0.6" fill={color} />
          <circle cx="14.7" cy="13.4" r="0.6" fill={color} />
        </svg>
      );
    case "baby":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M7 21c0-4 2.5-6 5-6s5 2 5 6" />
          <path d="M9.5 7.2c0 1 1 1.6 2.5 1.6s2.5-.6 2.5-1.6" />
        </svg>
      );
    case "scale":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4l3 2" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
          <path d="M4 7l8 6 8-6" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.4" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3.5 19 6v6c0 5-3 8-7 9-4-1-7-4-7-9V6l7-2.5Z" />
          <path d="M9 12l2 2 4-4.5" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "stethoscope":
      return (
        <svg {...common}>
          <path d="M5 4h1a2 2 0 0 1 2 2v4a4 4 0 0 0 8 0V6a2 2 0 0 1 2-2h1" />
          <path d="M8 14v1a5.5 5.5 0 0 0 5.5 5.5h.5a5.5 5.5 0 0 0 5-5.5v-3" />
          <circle cx="19" cy="10.5" r="2.5" />
          <path d="M18 10.5h2" />
        </svg>
      );
    default:
      return null;
  }
};

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */
const SERVICES = [
  {
    icon: "home",
    label: "Home Treatment",
    tag: "Nurse Visits",
    desc: "Personalized routine medical treatment and monitoring in the comfort of your home.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Registered nurse treating a patient during a home visit",
  },
  {
    icon: "pulse",
    label: "BP Checkup",
    tag: "Vitals & Heart",
    desc: "Rapid, accurate blood pressure testing, heart health monitoring & vitals tracking.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Nurse checking blood pressure and listening with a stethoscope",
  },
  {
    icon: "droplet",
    label: "Sugar Level Checkup",
    tag: "Diabetes Care",
    desc: "Fasting and random blood glucose testing with immediate, clear guidance.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Blood glucose monitoring equipment and diabetes checkup",
  },
  {
    icon: "cross",
    label: "Medicine Store",
    tag: "Pharmacy",
    desc: "Essential prescription medication and trusted over-the-counter remedies dispensed.",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Shelves of authentic medicines at Kedam Chemist",
  },
  {
    icon: "device",
    label: "Medical Equipment",
    tag: "Diagnostics",
    desc: "High-grade BP apparatus, digital glucometers, thermometers and scales.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Clinical medical diagnostics and healthcare monitoring equipment",
  },
  {
    icon: "bandage",
    label: "Wound Dressing",
    tag: "Sterile Care",
    desc: "Sterile wound cleaning, postoperative dressing and compassionate healing care.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Sterile clinical care and nursing wound dressing",
  },
  {
    icon: "baby",
    label: "Mother & Baby Care",
    tag: "Pediatrics",
    desc: "Nourishment, maternity care pads, gentle infant essentials and toiletries.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Loving mother and healthy baby essentials care",
  },
];

const SERVICE_DETAILS = [
  {
    icon: "home",
    title: "Home Treatment",
    body:
      "A registered nurse comes to you for routine treatment and monitoring, so you don't have to sit in a queue when you're unwell.",
    points: ["Nurse-led home visits", "Booked by phone, same-day where possible", "Suited to elderly and post-surgery patients"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Nurse speaking with a patient at home",
  },
  {
    icon: "pulse",
    title: "BP Checkup",
    body:
      "Quick, accurate blood pressure readings for anyone managing hypertension or checking in on their heart health.",
    points: ["Walk-in or home visit", "Reading explained in plain language", "Regular monitoring plans available"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Nurse checking a patient's blood pressure",
  },
  {
    icon: "droplet",
    title: "Sugar Level Checkup",
    body:
      "Blood glucose testing for diabetic and pre-diabetic clients, with guidance on what the numbers mean for daily life.",
    points: ["Fasting or random glucose tests", "Result recorded for your next visit", "Referral advice when needed"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Healthcare professional preparing a health check",
  },
  {
    icon: "bandage",
    title: "Post-Operative Care",
    body:
      "Wound dressing and recovery support after surgery, handled with the same care as a hospital ward — at home.",
    points: ["Sterile wound dressing", "Healing progress checked visit to visit", "Guidance for family caregivers"],
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Nurse providing careful home care",
  },
];

const PRODUCTS = [
  {
    key: "medicine",
    icon: "cross",
    title: "Medicine Store",
    category: "Pharmacy essentials",
    blurb: "Prescription and over-the-counter medicines, dispensed with proper guidance.",
    items: ["Prescription medicine", "Over-the-counter drugs", "Common household remedies"],
    availability: "Ask what is in stock",
    image: "/product-kedam-store.jpg",
    imageAlt: "Shelves of medicine at Kedam Chemist Patent Store",
    gallery: [
      "/product-kedam-store.jpg",
      "/medicine-store-main.jpg",
    ],
  },
  {
    key: "equipment",
    icon: "device",
    title: "Medical Equipment",
    category: "Monitoring at home",
    blurb: "Take health monitoring home with equipment sold and explained in person.",
    items: ["BP apparatus", "Glucometers", "Weighing scales"],
    availability: "Guidance included",
    image: "/product-operating-room.jpg",
    imageAlt: "Close-up of diabetes monitoring equipment",
    gallery: [
      "/product-operating-room.jpg",
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    key: "baby",
    icon: "baby",
    title: "Mother & Baby",
    category: "Family essentials",
    blurb: "Everyday essentials for mother and child, always in stock.",
    items: ["Baby care", "Maternity pads", "Wipes and toiletries"],
    availability: "Everyday essentials",
    image: "/mother-baby-calendar.jpg",
    imageAlt: "Mother holding a baby",
    gallery: [
      "/mother-baby-calendar.jpg",
      "/product-wonder-home-calendar.jpg",
    ],
  },
  {
    key: "wellness",
    icon: "droplet",
    title: "Natural Wellness",
    category: "Herbal remedies",
    blurb: "Natural solutions for chronic conditions and wellness support.",
    items: ["Janechuks Mixed Spices", "Women's Health Formula", "High BP Crusher", "Belly Shrinking Spices"],
    availability: "100% Natural products",
    image: "/product-high-bp-crusher.jpg",
    imageAlt: "Janechuks Mixed Spices for women's health",
    gallery: [
      "/product-high-bp-crusher.jpg",
      "/product-jcms-womens-health.jpg",
      "/product-belly-shrinking.jpg",
    ],
  },
];

const HERO_PRODUCTS = [
  {
    title: "High BP Crusher",
    subtitle: "Janechuks Mixed Spices",
    desc: "100% Natural solution for High BP, Hypertension, Sugar & Insomnia.",
    badge: "100% Natural",
    image: "/product-high-bp-crusher.jpg",
    linkMsg: "Hello Kedam Chemist, I want to order High BP Crusher",
  },
  {
    title: "Belly Shrinking Spices",
    subtitle: "Janechuks Mixed Spices",
    desc: "Reduce belly & bloating fast with natural Senna & Black Seed blend.",
    badge: "Flat Tummy",
    image: "/product-belly-shrinking.jpg",
    linkMsg: "Hello Kedam Chemist, I want to order Belly Shrinking Spices",
  },
  {
    title: "JCMS Women's Health Tea",
    subtitle: "Janechuks Spices Reset",
    desc: "Natural relief for PCOS, Fibroids, Cysts & Irregular Periods.",
    badge: "Body Reset",
    image: "/product-jcms-womens-health.jpg",
    linkMsg: "Hello Kedam Chemist, I want to order JCMS Women's Health Tea",
  },
];

const NAV = ["Home", "Services", "Products", "About", "Contact"];
const WHATSAPP_NUMBER = "2347038045008";
const MAPS_API_KEY =
  typeof import.meta !== "undefined" && import.meta.env
    ? import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""
    : "";

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function KedamMark({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Binaural headset */}
      <path d="M14 10 C14 16 17 21 24 23 C31 21 34 16 34 10" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="14" cy="10" r="2.2" fill="#E8A33D"/>
      <circle cx="34" cy="10" r="2.2" fill="#E8A33D"/>
      {/* Tension bridge */}
      <path d="M17 16 Q24 18 31 16" stroke="#E8A33D" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="24" cy="23" r="2.2" fill="#E8A33D"/>
      {/* Flexible tubing */}
      <path d="M24 23 V27 C24 34 18 38 12 38 C7 38 5 34 5 29 C5 23 9 19 16 19 H28" stroke="#DCECE2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Chestpiece with ECG heartbeat pulse */}
      <g transform="translate(34, 19)">
        <circle cx="0" cy="0" r="6.5" fill="#0A372E" stroke="#E8A33D" strokeWidth="2.2"/>
        <circle cx="0" cy="0" r="3.5" fill="#DCECE2"/>
        <path d="M-2.2 0 H-1 L-0.4 -1.6 L0.4 1.6 L1 -0.8 L1.4 0 H2.2" stroke="#0E5245" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  );
}

function Reveal({ children, className = "", style }) {
  const ref = React.useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add("is-visible");
        observer.unobserve(element);
      }
    }, { threshold: 0.14 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${className}`} style={style}>{children}</div>;
}

/* ---------------------------------------------------------
   SHARED PIECES
--------------------------------------------------------- */
function Eyebrow() {
  return null;
}

function SectionHeading({ kicker, title, lede }) {
  return (
    <div className="section-heading">
      {kicker && <p className="kicker">{kicker}</p>}
      <h2>{title}</h2>
      {lede && <p className="lede">{lede}</p>}
    </div>
  );
}

function Marquee({ onNavigate }) {
  const loop = [...SERVICES, ...SERVICES];
  return (
    <div className="marquee" aria-label="Services offered">
      <div className="marquee__track">
        {loop.map((s, i) => (
          <div
            className="marquee__card"
            key={i}
            onClick={() => onNavigate && onNavigate("Services")}
            role="button"
            tabIndex={0}
          >
            <div className="marquee__card-media">
              <img src={s.image} alt={s.imageAlt} loading="lazy" />
              <span className="marquee__card-tag">{s.tag}</span>
              <div className="marquee__card-badge">
                <Icon name={s.icon} size={18} color="#0E5245" />
              </div>
            </div>
            <div className="marquee__card-body">
              <h3 className="marquee__card-title">{s.label}</h3>
              <p className="marquee__card-desc">{s.desc}</p>
              <span className="marquee__card-link">
                Explore service <Icon name="arrow" size={13} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CTAButtons({ onNavigate }) {
  return (
    <div className="cta-row">
      <a className="btn btn--solid" href="tel:07038045008">
        <Icon name="phone" size={17} /> Call to book
      </a>
      <button className="btn btn--accent" onClick={() => onNavigate("Contact")}>Book a home visit <Icon name="arrow" size={16} /></button>
      <button className="btn btn--ghost" onClick={() => onNavigate("Services")}>
        View services <Icon name="arrow" size={16} />
      </button>
    </div>
  );
}

/* ---------------------------------------------------------
   PAGES
--------------------------------------------------------- */
function Home({ onNavigate }) {
  const [scrollPct, setScrollPct] = useState(0);
  const [heroParallax, setHeroParallax] = useState(0);
  const [heroProductIdx, setHeroProductIdx] = useState(0);

  // Auto-cycle through natural product spotlight every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroProductIdx((prev) => (prev + 1) % HERO_PRODUCTS.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".ps-card");
    if (!cards.length || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = Math.min(100, Math.round((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100));
      setScrollPct(pct);
      setHeroParallax(Math.min(h.scrollTop / 400, 1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const band = document.querySelector(".band");
    const closer = document.querySelector(".closer");
    if (typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    if (band) observer.observe(band);
    if (closer) observer.observe(closer);
    return () => observer.disconnect();
  }, []);

  const activeHeroProduct = HERO_PRODUCTS[heroProductIdx];

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} aria-hidden="true"></div>
      <section className="hero">
        {/* Natural Product Spotlight Showcase — Her actual products right away above the fold! */}
        <div className="hero__tool-showcase hero__product-showcase-box">
          <div className="hero__product-spotlight-img">
            <img
              src={activeHeroProduct.image}
              alt={activeHeroProduct.title}
              key={activeHeroProduct.title}
              className="hero__spotlight-img-active"
            />
            <span className="hero__spotlight-badge">{activeHeroProduct.badge}</span>

            {/* Dots to manually select product */}
            <div className="hero__spotlight-dots">
              {HERO_PRODUCTS.map((p, idx) => (
                <button
                  key={p.title}
                  className={`spotlight-dot ${idx === heroProductIdx ? "is-active" : ""}`}
                  onClick={() => setHeroProductIdx(idx)}
                  title={p.title}
                  aria-label={`Select ${p.title}`}
                />
              ))}
            </div>
          </div>

          <div className="hero__tool-info">
            <div className="hero__tool-heading">
              <span className="hero__tool-icon">🌿</span>
              <div>
                <strong>{activeHeroProduct.title}</strong>
                <small>{activeHeroProduct.subtitle}</small>
              </div>
            </div>
            <p className="hero__tool-text">
              {activeHeroProduct.desc}
            </p>
            <a
              className="hero__tool-action"
              href={whatsappUrl(activeHeroProduct.linkMsg)}
              target="_blank"
              rel="noreferrer"
            >
              Order on WhatsApp <Icon name="arrow" size={14} />
            </a>
          </div>
        </div>

        <div className="hero__text">
          <h1>
            Care that comes to your door,
            <br />
            medicine you can trust.
          </h1>
          <p className="hero__sub">
            Kedam Chemist and Multi-Purpose Store is a neighbourhood pharmacy in
            Mushin, Lagos, run by a registered nurse — home treatment, health
            checks, medicine and equipment, all from one address.
          </p>
          <CTAButtons onNavigate={onNavigate} />
          <div className="trust-strip">
            <div>
              <Icon name="shield" size={18} color="#0E5245" />
              <span>Registered-nurse led</span>
            </div>
            <div>
              <Icon name="home" size={18} color="#0E5245" />
              <span>Home visits available</span>
            </div>
            <div>
              <Icon name="pin" size={18} color="#0E5245" />
              <span>Mushin, Lagos</span>
            </div>
          </div>
        </div>

        <div className="hero__art" aria-hidden="true" style={{ transform: `translateY(${heroParallax * 40}px)` }}>
          <div className="hero__cross" style={{ transform: `translateY(${heroParallax * 20}px) rotate(8deg)` }} />
          <div className="hero__photo" style={{ transform: `translateY(${heroParallax * 50}px)` }}>
            <img
              src="/product-kedam-store.jpg"
              alt="Kedam Patent Store interior stocked shelves"
            />
          </div>
          <div className="hero__chip hero__chip--a">
            <Icon name="droplet" size={16} color="#0E5245" />
            100% Natural Herbal Spices
          </div>
          <div className="hero__chip hero__chip--b">
            <Icon name="cross" size={16} color="#0E5245" />
            Authentic Medicine Stocked
          </div>
        </div>
      </section>

      <Marquee onNavigate={onNavigate} />

      <section className="band">
        <div className="band__photo">
          <img
            src="https://images.unsplash.com/photo-1624625021542-41a4ff97c025?auto=format&fit=crop&w=900&q=80"
            alt="Close-up of diabetes monitoring supplies on a wooden table"
          />
        </div>
        <div className="band__text">
          <SectionHeading
            title="Chronic care, checked on regularly"
            lede="Hypertension and diabetes need steady watching, not just a single visit. Come in — or ask for a home visit — for BP and sugar level checks you can keep coming back to."
          />
          <ul className="check-list">
            <li>Blood pressure monitoring for hypertensive clients</li>
            <li>Blood glucose testing, fasting or random</li>
            <li>Results kept on file for your next visit</li>
          </ul>
          <button className="btn btn--solid" onClick={() => onNavigate("Services")}>
            See how it works <Icon name="arrow" size={16} />
          </button>
        </div>
      </section>

      {/* ---- PRODUCT SHOWCASE ---- */}
      <section className="product-showcase">
        <div className="ps-heading">
          <span className="ps-new-badge">✨ New Arrivals</span>
          <p className="kicker">Featured Products</p>
          <h2>Natural solutions, right here in store</h2>
          <p className="lede">100% natural herbal remedies and trusted pharmacy essentials — ask what is in stock and we'll explain how to use it.</p>
        </div>
        <div className="ps-grid">
          <article className="ps-card" onClick={() => onNavigate("Products")}>
            <div className="ps-badge">Heart Health</div>
            <div className="ps-card__img"><img src="/product-high-bp-crusher.jpg" alt="High BP Crusher natural spice blend" loading="lazy" /></div>
            <div className="ps-card__overlay"></div>
            <div className="ps-card__body">
              <div className="ps-brand">Janechuks Mixed Spices</div>
              <h3 className="ps-name">High BP Crusher</h3>
              <p className="ps-blurb">100% natural solution for high blood pressure, hypertension, insomnia and more.</p>
              <div className="ps-chips">
                <span className="ps-chip">100% Natural</span>
                <span className="ps-chip">Ginger</span>
                <span className="ps-chip">Cinnamon</span>
              </div>
              <a className="ps-action" href={whatsappUrl("Hello Kedam Chemist, I would like to order the High BP Crusher.")} target="_blank" rel="noreferrer">
                Order now <Icon name="arrow" size={14} />
              </a>
            </div>
          </article>

          <article className="ps-card" onClick={() => onNavigate("Products")}>
            <div className="ps-badge">Weight Care</div>
            <div className="ps-card__img"><img src="/product-belly-shrinking.jpg" alt="Belly Shrinking Spices tea" loading="lazy" /></div>
            <div className="ps-card__overlay"></div>
            <div className="ps-card__body">
              <div className="ps-brand">Janechuks Mixed Spices</div>
              <h3 className="ps-name">Belly Shrinking Spices</h3>
              <p className="ps-blurb">Reduce bloating, cleanse your system and support a flat tummy — no chemicals.</p>
              <div className="ps-chips">
                <span className="ps-chip">100% Natural</span>
                <span className="ps-chip">Senna Leaf</span>
                <span className="ps-chip">Habbatu Sauda</span>
              </div>
              <a className="ps-action" href={whatsappUrl("Hello Kedam Chemist, I would like to order the Belly Shrinking Spices.")} target="_blank" rel="noreferrer">
                Order now <Icon name="arrow" size={14} />
              </a>
            </div>
          </article>

          <article className="ps-card" onClick={() => onNavigate("Products")}>
            <div className="ps-badge">Women's Health</div>
            <div className="ps-card__img"><img src="/product-jcms-womens-health.jpg" alt="JCMS Tea for women's health reset" loading="lazy" /></div>
            <div className="ps-card__overlay"></div>
            <div className="ps-card__body">
              <div className="ps-brand">Janechuks Mixed Spices</div>
              <h3 className="ps-name">JCMS Tea</h3>
              <p className="ps-blurb">Say goodbye to irregular periods, PCOS, fibroids and cysts — your body deserves a reset.</p>
              <div className="ps-chips">
                <span className="ps-chip">PCOS</span>
                <span className="ps-chip">Fibroids</span>
                <span className="ps-chip">Cysts</span>
              </div>
              <a className="ps-action" href={whatsappUrl("Hello Kedam Chemist, I would like to order the JCMS Tea.")} target="_blank" rel="noreferrer">
                Order now <Icon name="arrow" size={14} />
              </a>
            </div>
          </article>

          <article className="ps-card" onClick={() => onNavigate("Products")}>
            <div className="ps-badge">Store Promo</div>
            <div className="ps-card__img"><img src="/product-wonder-home-calendar.jpg" alt="Wonder Home 2025 calendar" loading="lazy" /></div>
            <div className="ps-card__overlay"></div>
            <div className="ps-card__body">
              <div className="ps-brand">Wonder Home</div>
              <h3 className="ps-name">2025 Calendar</h3>
              <p className="ps-blurb">Seasonal calendar gift with in-store purchases — wonderhome wonderland.</p>
              <div className="ps-chips">
                <span className="ps-chip">2025</span>
                <span className="ps-chip">Free Gift</span>
              </div>
              <a className="ps-action" href={whatsappUrl("Hello Kedam Chemist, I would like to know about the Wonder Home calendar.")} target="_blank" rel="noreferrer">
                Ask about this <Icon name="arrow" size={14} />
              </a>
            </div>
          </article>

          <article className="ps-card" onClick={() => onNavigate("About")}>
            <div className="ps-badge">Our Pharmacist</div>
            <div className="ps-card__img"><img src="/product-nurse-portrait.jpg" alt="Registered nurse at Kedam Chemist" loading="lazy" /></div>
            <div className="ps-card__overlay"></div>
            <div className="ps-card__body">
              <div className="ps-brand">Kedam Chemist</div>
              <h3 className="ps-name">Nurse-Led Care</h3>
              <p className="ps-blurb">Every checkup, dressing and consultation carries professional nursing oversight.</p>
              <div className="ps-chips">
                <span className="ps-chip">Registered</span>
                <span className="ps-chip">Trusted</span>
              </div>
              <a className="ps-action" href={whatsappUrl("Hello Kedam Chemist, I would like to speak with the nurse.")} target="_blank" rel="noreferrer">
                Ask about care <Icon name="arrow" size={14} />
              </a>
            </div>
          </article>

          <article className="ps-card" onClick={() => onNavigate("Products")}>
            <div className="ps-badge">In Store</div>
            <div className="ps-card__img"><img src="/product-kedam-store.jpg" alt="Kedam Patent Store medicine shelves" loading="lazy" /></div>
            <div className="ps-card__overlay"></div>
            <div className="ps-card__body">
              <div className="ps-brand">Kedam Patent Store</div>
              <h3 className="ps-name">Your Health, Our Priority</h3>
              <p className="ps-blurb">Full shelves of prescription and over-the-counter medicines, always in stock.</p>
              <div className="ps-chips">
                <span className="ps-chip">Amatem Forte</span>
                <span className="ps-chip">Vitamins</span>
                <span className="ps-chip">Syrups</span>
              </div>
              <a className="ps-action" href={whatsappUrl("Hello Kedam Chemist, what is in stock today?")} target="_blank" rel="noreferrer">
                Check stock <Icon name="arrow" size={14} />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="band">
        <div className="band__photo">
          <img
            src="https://images.unsplash.com/photo-1624625021542-41a4ff97c025?auto=format&fit=crop&w=900&q=80"
            alt="Close-up of diabetes monitoring supplies on a wooden table"
          />
        </div>
        <div className="band__text">
          <SectionHeading
            title="Chronic care, checked on regularly"
            lede="Hypertension and diabetes need steady watching, not just a single visit. Come in — or ask for a home visit — for BP and sugar level checks you can keep coming back to."
          />
          <ul className="check-list">
            <li>Blood pressure monitoring for hypertensive clients</li>
            <li>Blood glucose testing, fasting or random</li>
            <li>Results kept on file for your next visit</li>
          </ul>
          <button className="btn btn--solid" onClick={() => onNavigate("Services")}>
            See how it works <Icon name="arrow" size={16} />
          </button>
        </div>
      </section>

      <section className="closer">
        <div>
          <h2>Need something checked or delivered today?</h2>
          <p>Speak with the pharmacy directly — no automated menus.</p>
        </div>
        <div className="closer__actions">
          <a className="btn btn--whatsapp" href={whatsappUrl("Hello Kedam Chemist, I need something checked or delivered today.")} target="_blank" rel="noreferrer">
            <Icon name="mail" size={17} /> Message on WhatsApp
          </a>
          <a className="btn btn--outline-light closer__call" href="tel:09132392816">
            <Icon name="phone" size={17} /> Call 0913 239 2816
          </a>
        </div>
      </section>
    </>
  );
}

function Services({ onNavigate }) {
  return (
    <section className="page">
      <SectionHeading
        kicker="What we do"
        title="Health care handled close to home"
        lede="Every service is delivered or overseen by a registered nurse, whether you visit the store or ask us to come to you."
      />
      <div className="service-grid">
        {SERVICE_DETAILS.map((s) => (
          <Reveal className="service-card" key={s.title}>
            <div className="service-card__icon">
              <img src={s.image} alt={s.imageAlt} />
            </div>
            <div className="service-card__badge"><Icon name={s.icon} size={20} color="#0E5245" /></div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <ul>
              {s.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
      <div className="inline-cta">
        <p>Not sure which service fits? Call and describe what's going on.</p>
        <a className="btn btn--solid" href="tel:07038045008">
          <Icon name="phone" size={17} /> 0703 804 5008
        </a>
      </div>
    </section>
  );
}

function Products() {
  const [activeImages, setActiveImages] = useState({});

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImages((current) => PRODUCTS.reduce((next, product) => ({
        ...next,
        [product.key]: ((current[product.key] || 0) + 1) % (product.gallery?.length || 1),
      }), {}));
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="page">
      <SectionHeading
        kicker="In the store"
        title="Medicine, equipment and everyday essentials"
        lede="Everything on the shelf is explained before it leaves the counter."
      />
      <div className="product-list">
        {PRODUCTS.map((p, index) => (
          <Reveal className="product-row" key={p.key} style={{ "--card-delay": `${index * 120}ms` }}>
            <div className="product-row__media">
              {p.image ? (
                <img src={p.gallery?.[activeImages[p.key] || 0] || p.image} alt={p.imageAlt} />
              ) : (
                <div className="product-row__icon">
                  <Icon name={p.icon} size={44} color="#0E5245" />
                </div>
              )}
                <span className="product-row__counter">{(activeImages[p.key] || 0) + 1} / {p.gallery?.length || 1}</span>
            </div>
            <div className="product-row__text">
                <div className="product-row__meta">
                  <span>{p.category}</span>
                  <span className="product-row__availability">{p.availability}</span>
                </div>
              <div className="product-row__title">
                <Icon name={p.icon} size={20} color="#E8A33D" />
                <h3>{p.title}</h3>
              </div>
              <p>{p.blurb}</p>
              <div className="chips">
                {p.items.map((it) => (
                  <span className="chip" key={it}>
                    {it}
                  </span>
                ))}
              </div>
              <a className="product-row__action" href={whatsappUrl(`Hello Kedam Chemist, please tell me what is available in ${p.title}.`)} target="_blank" rel="noreferrer">
                Ask about this range <Icon name="arrow" size={15} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="page page--narrow">
      <SectionHeading kicker="Who runs it" title="A nurse-led store, built on trust" />
      <div className="about-grid">
        <div className="about-card">
          <div className="about-card__avatar">
            <img src="/princess-adeyemi.jpg" alt="Princess Adeyemi, Registered Nurse & Founder" />
          </div>
          <h3>Princess Adeyemi, S.O.K</h3>
          <p className="about-card__role">Registered Nurse &amp; Founder</p>
          <p>
            Princess Adeyemi founded Kedam Chemist and Multi-Purpose Store to bring
            proper nursing care into the neighbourhood, not just medicine over a
            counter. Every checkup, dressing and consultation carries her
            professional oversight. With years of clinical experience and a passion
            for community health, she ensures every patient receives personalized,
            compassionate care.
          </p>
        </div>
        <div className="values">
          <h3>What guides the practice</h3>
          <div className="values__grid">
            <div>
              <Icon name="shield" size={20} color="#0E5245" />
              <strong>Professionalism</strong>
              <span>Trained nursing care, not guesswork.</span>
            </div>
            <div>
              <Icon name="pulse" size={20} color="#0E5245" />
              <strong>Acumen</strong>
              <span>Sound judgement on every case that walks in.</span>
            </div>
            <div>
              <Icon name="cross" size={20} color="#0E5245" />
              <strong>Integrity</strong>
              <span>Honest advice, even when it means no sale.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [contact, setContact] = useState({ name: "", phone: "", message: "" });
  const [booking, setBooking] = useState({ name: "", phone: "", date: "", time: "", service: "Home Treatment" });
  const [sent, setSent] = useState("");
  const address = "No 7 Paul Oguntola Street, Mushin, Lagos State, Nigeria";
  const mapSrc = MAPS_API_KEY
    ? `https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=${encodeURIComponent(address)}`
    : `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const updateContact = (event) => setContact({ ...contact, [event.target.name]: event.target.value });
  const updateBooking = (event) => setBooking({ ...booking, [event.target.name]: event.target.value });
  const contactMessage = `Hello Kedam Chemist, my name is ${contact.name}. Phone: ${contact.phone}. ${contact.message}`;
  const bookingMessage = `Hello Kedam Chemist, I would like to book a home visit. Name: ${booking.name}. Phone: ${booking.phone}. Service: ${booking.service}. Preferred date: ${booking.date}. Preferred time: ${booking.time}.`;
  const sendEmail = (event) => {
    event.preventDefault();
    window.location.href = `mailto:kikelomo4june24@gmail.com?subject=${encodeURIComponent("Kedam Chemist enquiry")}&body=${encodeURIComponent(contactMessage)}`;
    setSent("Your email app is opening with the message ready to send.");
  };
  return (
    <section className="page">
      <SectionHeading kicker="Reach us" title="Visit, call or write" />
      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-item">
            <Icon name="pin" size={20} color="#0E5245" />
            <div>
              <strong>Address</strong>
              <p>No 7 Paul Oguntola Street, Mushin, Lagos State</p>
            </div>
          </div>
          <div className="contact-item">
            <Icon name="phone" size={20} color="#0E5245" />
            <div>
              <strong>Phone</strong>
              <p>
                <a href="tel:07038045008">0703 804 5008</a>
                <br />
                <a href="tel:09132392816">0913 239 2816</a>
              </p>
            </div>
          </div>
          <div className="contact-item">
            <Icon name="mail" size={20} color="#0E5245" />
            <div>
              <strong>Email</strong>
              <p>
                <a href="mailto:kikelomo4june24@gmail.com">kikelomo4june24@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="contact-item">
            <Icon name="clock" size={20} color="#0E5245" />
            <div>
              <strong>Hours</strong>
              <p>Mon – Sat, 8:00am – 8:00pm (confirm with store)</p>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={sendEmail}>
          <label>
            Name
            <input name="name" value={contact.name} onChange={updateContact} required type="text" placeholder="Your name" />
          </label>
          <label>
            Phone
            <input name="phone" value={contact.phone} onChange={updateContact} required type="tel" placeholder="Your phone number" />
          </label>
          <label>
            Message
            <textarea name="message" value={contact.message} onChange={updateContact} required rows={4} placeholder="What do you need help with?" />
          </label>
          <div className="form-actions">
            <button className="btn btn--solid" type="submit"><Icon name="mail" size={17} /> Email message</button>
            <a className="btn btn--whatsapp" href={whatsappUrl(contactMessage)} target="_blank" rel="noreferrer"><Icon name="phone" size={17} /> WhatsApp</a>
          </div>
          {sent && <p className="form-note form-note--success">{sent}</p>}
        </form>
      </div>
      <div className="booking-panel">
        <div>
          <p className="kicker">Home visit booking</p>
          <h2>Choose a preferred time</h2>
          <p>Send the details on WhatsApp and the nurse will confirm availability and the visit fee.</p>
        </div>
        <form className="booking-form" onSubmit={(event) => { event.preventDefault(); window.open(whatsappUrl(bookingMessage), "_blank", "noopener,noreferrer"); }}>
          <input name="name" value={booking.name} onChange={updateBooking} required placeholder="Your name" aria-label="Your name" />
          <input name="phone" value={booking.phone} onChange={updateBooking} required type="tel" placeholder="Phone number" aria-label="Phone number" />
          <select name="service" value={booking.service} onChange={updateBooking} aria-label="Service needed">
            {SERVICE_DETAILS.map((service) => <option key={service.title}>{service.title}</option>)}
          </select>
          <input name="date" value={booking.date} onChange={updateBooking} required type="date" aria-label="Preferred date" />
          <input name="time" value={booking.time} onChange={updateBooking} required type="time" aria-label="Preferred time" />
          <button className="btn btn--whatsapp" type="submit"><Icon name="clock" size={17} /> Request visit</button>
        </form>
      </div>
      <div className="map-wrap">
        <iframe
          title="Kedam Chemist location"
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   APP SHELL
--------------------------------------------------------- */
export default function App() {
  const [page, setPage] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const goto = (p) => {
    setPage(p);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="kedam">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Work+Sans:wght@400;500;600;700&display=swap');

        .kedam {
          --ink: #16211c;
          --deep: #0e5245;
          --deep-2: #0a372e;
          --accent: #e8a33d;
          --accent-2: #b8462f;
          --paper: #f3f5ef;
          --paper-2: #ffffff;
          --mint: #dcece2;
          --line: rgba(14,82,69,0.16);
          font-family: 'Work Sans', sans-serif;
          color: var(--ink);
          background: var(--paper);
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
        }
        .kedam * { box-sizing: border-box; }
        .scroll-progress {
          position: fixed;
          top: 0; left: 0;
          height: 3px;
          width: 0%;
          background: linear-gradient(90deg, var(--accent), var(--accent-2));
          z-index: 9999;
          transition: width 0.1s linear;
          box-shadow: 0 0 12px rgba(232,163,61,0.5);
        }
        .kedam h1, .kedam h2, .kedam h3 {
          font-family: 'Fraunces', serif;
          font-weight: 600;
          line-height: 1.1;
          margin: 0 0 .4em;
          letter-spacing: -0.01em;
        }
        .kedam p { margin: 0 0 1em; line-height: 1.6; color: #33413a; max-width: 62ch; }
        .kedam a { color: var(--deep); }
        .kedam ul { padding: 0; margin: 0; list-style: none; }

        /* ---- NAV ---- */
        .nav {
          position: sticky; top: 0; z-index: 1000;
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 5vw;
          background: rgba(243,245,239,0.96);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--line);
          box-shadow: 0 4px 20px rgba(14,82,69,0.06);
        }
        .brand {
          display: flex; align-items: center; gap: 14px;
          cursor: pointer; background: none; border: none; padding: 2px 0;
          text-align: left;
        }
        .brand__mark {
          width: 48px; height: 48px; border-radius: 14px;
          background: linear-gradient(135deg, #0E5245 0%, #07332b 100%);
          color: #fff; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 20px rgba(14,82,69,0.22);
          border: 1.5px solid rgba(232,163,61,0.35);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .brand:hover .brand__mark {
          transform: scale(1.05);
          box-shadow: 0 12px 24px rgba(14,82,69,0.32);
        }
        .brand__info {
          display: flex; flex-direction: column; align-items: flex-start;
        }
        .brand__word {
          font-family: 'Fraunces', serif; font-weight: 700; font-size: 1.6rem;
          color: var(--ink); line-height: 1.05; letter-spacing: -0.015em; display: block;
        }
        .brand__meta {
          display: flex; align-items: center; gap: 7px; margin-top: 3px;
        }
        .brand__badge {
          background: var(--mint); color: var(--deep);
          font-family: 'Work Sans', sans-serif; font-size: 0.68rem; font-weight: 700;
          padding: 2px 7px; border-radius: 6px; letter-spacing: 0.04em;
          text-transform: uppercase; border: 1px solid rgba(14,82,69,0.16);
        }
        .brand__tagline {
          font-family: 'Work Sans', sans-serif; font-weight: 600; font-size: 0.76rem;
          letter-spacing: 0.05em; text-transform: uppercase; color: #43544c;
        }
        .nav__links { display: flex; gap: 28px; }
        .nav__links button {
          background: none; border: none; cursor: pointer;
          font-family: 'Work Sans', sans-serif; font-size: .95rem; font-weight: 500;
          color: #445048; padding: 4px 0; border-bottom: 2px solid transparent;
        }
        .nav__links button.is-active { color: var(--deep); border-color: var(--accent); }
        .nav__menu { display: none; align-items: center; gap: 7px; background: var(--paper-2); color: var(--deep); border: 1px solid var(--line); border-radius: 999px; padding: 8px 13px; font: 600 .84rem 'Work Sans', sans-serif; cursor: pointer; }
        .mobile-menu { position: sticky; top: 73px; z-index: 35; display: flex; gap: 8px; flex-wrap: wrap; padding: 12px 6vw; background: var(--paper-2); border-bottom: 1px solid var(--line); box-shadow: 0 12px 20px rgba(14,82,69,.08); }
        .mobile-menu button { border: 0; background: var(--paper); color: var(--deep); border-radius: 999px; padding: 9px 14px; font: 600 .86rem 'Work Sans', sans-serif; cursor: pointer; }
        .mobile-menu button.is-active { background: var(--deep); color: #fff; }
        .kedam a.nav__phone {
          display: flex; align-items: center; gap: 8px;
          background: var(--deep); color: #fff; padding: 10px 18px;
          border-radius: 30px; text-decoration: none; font-size: .88rem; font-weight: 600;
          white-space: nowrap;
        }
        .nav__burger { display: none; background: none; border: none; }

        /* ---- BUTTONS ---- */
        .btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Work Sans', sans-serif; font-weight: 600; font-size: .95rem;
          padding: 12px 20px; border-radius: 999px; cursor: pointer;
          border: 1px solid transparent; text-decoration: none;
        }
        .btn--solid { background: var(--deep); color: #fff; }
        .btn--solid:hover { background: var(--deep-2); }
        .btn--accent { background: var(--accent); color: var(--ink); }
        .btn--accent:hover { background: #f0b85e; }
        .btn--ghost { background: transparent; color: var(--deep); border-color: var(--line); }
        .btn--whatsapp { background: #25d366; color: #073b25; }
        .btn--whatsapp:hover { background: #1fbd5b; }
        .btn--light { }
        .btn--outline-light { background: transparent; color: #fff; border-color: rgba(255,255,255,.5); }
        .kedam a.btn--solid { color: #fff; }
        .kedam a.btn--whatsapp { color: #073b25; }
        .kedam a.btn--outline-light { color: #fff; }
        .cta-row { display: flex; gap: 14px; flex-wrap: wrap; margin: 26px 0 30px; }

        /* ---- HERO ---- */
        .hero {
          display: grid; grid-template-columns: 320px 1.15fr 0.95fr; gap: 32px;
          align-items: center; padding: 48px 5vw 36px; max-width: 1420px; margin: 0 auto;
        }
        .hero h1 { font-size: clamp(2rem, 3.4vw, 2.9rem); line-height: 1.12; }
        .hero__sub { max-width: 48ch; font-size: 0.96rem; }
        .trust-strip { display: flex; gap: 18px; flex-wrap: wrap; padding-top: 12px; border-top: 1px solid var(--line); }
        .trust-strip div { display: flex; align-items: center; gap: 7px; font-size: .82rem; font-weight: 600; color: #33413a; }

        /* Natural Product Spotlight Showcase */
        .hero__product-showcase-box {
          background: linear-gradient(165deg, #ffffff 0%, #f4faf6 55%, #e1efe7 100%);
          border: 1.5px solid rgba(14, 82, 69, 0.22);
          border-radius: 26px;
          padding: 18px;
          box-shadow: 0 16px 36px rgba(14, 82, 69, 0.12);
          display: flex;
          flex-direction: column;
          gap: 14px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hero__product-showcase-box:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 44px rgba(14, 82, 69, 0.18);
        }
        .hero__product-spotlight-img {
          position: relative;
          width: 100%;
          height: 190px;
          border-radius: 18px;
          overflow: hidden;
          background: #0e5245;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        .hero__spotlight-img-active {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          animation: spotlightFade 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        @keyframes spotlightFade {
          from { opacity: 0.4; transform: scale(1.06); }
          to { opacity: 1; transform: scale(1); }
        }
        .hero__spotlight-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: var(--accent);
          color: var(--ink);
          font-size: 0.68rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          z-index: 2;
        }
        .hero__spotlight-dots {
          position: absolute;
          bottom: 10px;
          right: 10px;
          display: flex;
          gap: 6px;
          z-index: 2;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(6px);
          padding: 5px 8px;
          border-radius: 999px;
        }
        .spotlight-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          padding: 0;
          background: rgba(255,255,255,0.4);
          cursor: pointer;
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .spotlight-dot.is-active {
          background: var(--accent);
          transform: scale(1.3);
        }
        .hero__tool-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .hero__tool-heading {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .hero__tool-icon {
          font-size: 1.3rem;
          line-height: 1;
        }
        .hero__tool-heading strong {
          display: block;
          font-family: 'Fraunces', serif;
          font-size: 1.05rem;
          color: var(--deep-2);
          line-height: 1.2;
        }
        .hero__tool-heading small {
          display: block;
          font-size: 0.72rem;
          color: #55665e;
        }
        .hero__tool-vitals {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #ffffff;
          border: 1px solid rgba(14, 82, 69, 0.14);
          border-radius: 8px;
          padding: 5px 10px;
          width: fit-content;
        }
        .vitals-heart {
          color: #c93b2b;
          font-size: 0.95rem;
          animation: heartbeatBoom 1.2s infinite;
        }
        @keyframes heartbeatBoom {
          0%, 100% { transform: scale(1); }
          15% { transform: scale(1.3); }
          30% { transform: scale(1); }
          45% { transform: scale(1.2); }
        }
        .vitals-bpm {
          font-weight: 700;
          font-size: 0.82rem;
          color: var(--deep-2);
        }
        .vitals-status {
          font-size: 0.72rem;
          color: #61736a;
          border-left: 1px solid #d4dfd9;
          padding-left: 7px;
        }
        .hero__tool-text {
          font-size: 0.82rem;
          line-height: 1.45;
          color: #3f4e46;
          margin: 0;
        }
        .hero__tool-action {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: var(--deep);
          color: #ffffff;
          border: none;
          border-radius: 999px;
          padding: 9px 16px;
          font-family: 'Work Sans', sans-serif;
          font-weight: 600;
          font-size: 0.84rem;
          cursor: pointer;
          margin-top: 4px;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .hero__tool-action:hover {
          background: var(--deep-2);
          transform: translateX(2px);
        }

        .hero__art { position: relative; height: 380px; }
        .hero__cross {
          position: absolute; inset: 0; margin: auto; width: 260px; height: 260px;
          background: var(--mint); border-radius: 40px; transform: rotate(8deg);
        }
        .hero__photo {
          position: absolute; top: 14px; left: 6%; width: 74%; height: 74%;
          border-radius: 28px; overflow: hidden; box-shadow: 0 24px 48px rgba(14,82,69,.22);
          border: 6px solid var(--paper-2);
        }
        .hero__photo img { width: 100%; height: 100%; object-fit: cover; }
        .hero__chip {
          position: absolute; display: flex; align-items: center; gap: 8px;
          background: #fff; padding: 10px 14px; border-radius: 14px;
          font-size: .78rem; font-weight: 700; box-shadow: 0 10px 24px rgba(14,82,69,.16);
        }
        .hero__chip--a { bottom: 30px; left: -6px; }
        .hero__chip--b { top: 6px; right: -4px; }

        /* ---- MARQUEE (Pink section: cards with images) ---- */
        .marquee {
          overflow: hidden;
          background: linear-gradient(180deg, #072a23 0%, #0e5245 100%);
          padding: 26px 0;
          margin-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
        }
        .marquee::before, .marquee::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 60px;
          z-index: 2;
          pointer-events: none;
        }
        .marquee::before {
          left: 0;
          background: linear-gradient(90deg, #0e5245, transparent);
        }
        .marquee::after {
          right: 0;
          background: linear-gradient(270deg, #0e5245, transparent);
        }
        .marquee__track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: scrollCards 32s linear infinite;
        }
        .marquee:hover .marquee__track {
          animation-play-state: paused;
        }
        @keyframes scrollCards {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee__card {
          width: 270px;
          flex: 0 0 270px;
          background: #ffffff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.25);
          transition: transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.28s ease;
          text-align: left;
        }
        .marquee__card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 42px rgba(0, 0, 0, 0.32);
        }
        .marquee__card-media {
          height: 140px;
          width: 100%;
          position: relative;
          overflow: hidden;
          background: var(--mint);
        }
        .marquee__card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .marquee__card:hover .marquee__card-media img {
          transform: scale(1.08);
        }
        .marquee__card-tag {
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 4px 9px;
          border-radius: 999px;
          background: rgba(14, 82, 69, 0.88);
          color: #ffffff;
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          backdrop-filter: blur(4px);
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        .marquee__card-badge {
          position: absolute;
          bottom: 10px;
          right: 10px;
          width: 36px;
          height: 36px;
          border-radius: 11px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
          border: 1px solid rgba(14, 82, 69, 0.12);
        }
        .marquee__card-body {
          padding: 14px 16px 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }
        .marquee__card-title {
          font-family: 'Fraunces', serif;
          font-size: 1.08rem;
          font-weight: 600;
          color: var(--ink);
          margin: 0;
          line-height: 1.25;
        }
        .marquee__card-desc {
          font-size: 0.78rem;
          line-height: 1.42;
          color: #485950;
          margin: 2px 0 8px;
          flex: 1;
        }
        .marquee__card-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--deep);
        }
        .marquee__card:hover .marquee__card-link {
          color: var(--accent-2);
        }

        /* ---- BAND ---- */
        .band {
          display: grid; grid-template-columns: .8fr 1.2fr; gap: 48px; align-items: center;
          padding: 70px 6vw; max-width: 1280px; margin: 0 auto;
        }
        .band__photo { border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(14,82,69,.14); }
        .band__photo img { width: 100%; height: 340px; object-fit: cover; display: block; transition: transform 0.8s cubic-bezier(.2,.8,.2,1), filter 0.4s ease; }
        .band:hover .band__photo img { transform: scale(1.04) rotate(-0.5deg); filter: saturate(1.08); }
        .band__text { opacity: 0; transform: translateX(40px); transition: opacity 0.9s cubic-bezier(.2,.8,.2,1), transform 0.9s cubic-bezier(.2,.8,.2,1); }
        .band.is-visible .band__text { opacity: 1; transform: translateX(0); }
        .check-list li { display: flex; gap: 10px; padding: 8px 0; border-top: 1px solid var(--line); font-size: .95rem; color: #33413a; }
        .check-list li::before { content: '+'; color: var(--accent); font-weight: 700; font-family: 'Fraunces', serif; }

        .closer {
          background: var(--deep-2); color: #fff;
          display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px;
          padding: 48px 6vw; margin-top: 10px;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s cubic-bezier(.2,.8,.2,1), transform 0.9s cubic-bezier(.2,.8,.2,1);
          position: relative;
          overflow: hidden;
        }
        .closer.is-visible { opacity: 1; transform: translateY(0); }
        .closer::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 50%, rgba(232,163,61,0.15) 0%, transparent 50%),
                      radial-gradient(circle at 80% 50%, rgba(14,82,69,0.25) 0%, transparent 50%);
          animation: closerGlow 6s ease-in-out infinite alternate;
          pointer-events: none;
        }
        @keyframes closerGlow {
          0% { opacity: 0.6; }
          100% { opacity: 1; }
        }
        .closer h2 { color: #fff; font-size: 1.7rem; position: relative; z-index: 1; }
        .closer p { color: rgba(255,255,255,.75); margin: 0; position: relative; z-index: 1; }
        .closer__actions { display: flex; gap: 14px; flex-wrap: wrap; position: relative; z-index: 1; }
        .closer__actions .btn { transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease; }
        .closer__actions .btn:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 8px 20px rgba(0,0,0,0.2); }
        .closer__actions .btn--whatsapp { animation: whatsappPulse 2s ease-in-out infinite; }
        @keyframes whatsappPulse {
          0%, 100% { box-shadow: 0 4px 14px rgba(37,211,102,0.3); }
          50% { box-shadow: 0 4px 22px rgba(37,211,102,0.5); }
        }
        .closer__call { animation: phoneRing 2.5s ease-in-out infinite; }
        @keyframes phoneRing {
          0%, 100% { transform: rotate(0); }
          10% { transform: rotate(-15deg); }
          20% { transform: rotate(15deg); }
          30% { transform: rotate(-10deg); }
          40% { transform: rotate(10deg); }
          50%, 100% { transform: rotate(0); }
        }

        /* ---- PRODUCT SHOWCASE ---- */
        .product-showcase {
          padding: 84px 6vw;
          background: linear-gradient(180deg, #fbf7f0 0%, #f4efe5 100%);
          position: relative;
          overflow: hidden;
        }
        .product-showcase::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
          opacity: 0.6;
        }
        .product-showcase::after {
          content: '';
          position: absolute;
          top: -120px;
          right: -120px;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(232,163,61,0.12) 0%, transparent 70%);
          animation: floatOrb 8s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes floatOrb {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-40px, 30px) scale(1.1); }
        }
        .ps-heading {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 56px;
          position: relative;
        }
        .ps-heading .kicker {
          color: var(--accent-2);
          margin-bottom: 12px;
        }
        .ps-heading h2 {
          font-size: clamp(1.9rem, 4.5vw, 3.2rem);
          margin-bottom: 18px;
          background: linear-gradient(90deg, var(--deep-2), var(--deep), var(--accent-2));
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textShimmer 4s linear infinite;
        }
        @keyframes textShimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .ps-heading .lede {
          margin: 0 auto;
          color: #526059;
        }
        .ps-new-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--accent-2);
          color: #fff;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 7px 14px;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 18px;
          box-shadow: 0 6px 18px rgba(184,70,47,0.3);
          animation: badgePulse 2.5s ease-in-out infinite;
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 6px 18px rgba(184,70,47,0.3); }
          50% { box-shadow: 0 6px 24px rgba(184,70,47,0.5); }
        }
        .ps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .ps-card--span-3 {
          grid-column: span 3;
        }
        .ps-card {
          border-radius: 24px;
          overflow: hidden;
          height: 360px;
          position: relative;
          border: 1px solid rgba(14,82,69,0.12);
          box-shadow: 0 12px 30px rgba(14,82,69,0.08);
          cursor: pointer;
          opacity: 0;
          transform: translateY(60px) scale(0.96);
          transition: opacity 0.8s cubic-bezier(.2,.8,.2,1), transform 0.8s cubic-bezier(.2,.8,.2,1), box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .ps-card.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .ps-card:nth-child(1) { transition-delay: 0ms; }
        .ps-card:nth-child(2) { transition-delay: 140ms; }
        .ps-card:nth-child(3) { transition-delay: 280ms; }
        .ps-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 28px 56px rgba(14,82,69,0.22);
          border-color: rgba(232,163,61,0.5);
        }
        .ps-card__img {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .ps-card__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.9s cubic-bezier(.2,.8,.2,1), filter 0.4s ease;
          filter: saturate(1.05) contrast(1.02);
        }
        .ps-card:hover .ps-card__img img {
          transform: scale(1.12);
          filter: saturate(1.15) contrast(1.08);
        }
        .ps-card__img {
          position: absolute;
          inset: 0;
        }
        .ps-card__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .ps-card:hover .ps-card__img img {
          transform: scale(1.06);
        }
        .ps-card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 30%, rgba(10,55,46,0.94) 100%);
          z-index: 1;
        }
        .ps-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: var(--accent);
          color: var(--ink);
          font-size: 0.7rem;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          z-index: 2;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          animation: badgeFloat 3.2s ease-in-out infinite;
        }
        @keyframes badgeFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .ps-card__body {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 26px 20px 22px;
          color: #fff;
          z-index: 2;
        }
        .ps-brand {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.65);
          margin-bottom: 4px;
          opacity: 0;
          transform: translateY(10px);
          animation: bodyStagger 0.6s cubic-bezier(.2,.8,.2,1) forwards;
          animation-delay: 0.45s;
        }
        .ps-name {
          font-family: 'Fraunces', serif;
          font-size: 1.35rem;
          font-weight: 700;
          margin: 0 0 8px;
          line-height: 1.15;
          text-shadow: 0 2px 8px rgba(0,0,0,0.3);
          opacity: 0;
          transform: translateY(10px);
          animation: bodyStagger 0.6s cubic-bezier(.2,.8,.2,1) forwards;
          animation-delay: 0.55s;
        }
        .ps-blurb {
          font-size: 0.82rem;
          line-height: 1.45;
          color: rgba(255,255,255,0.85);
          margin: 0 0 14px;
          opacity: 0;
          transform: translateY(10px);
          animation: bodyStagger 0.6s cubic-bezier(.2,.8,.2,1) forwards;
          animation-delay: 0.65s;
        }
        .ps-chips {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          margin-bottom: 16px;
          opacity: 0;
          transform: translateY(10px);
          animation: bodyStagger 0.6s cubic-bezier(.2,.8,.2,1) forwards;
          animation-delay: 0.75s;
        }
        .ps-chip {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(4px);
          color: #fff;
          font-size: 0.66rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.18);
        }
        .ps-action {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--accent);
          color: var(--ink);
          font-weight: 700;
          font-size: 0.8rem;
          padding: 9px 16px;
          border-radius: 999px;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
          box-shadow: 0 6px 16px rgba(232,163,61,0.3);
          opacity: 0;
          transform: translateY(10px);
          animation: bodyStagger 0.6s cubic-bezier(.2,.8,.2,1) forwards;
          animation-delay: 0.85s;
        }
        .ps-action:hover {
          background: #f0b85e;
          transform: translateX(2px);
        }
        @keyframes bodyStagger {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .ps-card--span-3 {
          grid-column: span 3;
        }

        @media (max-width: 880px) {
          .ps-grid {
            grid-template-columns: 1fr;
          }
          .ps-card--span-3 {
            grid-column: span 1;
          }
          .ps-card {
            height: 320px;
          }
        }
        @media (max-width: 520px) {
          .product-showcase {
            padding: 56px 4vw;
          }
          .ps-heading {
            margin-bottom: 36px;
          }
          .ps-card {
            height: 280px;
          }
        }

        /* ---- SECTION HEADING ---- */
        .section-heading { max-width: 660px; margin-bottom: 36px; }
        .kicker { font-family: 'Work Sans'; font-weight: 700; color: var(--accent-2); font-size: .82rem; margin-bottom: 8px; }
        .section-heading h2 { font-size: clamp(1.6rem, 3vw, 2.2rem); }

        /* ---- PAGE WRAP ---- */
        .page { padding: 60px 6vw 90px; max-width: 1280px; margin: 0 auto; }
        .page--narrow { max-width: 980px; }

        /* ---- SERVICES ---- */
        .service-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; }
        .reveal { opacity: 0; transform: translateY(28px) scale(.985); transition: opacity .65s ease var(--card-delay, 0ms), transform .65s cubic-bezier(.2,.8,.2,1) var(--card-delay, 0ms); }
        .reveal.is-visible { opacity: 1; transform: translateY(0); }
        .service-card { background: var(--paper-2); border: 1px solid var(--line); border-radius: 22px; padding: 28px; transition: border-color .25s ease, box-shadow .25s ease, transform .25s ease; }
        .service-card:hover { border-color: rgba(14,82,69,.42); box-shadow: 0 18px 36px rgba(14,82,69,.11); transform: translateY(-5px); }
        .service-card__icon { width: 100%; height: 132px; border-radius: 16px; background: var(--mint); overflow: hidden; margin-bottom: 16px; }
        .service-card__icon img { width: 100%; height: 100%; object-fit: cover; display: block; animation: imageDrift 9s ease-in-out infinite alternate; }
        .service-card__badge { width: 42px; height: 42px; border-radius: 13px; background: var(--mint); display: flex; align-items: center; justify-content: center; margin-top: -36px; margin-left: 14px; position: relative; border: 3px solid var(--paper-2); }
        @keyframes imageDrift { from { transform: scale(1.02) translate3d(-1%, 0, 0); } to { transform: scale(1.1) translate3d(1%, -2%, 0); } }
        .service-card ul { margin-top: 14px; }
        .service-card li { font-size: .88rem; padding: 6px 0 6px 16px; position: relative; color: #435049; }
        .service-card li::before { content: ''; position: absolute; left: 0; top: 14px; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
        .inline-cta { margin-top: 44px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; background: var(--mint); padding: 26px 30px; border-radius: 20px; }
        .inline-cta p { margin: 0; font-weight: 600; color: var(--deep-2); }

        /* ---- PRODUCTS ---- */
        .product-list { display: flex; flex-direction: column; gap: 26px; }
        .product-row { position: relative; display: grid; grid-template-columns: 280px 1fr; gap: 30px; align-items: center; background: var(--paper-2); border: 1px solid var(--line); border-radius: 24px; overflow: hidden; transition: border-color .3s ease, box-shadow .3s ease, transform .3s cubic-bezier(.2,.8,.2,1); }
        .product-row::after { content: ''; position: absolute; inset: 0; pointer-events: none; background: linear-gradient(110deg, transparent 25%, rgba(255,255,255,.28) 48%, transparent 70%); transform: translateX(-120%); transition: transform .8s ease; }
        .product-row:hover { border-color: rgba(14,82,69,.42); box-shadow: 0 22px 42px rgba(14,82,69,.16); transform: translateY(-8px) rotateX(1deg); }
        .product-row:hover::after { transform: translateX(120%); }
        .product-row__media { height: 190px; background: var(--mint); }
        .product-row__media { position: relative; overflow: hidden; }
        .product-row__media img { width: 100%; height: 100%; object-fit: cover; display: block; animation: productPan 7s ease-in-out infinite alternate; transition: opacity .35s ease, transform .7s ease; }
        .product-row__counter { position: absolute; right: 12px; bottom: 12px; padding: 5px 9px; border-radius: 999px; background: rgba(10,55,46,.82); color: #fff; font-size: .72rem; font-weight: 700; }
        @keyframes productPan { from { transform: scale(1.02); } to { transform: scale(1.1) translateX(2%); } }
        .product-row__icon { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
        .product-row__text { padding: 20px 26px 20px 0; }
        .product-row__meta { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-bottom: 8px; color: var(--accent-2); font-size: .75rem; font-weight: 700; text-transform: uppercase; letter-spacing: .04em; }
        .product-row__availability { color: var(--deep); text-transform: none; letter-spacing: 0; white-space: nowrap; }
        .product-row__title { display: flex; align-items: center; gap: 10px; }
        .product-row__title h3 { margin: 0; }
        .chips { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 14px; }
        .chip { background: var(--paper); border: 1px solid var(--line); border-radius: 999px; padding: 6px 14px; font-size: .8rem; font-weight: 600; color: var(--deep-2); }
        .product-row__action { display: inline-flex; align-items: center; gap: 6px; margin-top: 18px; color: var(--deep); font-size: .84rem; font-weight: 700; text-decoration: none; }
        .product-row__action:hover { color: var(--accent-2); }

        /* ---- ABOUT ---- */
        .about-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 32px; }
        .about-card, .values { background: var(--paper-2); border: 1px solid var(--line); border-radius: 24px; padding: 30px; }
        .about-card__avatar { width: 120px; height: 120px; border-radius: 50%; overflow: hidden; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; border: 3px solid var(--accent-2); }
        .about-card__avatar img { width: 100%; height: 100%; object-fit: cover; }
        .about-card__role { color: var(--accent-2); font-weight: 700; font-size: .85rem; margin-top: -8px; }
        .values__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; margin-top: 18px; }
        .values__grid div { display: flex; flex-direction: column; gap: 6px; }
        .values__grid strong { font-family: 'Fraunces', serif; font-size: 1.02rem; }
        .values__grid span { font-size: .84rem; color: #526059; }

        /* ---- CONTACT ---- */
        .contact-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 32px; }
        .contact-info { display: flex; flex-direction: column; gap: 22px; }
        .contact-item { display: flex; gap: 14px; align-items: flex-start; }
        .contact-item strong { display: block; font-size: .82rem; text-transform: none; color: var(--deep-2); margin-bottom: 2px; }
        .contact-item p { margin: 0; }
        .contact-form { background: var(--paper-2); border: 1px solid var(--line); border-radius: 22px; padding: 26px; display: flex; flex-direction: column; gap: 14px; }
        .contact-form label { font-size: .82rem; font-weight: 600; color: #33413a; display: flex; flex-direction: column; gap: 6px; }
        .contact-form input, .contact-form textarea {
          font-family: 'Work Sans'; font-size: .92rem; padding: 10px 12px;
          border-radius: 10px; border: 1px solid var(--line); background: var(--paper);
        }
        .form-actions { display: flex; gap: 10px; flex-wrap: wrap; }
        .form-note { font-size: .76rem; color: #6b7770; margin: 4px 0 0; }
        .form-note--success { color: var(--deep); font-weight: 600; }
        .booking-panel { display: grid; grid-template-columns: .8fr 1.2fr; gap: 28px; align-items: center; margin-top: 34px; padding: 30px; background: var(--mint); border-radius: 22px; }
        .booking-panel h2 { color: var(--deep-2); font-size: 1.65rem; }
        .booking-panel p { color: #38554b; }
        .booking-form { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
        .booking-form input, .booking-form select { min-width: 0; font: inherit; padding: 11px 12px; border: 1px solid rgba(14,82,69,.2); border-radius: 10px; background: #fff; color: var(--ink); }
        .booking-form .btn { justify-content: center; }
        .map-wrap { margin-top: 40px; border-radius: 22px; overflow: hidden; border: 1px solid var(--line); }
        .map-wrap iframe { width: 100%; height: 320px; border: 0; display: block; }

        /* ---- FOOTER ---- */
        .footer { background: var(--ink); color: #cfd8d2; padding: 50px 6vw 30px; }
        .footer__top { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 30px; padding-bottom: 30px; border-bottom: 1px solid rgba(255,255,255,.12); }
        .footer h4 { color: #fff; font-family: 'Fraunces', serif; font-size: 1rem; margin: 0 0 12px; }
        .footer__cols { display: flex; gap: 60px; flex-wrap: wrap; }
        .footer__cols a { color: #cfd8d2; text-decoration: none; display: block; font-size: .88rem; margin-bottom: 8px; }
        .footer__bottom { display: flex; justify-content: space-between; padding-top: 18px; font-size: .78rem; color: #8a958e; flex-wrap: wrap; gap: 8px; }

        @media (max-width: 1180px) {
          .hero {
            grid-template-columns: 1fr 1fr;
          }
          .hero__tool-showcase {
            grid-column: span 2;
            display: grid;
            grid-template-columns: 200px 1fr;
            gap: 20px;
            align-items: center;
          }
          .hero__tool-stage {
            height: 160px;
          }
        }
        @media (max-width: 880px) {
          .nav__links { display: none; }
          .nav__menu { display: inline-flex; }
          .hero, .band, .about-grid, .contact-grid { grid-template-columns: 1fr; }
          .hero__tool-showcase {
            grid-column: span 1;
            display: flex;
            flex-direction: column;
          }
          .hero__tool-stage {
            height: 180px;
          }
          .service-grid { grid-template-columns: 1fr; }
          .product-row { grid-template-columns: 1fr; }
          .product-row__media { height: 200px; }
          .booking-panel { grid-template-columns: 1fr; }
        }
        @media (max-width: 520px) {
          .nav { padding: 12px 4vw; }
          .brand__mark { width: 42px; height: 42px; border-radius: 12px; }
          .brand__word { font-size: 1.3rem; }
          .brand__tagline { font-size: 0.68rem; }
          .brand__badge { display: none; }
          .nav__phone { padding: 8px 12px; font-size: .78rem; }
          .hero, .band, .page { padding-left: 4vw; padding-right: 4vw; }
          .hero__art { height: 300px; }
          .booking-panel { padding: 22px; }
          .booking-form { grid-template-columns: 1fr; }
        }
      `}</style>

      <header className="nav">
        <button className="brand" onClick={() => goto("Home")} aria-label="Kedam Chemist Homepage">
          <span className="brand__mark">
            <KedamMark size={32} />
          </span>
          <span className="brand__info">
            <span className="brand__word">Kedam Chemist</span>
            <span className="brand__meta">
              <span className="brand__badge">Nurse-Led</span>
              <span className="brand__tagline">Multi-Purpose Store</span>
            </span>
          </span>
        </button>
        <nav className="nav__links">
          {NAV.map((n) => (
            <button key={n} className={page === n ? "is-active" : ""} onClick={() => goto(n)}>
              {n}
            </button>
          ))}
        </nav>
        <button className="nav__menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Open navigation menu">
          <Icon name="menu" size={20} /> <span>Menu</span>
        </button>
        <a className="nav__phone" href="tel:07038045008">
          <Icon name="phone" size={15} /> 0703 804 5008
        </a>
      </header>
      {menuOpen && <nav className="mobile-menu" aria-label="Mobile navigation">
        {NAV.map((n) => <button key={n} className={page === n ? "is-active" : ""} onClick={() => goto(n)}>{n}</button>)}
      </nav>}

      {page === "Home" && <Home onNavigate={goto} />}
      {page === "Services" && <Services onNavigate={goto} />}
      {page === "Products" && <Products />}
      {page === "About" && <About />}
      {page === "Contact" && <Contact />}

      <footer className="footer">
        <div className="footer__top">
          <div>
            <h4>Kedam Chemist and Multi-Purpose Store</h4>
            <p style={{ maxWidth: "32ch", color: "#9fada5" }}>
              Nurse-led pharmacy care in Mushin, Lagos — treatment, checkups,
              medicine and equipment.
            </p>
          </div>
          <div className="footer__cols">
            <div>
              <h4>Site</h4>
              {NAV.map((n) => (
                <a key={n} onClick={() => goto(n)} style={{ cursor: "pointer" }}>
                  {n}
                </a>
              ))}
            </div>
            <div>
              <h4>Contact</h4>
              <a href="tel:07038045008">0703 804 5008</a>
              <a href="tel:09132392816">0913 239 2816</a>
              <a href="mailto:kikelomo4june24@gmail.com">kikelomo4june24@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Kedam Chemist and Multi-Purpose Store</span>
          <span>nursekedem.com.ng</span>
        </div>
      </footer>
    </div>
  );
}
