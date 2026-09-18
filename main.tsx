import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight, BarChart3, CheckCircle2, Cloud, Code2, Compass, Factory,
  Gauge, Layers3, Lightbulb, Menu, Network, ShieldCheck, Truck, Users, X,
  MapPin, Mail, Phone, PlayCircle, Building2, Boxes, Workflow
} from 'lucide-react';
import './styles.css';

const brand = '/brand/';

const solutions = [
  { icon: Truck, title: 'LogiFleet ERP', text: 'End-to-end transport & logistics management', featured: true, href: '#logifleet' },
  { icon: Code2, title: 'Custom Software Development', text: 'Tailored solutions for your business' },
  { icon: Network, title: 'Business Automation', text: 'Streamline processes and improve efficiency' },
  { icon: Cloud, title: 'Cloud & Integration', text: 'Modern, scalable and connected systems' },
  { icon: Users, title: 'IT Consulting', text: 'Strategy, architecture and technology advisory' }
];

const industries = [
  { title: 'Transport & Logistics', text: 'Efficient operations. Better deliveries.', image: 'industry-truck-final.jpg' },
  { title: 'E-Commerce', text: 'Scalable and reliable business solutions.', image: 'industry-commerce-final.jpg' },
  { title: 'FMCG', text: 'Streamlined supply chain and distribution.', image: 'industry-warehouse-final.jpg' },
  { title: 'Other Industries', text: 'Custom solutions for your unique needs.', image: 'industry-city-final.jpg' }
];

const approach = [
  ['01', 'Understand', 'Deeply understand your business needs', Compass],
  ['02', 'Plan', 'Design the right solution strategy', Layers3],
  ['03', 'Build', 'Develop with quality and scalability', Workflow],
  ['04', 'Deliver', 'Implement and support for success', Truck]
] as const;

function App() {
  const [open, setOpen] = React.useState(false);
  const nav = [
    ['Home', '#home'], ['About', '#about'], ['Solutions', '#solutions'],
    ['LogiFleet', '#logifleet'], ['Industries', '#industries'], ['Technology', '#technology'], ['Contact', '#contact']
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" aria-label="TriNova Solutions LLP">
            <img src={brand + 'header-logo.png'} alt="TriNova Solutions LLP" />
          </a>
          <nav className={'nav ' + (open ? 'mobile-open' : '')}>
            {nav.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
          </nav>
          <a className="nav-cta" href="#contact">Let's Connect <ArrowRight size={18} /></a>
          <button className="menu-btn" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-scene" aria-hidden="true" />
          <div className="hero-fade" aria-hidden="true" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow">TECHNOLOGY&nbsp; | &nbsp;LOGISTICS&nbsp; | &nbsp;CONSULTING</div>
              <h1>Technology<br /><span>That Moves</span><br />Business Forward.</h1>
              <p>At TriNova Solutions LLP, we combine domain expertise, modern technology and a problem-solving mindset to help businesses streamline operations, drive efficiency and scale with confidence.</p>
              <div className="hero-actions">
                <a className="btn primary" href="#solutions">Explore Our Solutions <ArrowRight size={18} /></a>
                <a className="btn outline" href="#about"><PlayCircle size={18} /> Watch Video</a>
              </div>
              <div className="pillars">
                {[[Users, 'People', 'First'], [Gauge, 'Process', 'Driven'], [Lightbulb, 'Technology', 'Enabled'], [BarChart3, 'Growth', 'Focused']].map(([I, a, b]) => (
                  <div className="pillar" key={String(a)}><I size={31} /><span>{String(a)}<br />{String(b)}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container stats-grid">
            <div><Building2 /><div><strong>100+</strong><span>Businesses Empowered</span></div></div>
            <div><Truck /><div><strong>1M+</strong><span>Shipments Supported</span></div></div>
            <div><BarChart3 /><div><strong>99%</strong><span>Commitment to Excellence</span></div></div>
            <div><Users /><div><strong>Long-Term</strong><span>Business Partnerships</span></div></div>
          </div>
        </section>

        <section id="solutions" className="section solutions">
          <div className="container">
            <div className="center-head">
              <div className="eyebrow">OUR SOLUTIONS</div>
              <h2>Built for <span>Real Business Impact</span></h2>
              <p>From logistics operations to enterprise application development, we deliver solutions that solve real-world challenges and create long-term value.</p>
            </div>
            <div className="solution-grid">
              {solutions.map(s => { const I = s.icon; return (
                <a href={s.href || '#contact'} className={'solution-card ' + (s.featured ? 'featured' : '')} key={s.title}>
                  <div className="icon-box"><I size={31} /></div>
                  <h3>{s.title}</h3><p>{s.text}</p>
                  <span className="circle-arrow"><ArrowRight size={17} /></span>
                </a>
              ); })}
            </div>
          </div>
        </section>

        <section id="logifleet" className="logifleet">
          <div className="container lf-grid">
            <div className="lf-copy">
              <div className="eyebrow">INTRODUCING</div>
              <h2><span>LogiFleet</span> by TriNova</h2>
              <div className="lf-tag">Complete Transport & Logistics ERP</div>
              <p>Manage your transport business end-to-end — from booking to billing, with real-time visibility, better control and higher profitability.</p>
              <ul>{['Bookings & Dispatch', 'Trip Tracking', 'Freight & Billing', 'Vehicle & Driver Management', 'Reports & Analytics'].map(x => <li key={x}><CheckCircle2 size={17} />{x}</li>)}</ul>
              <a href="#contact" className="btn primary">Explore LogiFleet <ArrowRight size={18} /></a>
            </div>
            <div className="lf-visual"><img src={brand + 'logifleet-final.jpg'} alt="LogiFleet dashboard" /></div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container about-grid">
            <div className="about-art"><img src={brand + 'about-trinova.jpg'} alt="TriNova office" /></div>
            <div className="about-copy">
              <div className="eyebrow">ABOUT TRINOVA</div>
              <h2>Your Technology &<br /><span>Business Transformation Partner.</span></h2>
              <p>TriNova Solutions LLP is a technology and consulting company focused on solving real business problems through innovative, reliable and scalable solutions.</p>
              <p>With deep domain understanding and a commitment to excellence, we help businesses modernize, automate and grow in a rapidly changing world.</p>
              <div className="about-points">
                <div><Compass /><b>Our Mission</b><span>Create meaningful business impact.</span></div>
                <div><BarChart3 /><b>Our Vision</b><span>A smarter, connected future.</span></div>
                <div><ShieldCheck /><b>Our Values</b><span>Integrity, innovation and customer success.</span></div>
                <div><Users /><b>Our Approach</b><span>Understand. Build. Deliver. Grow.</span></div>
              </div>
              <a href="#contact" className="btn primary">More About Us <ArrowRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="section approach">
          <div className="container">
            <div className="center-head"><div className="eyebrow">OUR APPROACH</div><h2>A Practical Approach. <span>Real Results.</span></h2><p>We follow a structured and collaborative approach to understand, build and deliver solutions that create measurable business value.</p></div>
            <div className="approach-grid">
              {approach.map(([n, t, d, I], i) => <div className="approach-step" key={n}><div className="step-icon"><I size={24} /></div><div><small>{n}</small><h3>{t}</h3><p>{d}</p></div>{i < 3 && <ArrowRight className="step-arrow" size={19} />}</div>)}
            </div>
          </div>
        </section>

        <section id="industries" className="section industries">
          <div className="container">
            <div className="section-head"><div className="eyebrow">INDUSTRIES WE SERVE</div><h2>Driving Value Across <span>Industries</span></h2><p>We work with businesses across diverse industries, delivering solutions that fit real-world needs.</p></div>
            <div className="industry-grid">{industries.map(x => <a href="#contact" className="industry-card" key={x.title}><img src={brand + x.image} alt={x.title} /><div className="industry-copy"><h3>{x.title}</h3><p>{x.text}</p><span className="circle-arrow"><ArrowRight size={15} /></span></div></a>)}</div>
          </div>
        </section>

        <section id="technology" className="tech-strip">
          <div className="container tech-strip-inner">
            <div><div className="eyebrow">POWERED BY MODERN TECHNOLOGY</div><h2>Reliable. Scalable. <span>Future-Ready.</span></h2></div>
            <div className="tech-items"><span><b>.NET</b><small>ASP.NET Core</small></span><span><b>React</b><small>Modern UI</small></span><span><b>SQL Server</b><small>Trusted Data</small></span><span><b>Azure</b><small>Cloud Ready</small></span><span><b>APIs</b><small>Integrations</small></span></div>
          </div>
        </section>

        <section id="contact" className="cta">
          <div className="cta-bg" aria-hidden="true" />
          <div className="container cta-inner"><div><div className="eyebrow light">LET'S BUILD TOGETHER</div><h2>Ready to Move Your Business Forward?</h2><p>Partner with TriNova Solutions LLP and take the next step towards a smarter, more connected and future-ready business.</p></div><a href="mailto:contact@trinovasolutions.co.in" className="btn white">Get in Touch <ArrowRight size={18} /></a></div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand"><img src={brand + 'header-logo.png'} alt="TriNova Solutions LLP" /><p>People | Process | Technology | Growth</p><small>Technology, Logistics and Consulting<br />for a Smarter Tomorrow.</small></div>
          <div className="footer-column"><b>Quick Links</b><a href="#home">Home</a><a href="#about">About</a><a href="#solutions">Solutions</a><a href="#logifleet">LogiFleet</a></div>
          <div className="footer-column"><b>Our Solutions</b><a href="#logifleet">LogiFleet ERP</a><a href="#solutions">Custom Software</a><a href="#solutions">Business Automation</a><a href="#solutions">Cloud & Integration</a><a href="#solutions">IT Consulting</a></div>
          <div className="footer-column"><b>Industries</b><a href="#industries">Transport & Logistics</a><a href="#industries">E-Commerce</a><a href="#industries">FMCG</a><a href="#industries">Other Industries</a></div>
          <div className="footer-office">
            <b>Offices & Contact</b>

            <div>
              <Building2 />
              <span><strong>Registered Office</strong><br />Naraina, New Delhi, India</span>
            </div>

            <div>
              <MapPin />
              <span><strong>Branch Office</strong><br />142, Bima Vihar Society, Kanpur, India</span>
            </div>

            <a href="mailto:contact@trinovasolutions.co.in">
              <Mail />
              <span><strong>Email</strong><br />contact@trinovasolutions.co.in</span>
            </a>

            <a href="tel:+918799078990">
              <Phone />
              <span><strong>Contact</strong><br />+91 87990 78990 / +91 95996 62552</span>
            </a>
          </div>
          <div className="footer-follow"><b>Follow Us</b><div className="footer-social"><a href="#contact">in</a><a href="#contact">f</a><a href="#contact">𝕏</a><a href="#contact">▶</a></div><div className="footer-mark">Innovation<br /><span>in Motion.</span></div></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 TriNova Solutions LLP. All rights reserved.</span><span><a href="#contact">Privacy Policy</a><i>|</i><a href="#contact">Terms of Use</a><i>|</i><a href="#contact">Sitemap</a></span></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);