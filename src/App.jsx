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
    default:
      return null;
  }
};

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */
const SERVICES = [
  { icon: "home", label: "Home Treatment" },
  { icon: "pulse", label: "BP Checkup" },
  { icon: "droplet", label: "Sugar Level Checkup" },
  { icon: "cross", label: "Medicine Store" },
  { icon: "device", label: "Medical Equipment" },
  { icon: "bandage", label: "Wound Dressing" },
  { icon: "baby", label: "Mother & Baby Care" },
];

const SERVICE_DETAILS = [
  {
    icon: "home",
    title: "Home Treatment",
    body:
      "A registered nurse comes to you for routine treatment and monitoring, so you don't have to sit in a queue when you're unwell.",
    points: ["Nurse-led home visits", "Booked by phone, same-day where possible", "Suited to elderly and post-surgery patients"],
  },
  {
    icon: "pulse",
    title: "BP Checkup",
    body:
      "Quick, accurate blood pressure readings for anyone managing hypertension or checking in on their heart health.",
    points: ["Walk-in or home visit", "Reading explained in plain language", "Regular monitoring plans available"],
  },
  {
    icon: "droplet",
    title: "Sugar Level Checkup",
    body:
      "Blood glucose testing for diabetic and pre-diabetic clients, with guidance on what the numbers mean for daily life.",
    points: ["Fasting or random glucose tests", "Result recorded for your next visit", "Referral advice when needed"],
  },
  {
    icon: "bandage",
    title: "Post-Operative Care",
    body:
      "Wound dressing and recovery support after surgery, handled with the same care as a hospital ward — at home.",
    points: ["Sterile wound dressing", "Healing progress checked visit to visit", "Guidance for family caregivers"],
  },
];

const PRODUCTS = [
  {
    key: "medicine",
    icon: "cross",
    title: "Medicine Store",
    blurb: "Prescription and over-the-counter medicines, dispensed with proper guidance.",
    items: ["Prescription medicine", "Over-the-counter drugs", "Common household remedies"],
    image:
      "https://images.unsplash.com/photo-1696861286643-341a8d7a79e9?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Shelves of medicine at Kedam Chemist",
  },
  {
    key: "equipment",
    icon: "device",
    title: "Medical Equipment",
    blurb: "Take health monitoring home with equipment sold and explained in person.",
    items: ["BP apparatus", "Glucometers", "Weighing scales"],
    image:
      "https://images.unsplash.com/photo-1624625021542-41a4ff97c025?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Close-up of diabetes monitoring equipment",
  },
  {
    key: "baby",
    icon: "baby",
    title: "Mother & Baby",
    blurb: "Everyday essentials for mother and child, always in stock.",
    items: ["Baby wears", "Pads", "Wipes"],
    image: null,
    imageAlt: "",
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

function Reveal({ children, className = "" }) {
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

  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
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

function Marquee() {
  const loop = [...SERVICES, ...SERVICES];
  return (
    <div className="marquee" aria-label="Services offered">
      <div className="marquee__track">
        {loop.map((s, i) => (
          <div className="marquee__pill" key={i}>
            <Icon name={s.icon} size={20} color="#0E5245" />
            <span>{s.label}</span>
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
  return (
    <>
      <section className="hero">
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

        <div className="hero__art" aria-hidden="true">
          <div className="hero__cross" />
          <div className="hero__photo">
            <img
              src="https://images.unsplash.com/photo-1696861286643-341a8d7a79e9?auto=format&fit=crop&w=700&q=80"
              alt=""
            />
          </div>
          <div className="hero__chip hero__chip--a">
            <Icon name="pulse" size={16} color="#0E5245" />
            BP checked in minutes
          </div>
          <div className="hero__chip hero__chip--b">
            <Icon name="baby" size={16} color="#0E5245" />
            Mother &amp; baby essentials
          </div>
        </div>
      </section>

      <Marquee />

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
          <a className="btn btn--solid btn--light" href="tel:07038045008">
            <Icon name="phone" size={17} /> 0703 804 5008
          </a>
          <a className="btn btn--outline-light" href="tel:09132392816">
            0913 239 2816
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
              <Icon name={s.icon} size={26} color="#0E5245" />
            </div>
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
  return (
    <section className="page">
      <SectionHeading
        kicker="In the store"
        title="Medicine, equipment and everyday essentials"
        lede="Everything on the shelf is explained before it leaves the counter."
      />
      <div className="product-list">
        {PRODUCTS.map((p) => (
          <Reveal className="product-row" key={p.key}>
            <div className="product-row__media">
              {p.image ? (
                <img src={p.image} alt={p.imageAlt} />
              ) : (
                <div className="product-row__icon">
                  <Icon name={p.icon} size={44} color="#0E5245" />
                </div>
              )}
            </div>
            <div className="product-row__text">
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
            <Icon name="shield" size={34} color="#0E5245" />
          </div>
          <h3>Princess Adeyemi, S.O.K</h3>
          <p className="about-card__role">Registered Nurse &amp; Founder</p>
          <p>
            Princess Adeyemi founded Kedam Chemist and Multi-Purpose Store to bring
            proper nursing care into the neighbourhood, not just medicine over a
            counter. Every checkup, dressing and consultation carries her
            professional oversight.
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
          position: sticky; top: 0; z-index: 40;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 6vw;
          background: rgba(243,245,239,0.9);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--line);
        }
        .brand { display: flex; align-items: center; gap: 10px; cursor: pointer; background: none; border: none; }
        .brand__mark {
          width: 34px; height: 34px; border-radius: 9px;
          background: var(--deep); color: #fff;
          display: flex; align-items: center; justify-content: center;
        }
        .brand__word { font-family: 'Fraunces', serif; font-weight: 600; font-size: 1.15rem; color: var(--ink); }
        .brand__word small { display: block; font-family: 'Work Sans', sans-serif; font-weight: 500; font-size: .62rem; letter-spacing: .04em; color: #5b6a62; }
        .nav__links { display: flex; gap: 28px; }
        .nav__links button {
          background: none; border: none; cursor: pointer;
          font-family: 'Work Sans', sans-serif; font-size: .95rem; font-weight: 500;
          color: #445048; padding: 4px 0; border-bottom: 2px solid transparent;
        }
        .nav__links button.is-active { color: var(--deep); border-color: var(--accent); }
        .nav__phone {
          display: flex; align-items: center; gap: 8px;
          background: var(--deep); color: #fff; padding: 9px 16px;
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
        .cta-row { display: flex; gap: 14px; flex-wrap: wrap; margin: 26px 0 30px; }

        /* ---- HERO ---- */
        .hero {
          display: grid; grid-template-columns: 1.1fr .9fr; gap: 48px;
          align-items: center; padding: 64px 6vw 40px; max-width: 1280px; margin: 0 auto;
        }
        .hero h1 { font-size: clamp(2.1rem, 4vw, 3.1rem); }
        .hero__sub { max-width: 46ch; }
        .trust-strip { display: flex; gap: 22px; flex-wrap: wrap; padding-top: 10px; border-top: 1px solid var(--line); }
        .trust-strip div { display: flex; align-items: center; gap: 7px; font-size: .82rem; font-weight: 600; color: #33413a; }

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

        /* ---- MARQUEE ---- */
        .marquee { overflow: hidden; background: var(--deep); padding: 18px 0; margin-top: 12px; }
        .marquee__track { display: flex; gap: 14px; width: max-content; animation: scrollRight 28s linear infinite; }
        .marquee:hover .marquee__track { animation-play-state: paused; }
        @keyframes scrollRight { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .marquee__pill {
          display: flex; align-items: center; gap: 9px;
          background: #fff; border-radius: 999px; padding: 10px 18px;
          font-size: .86rem; font-weight: 600; color: var(--ink); white-space: nowrap;
        }
        .marquee__pill svg { flex: none; }

        /* ---- BAND ---- */
        .band {
          display: grid; grid-template-columns: .8fr 1.2fr; gap: 48px; align-items: center;
          padding: 70px 6vw; max-width: 1280px; margin: 0 auto;
        }
        .band__photo { border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(14,82,69,.14); }
        .band__photo img { width: 100%; height: 340px; object-fit: cover; display: block; }
        .check-list li { display: flex; gap: 10px; padding: 8px 0; border-top: 1px solid var(--line); font-size: .95rem; color: #33413a; }
        .check-list li::before { content: '+'; color: var(--accent); font-weight: 700; font-family: 'Fraunces', serif; }

        .closer {
          background: var(--deep-2); color: #fff;
          display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px;
          padding: 48px 6vw; margin-top: 10px;
        }
        .closer h2 { color: #fff; font-size: 1.7rem; }
        .closer p { color: rgba(255,255,255,.75); margin: 0; }
        .closer__actions { display: flex; gap: 14px; flex-wrap: wrap; }

        /* ---- SECTION HEADING ---- */
        .section-heading { max-width: 660px; margin-bottom: 36px; }
        .kicker { font-family: 'Work Sans'; font-weight: 700; color: var(--accent-2); font-size: .82rem; margin-bottom: 8px; }
        .section-heading h2 { font-size: clamp(1.6rem, 3vw, 2.2rem); }

        /* ---- PAGE WRAP ---- */
        .page { padding: 60px 6vw 90px; max-width: 1280px; margin: 0 auto; }
        .page--narrow { max-width: 980px; }

        /* ---- SERVICES ---- */
        .service-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; }
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity .6s ease, transform .6s ease; }
        .reveal.is-visible { opacity: 1; transform: translateY(0); }
        .service-card { background: var(--paper-2); border: 1px solid var(--line); border-radius: 22px; padding: 28px; transition: border-color .25s ease, box-shadow .25s ease, transform .25s ease; }
        .service-card:hover { border-color: rgba(14,82,69,.42); box-shadow: 0 18px 36px rgba(14,82,69,.11); transform: translateY(-5px); }
        .service-card__icon { width: 48px; height: 48px; border-radius: 14px; background: var(--mint); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
        .service-card ul { margin-top: 14px; }
        .service-card li { font-size: .88rem; padding: 6px 0 6px 16px; position: relative; color: #435049; }
        .service-card li::before { content: ''; position: absolute; left: 0; top: 14px; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
        .inline-cta { margin-top: 44px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; background: var(--mint); padding: 26px 30px; border-radius: 20px; }
        .inline-cta p { margin: 0; font-weight: 600; color: var(--deep-2); }

        /* ---- PRODUCTS ---- */
        .product-list { display: flex; flex-direction: column; gap: 26px; }
        .product-row { display: grid; grid-template-columns: 280px 1fr; gap: 30px; align-items: center; background: var(--paper-2); border: 1px solid var(--line); border-radius: 24px; overflow: hidden; transition: border-color .25s ease, box-shadow .25s ease, transform .25s ease; }
        .product-row:hover { border-color: rgba(14,82,69,.42); box-shadow: 0 18px 36px rgba(14,82,69,.11); transform: translateY(-4px); }
        .product-row__media { height: 190px; background: var(--mint); }
        .product-row__media img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .product-row__icon { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
        .product-row__text { padding: 20px 26px 20px 0; }
        .product-row__title { display: flex; align-items: center; gap: 10px; }
        .product-row__title h3 { margin: 0; }
        .chips { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 14px; }
        .chip { background: var(--paper); border: 1px solid var(--line); border-radius: 999px; padding: 6px 14px; font-size: .8rem; font-weight: 600; color: var(--deep-2); }

        /* ---- ABOUT ---- */
        .about-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 32px; }
        .about-card, .values { background: var(--paper-2); border: 1px solid var(--line); border-radius: 24px; padding: 30px; }
        .about-card__avatar { width: 60px; height: 60px; border-radius: 16px; background: var(--mint); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
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

        @media (max-width: 880px) {
          .nav__links { display: none; }
          .hero, .band, .about-grid, .contact-grid { grid-template-columns: 1fr; }
          .service-grid { grid-template-columns: 1fr; }
          .product-row { grid-template-columns: 1fr; }
          .product-row__media { height: 200px; }
          .booking-panel { grid-template-columns: 1fr; }
        }
        @media (max-width: 520px) {
          .nav { padding: 13px 4vw; }
          .nav__phone { padding: 9px 11px; font-size: .78rem; }
          .hero, .band, .page { padding-left: 4vw; padding-right: 4vw; }
          .hero__art { height: 300px; }
          .booking-panel { padding: 22px; }
          .booking-form { grid-template-columns: 1fr; }
        }
      `}</style>

      <header className="nav">
        <button className="brand" onClick={() => goto("Home")}>
          <span className="brand__mark">
            <Icon name="cross" size={19} />
          </span>
          <span className="brand__word">
            Kedam Chemist
            <small>Multi-Purpose Store</small>
          </span>
        </button>
        <nav className="nav__links">
          {NAV.map((n) => (
            <button key={n} className={page === n ? "is-active" : ""} onClick={() => goto(n)}>
              {n}
            </button>
          ))}
        </nav>
        <a className="nav__phone" href="tel:07038045008">
          <Icon name="phone" size={15} /> 0703 804 5008
        </a>
      </header>

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
          <span>kedam.com.ng · nursekedam.com.ng</span>
        </div>
      </footer>
    </div>
  );
}
