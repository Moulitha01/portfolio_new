import React from "react";

const STATS = [
  { value: "8.5", label: "CGPA / 10" },
  { value: "03", label: "CERTIFICATIONS" },
  { value: "03", label: "LANGUAGES" },
];

export default function Experience() {
  return (
    <>
      <style>{`
        .experience{
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
        .experience *{box-sizing:border-box;}

        .exp-eyebrow{
          font-family:'JetBrains Mono',monospace; font-size:13px; letter-spacing:.1em;
          color:var(--purple); margin-bottom:20px;
        }
        .exp-heading{
          font-size:40px; line-height:1.15; font-weight:700; letter-spacing:-.01em; margin:0;
        }

        .exp-entry{
          border-left:1px solid var(--line);
          padding-left:28px;
        }
        .exp-top{
          display:flex; align-items:baseline; justify-content:space-between; gap:24px; flex-wrap:wrap;
        }
        .exp-role{
          font-size:26px; font-weight:700; letter-spacing:-.01em; margin:0;
        }
        .exp-dates{
          font-family:'JetBrains Mono',monospace; font-size:13px; letter-spacing:.05em; color:var(--muted);
          white-space:nowrap;
        }
        .exp-org{
          font-size:16px; color:var(--purple); margin-top:8px;
        }
        .exp-desc{
          margin-top:24px; font-size:16px; line-height:1.6; color:var(--muted); max-width:600px;
        }

        .stats-row{
          margin-top:48px; padding-top:40px; border-top:1px solid var(--line);
          display:flex; gap:80px; flex-wrap:wrap;
        }
        .stat-value{
          font-size:32px; font-weight:700; color:var(--purple); letter-spacing:-.01em;
        }
        .stat-label{
          margin-top:8px; font-family:'JetBrains Mono',monospace; font-size:12px;
          letter-spacing:.08em; color:var(--muted);
        }

        @media (max-width:860px){
          .experience{grid-template-columns:1fr; gap:32px;}
          .stats-row{gap:40px;}
        }
      `}</style>

      <section className="experience">
        <div>
          <div className="exp-eyebrow">03 / EXPERIENCE</div>
          <h2 className="exp-heading">Field tested.</h2>
        </div>

        <div>
          <div className="exp-entry">
            <div className="exp-top">
              <h3 className="exp-role">Machine Learning Intern</h3>
              <div className="exp-dates">DEC 2025 — JAN 2026</div>
            </div>
            <div className="exp-org">Defence Research and Development Organisation</div>
            <p className="exp-desc">
              Developed supervised learning models, shaped real-world datasets through feature engineering and
              exploratory analysis, and collaborated with researchers on defence-oriented AI applications.
            </p>
          </div>

          <div className="stats-row">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}