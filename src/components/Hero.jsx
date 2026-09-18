import React from "react";

// Fonts used: 'Space Grotesk' (display) + 'JetBrains Mono' (labels).
// Add these to your project, e.g. in index.html:
// <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

const LINKS = [
  {
    index: "01 // LINK",
    title: "GITHUB",
    desc: "View repositories",
    href: "https://github.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-1.94c-3.17.69-3.84-1.53-3.84-1.53-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 5.72 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.57.23 2.73.11 3.02.73.8 1.17 1.82 1.17 3.06 0 4.37-2.66 5.34-5.2 5.62.41.36.77 1.06.77 2.14v3.17c0 .3.21.66.79.55A11.03 11.03 0 0 0 23 11.52C23 5.24 18.27.5 12 .5z" />
      </svg>
    ),
  },
  {
    index: "02 // LINK",
    title: "LINKEDIN",
    desc: "Connect professionally",
    href: "https://linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    index: "03 // LINK",
    title: "EMAIL",
    desc: "Start a conversation",
    href: "mailto:hello@example.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 5.5h18v13H3v-13z" />
        <path d="M3 6l9 7 9-7" />
      </svg>
    ),
  },
];

function CoreGraphic() {
  const cx = 200,
    cy = 200,
    count = 36;
  const ticks = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * 2 * Math.PI;
    const r1 = 130,
      r2 = i % 3 === 0 ? 116 : 122;
    return {
      x1: (cx + r1 * Math.cos(angle)).toFixed(2),
      y1: (cy + r1 * Math.sin(angle)).toFixed(2),
      x2: (cx + r2 * Math.cos(angle)).toFixed(2),
      y2: (cy + r2 * Math.sin(angle)).toFixed(2),
    };
  });

  return (
    <div className="hero-core">
      <svg viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="130" fill="none" stroke="var(--purple)" strokeWidth="2" opacity="0.9" />
        <g stroke="var(--purple)" strokeWidth="2" opacity="0.7">
          {ticks.map((t, i) => (
            <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} />
          ))}
        </g>
        <circle cx="200" cy="200" r="95" fill="#0a0a0d" stroke="#3a3a42" strokeWidth="1" />
        <polygon points="175,157 175,243 250,200" fill="#f5f5f7" />
      </svg>
      <div className="core-status">
        <div className="online">CORE ONLINE</div>
        <div>DRAG TO INSPECT</div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-page{
          --bg:#0a0a0d;
          --line:#1e1e24;
          --text:#f5f5f7;
          --muted:#8a8a93;
          --purple:#a855f7;
          --purple-soft:rgba(168,85,247,.35);
          background:var(--bg);
          color:var(--text);
          font-family:'Space Grotesk',sans-serif;
        }
        .hero-page *{box-sizing:border-box;}
        .mono{font-family:'JetBrains Mono',monospace;}

        .hero-nav{
          display:flex; align-items:center; justify-content:space-between;
          max-width:1520px; margin:0 auto; padding:28px 20px;
        }
        .hero-logo{font-weight:700; font-size:20px; letter-spacing:.02em;}
        .hero-logo span{color:var(--purple);}
        .nav-right{display:flex; align-items:center; gap:48px;}
        .hero-nav-links{display:flex; gap:40px; font-family:'JetBrains Mono',monospace; font-size:13px; letter-spacing:.08em; color:var(--muted);}
        .hero-nav-links a{color:var(--muted); text-decoration:none; transition:color .2s;}
        .hero-nav-links a:hover{color:var(--text);}
        .contact-btn{
          font-family:'JetBrains Mono',monospace; font-size:12px; letter-spacing:.08em;
          border:1px solid var(--purple-soft); color:var(--text); text-decoration:none;
          padding:10px 18px; display:inline-flex; align-items:center; gap:8px;
          transition:border-color .2s, background .2s;
        }
        .contact-btn:hover{border-color:var(--purple); background:rgba(168,85,247,.08);}

        .hero-section{
          max-width:1520px; margin:0 auto; padding:24px 20px 32px;
          display:grid; grid-template-columns:1.15fr .85fr; align-items:start; gap:32px;
        }
        .eyebrow{
          display:flex; align-items:center; gap:14px;
          font-family:'JetBrains Mono',monospace; font-size:13px; letter-spacing:.1em;
          color:var(--purple); margin-bottom:28px;
        }
        .eyebrow .rule{width:32px; height:1px; background:var(--purple);}

        .headline{
          font-size:88px; line-height:.92; font-weight:700; letter-spacing:-.01em; margin:0;
        }
        .headline .line2{
          color:transparent; -webkit-text-stroke:1.5px #3a3a42;
        }

        .sub{
          margin-top:32px; max-width:440px; font-size:17px; line-height:1.6; color:var(--muted);
        }

        .cta-row{display:flex; gap:16px; margin-top:40px;}
        .btn{
          font-family:'JetBrains Mono',monospace; font-size:13px; letter-spacing:.06em;
          padding:16px 26px; display:inline-flex; align-items:center; gap:10px;
          text-decoration:none; border-radius:2px; transition:transform .15s, opacity .15s;
        }
        .btn-primary{background:var(--purple); color:#0a0a0d; font-weight:600; border:none;}
        .btn-primary:hover{opacity:.88;}
        .btn-secondary{border:1px solid #2a2a30; color:var(--text);}
        .btn-secondary:hover{border-color:var(--muted);}

        .hero-core{
          position:relative; display:flex; align-items:center; justify-content:center;
          aspect-ratio:1/1; margin-top:40px;
        }
        .hero-core svg{width:100%; max-width:420px; height:auto;}
        .core-status{
          position:absolute; bottom:8px; right:8px; text-align:right;
          font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.08em; color:var(--muted);
          line-height:1.8;
        }
        .core-status .online{color:var(--purple);}

        .links-section{
          max-width:1520px; margin:0 auto; padding:0 20px 96px;
        }
        .link-row{
          display:flex; align-items:center; gap:24px;
          padding:36px 0; border-top:1px solid var(--line);
          text-decoration:none; color:var(--text);
          transition:padding-left .2s;
        }
        .links-section .link-row:last-child{border-bottom:1px solid var(--line);}
        .link-row:hover{padding-left:12px;}
        .link-icon{
          width:48px; height:48px; border:1px solid #2a2a30; border-radius:2px;
          display:flex; align-items:center; justify-content:center; flex-shrink:0;
          color:var(--purple); transition:border-color .2s;
        }
        .link-row:hover .link-icon{border-color:var(--purple);}
        .link-icon svg{width:20px; height:20px;}
        .link-index{
          font-family:'JetBrains Mono',monospace; font-size:12px; letter-spacing:.1em;
          color:var(--purple); margin-bottom:6px;
        }
        .link-title{font-size:22px; font-weight:600; margin-bottom:4px;}
        .link-desc{font-size:14px; color:var(--muted);}

        @media (max-width:860px){
          .hero-section{grid-template-columns:1fr; padding-top:40px;}
          .headline{font-size:56px;}
          .hero-core{margin-top:48px; max-width:280px; justify-self:center;}
          .hero-nav{flex-wrap:wrap; gap:16px;}
          .hero-nav-links{gap:24px;}
        }
      `}</style>

      <div className="hero-page">
        <nav className="hero-nav">
          <div className="hero-logo">
            M<span>/</span>C
          </div>
          <div className="nav-right">
            <div className="hero-nav-links">
              <a href="#about">ABOUT</a>
              <a href="#work">WORK</a>
              <a href="#experience">EXPERIENCE</a>
            </div>
            <a className="contact-btn" href="#contact">
              CONTACT ↗
            </a>
          </div>
        </nav>

        <section className="hero-section">
          <div>
            <div className="eyebrow">
              <span className="rule" />
              AI/ML ENGINEER · CHENNAI, INDIA
            </div>
            <h1 className="headline">
              MOULITHA
              <br />
              <span className="line2">CHANDRASEKAR</span>
            </h1>
            <p className="sub">
              I engineer intelligent systems where generative AI, machine learning, and thoughtful software
              converge.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#work">
                EXPLORE MY WORK ↓
              </a>
              <a className="btn btn-secondary" href="#resume">
                RÉSUMÉ ⬇
              </a>
            </div>
          </div>

          <CoreGraphic />
        </section>

        <section className="links-section">
          {LINKS.map((link) => (
            <a className="link-row" key={link.title} href={link.href} target="_blank" rel="noopener noreferrer">
              <div className="link-icon">{link.icon}</div>
              <div>
                <div className="link-index">{link.index}</div>
                <div className="link-title">{link.title}</div>
                <div className="link-desc">{link.desc}</div>
              </div>
            </a>
          ))}
        </section>
      </div>
    </>
  );
}