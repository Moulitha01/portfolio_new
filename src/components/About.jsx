import React from "react";

const SKILLS = [
  {
    title: "AI / ML",
    tags: "Machine Learning · Deep Learning · GenAI · LLMs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-2 2.8V12a3 3 0 0 0 1 2.24V16a3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-2-3z" />
        <path d="M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 2 2.8V12a3 3 0 0 1-1 2.24V16a3 3 0 0 1-3 3 3 3 0 0 1-3-3V6a3 3 0 0 1 2-3z" />
      </svg>
    ),
  },
  {
    title: "Intelligence",
    tags: "LangChain · RAG · FAISS · OCR · OpenCV",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
        <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
      </svg>
    ),
  },
  {
    title: "Engineering",
    tags: "Python · JavaScript · React · FastAPI · Node.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 6 3 12l6 6M15 6l6 6-6 6" />
      </svg>
    ),
  },
  {
    title: "Data",
    tags: "PyTorch · Scikit-learn · MongoDB · PaddleOCR",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <ellipse cx="12" cy="5.5" rx="7" ry="2.8" />
        <path d="M5 5.5V12c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8V5.5" />
        <path d="M5 12v6.5c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8V12" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <>
      <style>{`
        .profile{
          --bg:#0a0a0d;
          --line:#1e1e24;
          --text:#f5f5f7;
          --muted:#8a8a93;
          --purple:#a855f7;
          background:var(--bg);
          color:var(--text);
          font-family:'Space Grotesk',sans-serif;
          max-width:1520px; margin:0 auto; padding:80px 20px 120px;
          display:grid; grid-template-columns:.62fr 1fr; gap:60px;
        }
        .profile *{box-sizing:border-box;}
        .profile-eyebrow{
          font-family:'JetBrains Mono',monospace; font-size:13px; letter-spacing:.1em;
          color:var(--purple); margin-bottom:20px;
        }
        .profile-heading{
          font-size:40px; line-height:1.15; font-weight:700; letter-spacing:-.01em; margin:0;
        }
        .profile-intro{
          font-size:20px; line-height:1.5; color:#d4d4d8; margin:0;
        }
        .skills-grid{
          margin-top:48px;
          display:grid; grid-template-columns:1fr 1fr;
          border-top:1px solid var(--line);
        }
        .skill{
          padding:32px 40px;
          border-bottom:1px solid var(--line);
          transition:background-color .2s ease;
        }
        .skill:nth-child(odd){border-right:1px solid var(--line);}
        .skill:nth-child(1),.skill:nth-child(2){padding-top:36px;}
        .skill:nth-last-child(-n+2){border-bottom:none; padding-bottom:36px;}
        .skill:hover{background-color:rgba(168,85,247,.09);}
        .skill-icon{color:var(--purple); margin-bottom:28px;}
        .skill-icon svg{width:22px; height:22px;}
        .skill-title{font-size:19px; font-weight:600; margin-bottom:10px;}
        .skill-tags{font-size:14px; color:var(--muted);}

        @media (max-width:860px){
          .profile{grid-template-columns:1fr; gap:32px;}
          .skills-grid{grid-template-columns:1fr;}
          .skill:nth-child(odd){border-right:none;}
          .skill{padding:28px 0;}
        }
      `}</style>

      <section className="profile">
        <div>
          <div className="profile-eyebrow">01 / PROFILE</div>
          <h2 className="profile-heading">Building intelligence with intent.</h2>
        </div>

        <div>
          <p className="profile-intro">
            Computer Science Engineering student and AI/ML developer focused on practical systems that turn
            complex models into useful, accessible products.
          </p>

          <div className="skills-grid">
            {SKILLS.map((skill) => (
              <div className="skill" key={skill.title}>
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-title">{skill.title}</div>
                <div className="skill-tags">{skill.tags}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}