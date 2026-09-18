import React from "react";

const PROJECTS = [
  {
    index: "01",
    name: "NeuralForge",
    subtitle: "MULTI-AGENT AI CODE GENERATOR",
    description:
      "A multi-agent platform that translates natural language into production-ready software through specialized Planner, Designer, Generator, and Tester agents.",
    tags: ["LANGCHAIN", "GEMINI", "FASTAPI", "REACT"],
    href: "#",
  },
  {
    index: "02",
    name: "Scheme-Sathi",
    subtitle: "AI WELFARE ELIGIBILITY ASSISTANT",
    description:
      "A multilingual recommendation system using OCR and retrieval-augmented generation to match people with relevant government welfare schemes.",
    tags: ["RAG", "OCR", "MONGODB", "NODE.JS"],
    href: "#",
  },
];

export default function Projects() {
  return (
    <>
      <style>{`
        .projects{
          --bg:#0a0a0d;
          --line:#1e1e24;
          --text:#f5f5f7;
          --muted:#8a8a93;
          --purple:#a855f7;
          background:var(--bg);
          color:var(--text);
          font-family:'Space Grotesk',sans-serif;
          max-width:1520px; margin:0 auto; padding:80px 20px 120px;
        }
        .projects *{box-sizing:border-box;}

        .projects-head{
          display:flex; align-items:flex-end; justify-content:space-between;
          gap:24px; margin-bottom:40px;
        }
        .projects-eyebrow{
          font-family:'JetBrains Mono',monospace; font-size:13px; letter-spacing:.1em;
          color:var(--purple); margin-bottom:20px;
        }
        .projects-heading{
          font-size:48px; line-height:1; font-weight:700; letter-spacing:-.01em; margin:0;
        }
        .all-projects{
          font-family:'JetBrains Mono',monospace; font-size:13px; letter-spacing:.08em;
          color:var(--muted); text-decoration:none; white-space:nowrap;
          display:inline-flex; align-items:center; gap:8px;
          transition:color .2s;
        }
        .all-projects:hover{color:var(--text);}

        .project-list{border-top:1px solid var(--line);}
        .project-row{
          display:grid;
          grid-template-columns:60px 1fr 1.05fr 56px;
          align-items:center; gap:32px;
          padding:44px 0;
          border-bottom:1px solid var(--line);
          text-decoration:none; color:var(--text);
        }
        .project-index{
          font-family:'JetBrains Mono',monospace; font-size:13px; color:var(--purple);
        }
        .project-name{
          font-size:32px; font-weight:700; letter-spacing:-.01em; margin-bottom:8px;
        }
        .project-subtitle{
          font-family:'JetBrains Mono',monospace; font-size:12px; letter-spacing:.06em;
          color:var(--purple);
        }
        .project-desc{
          font-size:16px; line-height:1.6; color:var(--muted); margin-bottom:20px; max-width:520px;
        }
        .project-tags{display:flex; flex-wrap:wrap; gap:10px;}
        .project-tag{
          font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.06em;
          border:1px solid #2a2a30; color:var(--muted);
          padding:8px 12px;
        }
        .project-link{
          width:48px; height:48px; border:1px solid #2a2a30; border-radius:2px;
          display:flex; align-items:center; justify-content:center;
          color:var(--text); transition:border-color .2s, background .2s;
          justify-self:end;
        }
        .project-row:hover .project-link{border-color:var(--purple); background:rgba(168,85,247,.08);}
        .project-link svg{width:18px; height:18px;}

        @media (max-width:860px){
          .projects-head{flex-direction:column; align-items:flex-start; gap:16px;}
          .projects-heading{font-size:36px;}
          .project-row{
            grid-template-columns:1fr; gap:16px; padding:32px 0;
          }
          .project-link{justify-self:start;}
        }
      `}</style>

      <section className="projects">
        <div className="projects-head">
          <div>
            <div className="projects-eyebrow">02 / SELECTED SYSTEMS</div>
            <h2 className="projects-heading">Work that thinks.</h2>
          </div>
          <a className="all-projects" href="#work">
            ALL PROJECTS ↗
          </a>
        </div>

        <div className="project-list">
          {PROJECTS.map((project) => (
            <a className="project-row" href={project.href} key={project.name}>
              <div className="project-index">{project.index}</div>

              <div>
                <div className="project-name">{project.name}</div>
                <div className="project-subtitle">{project.subtitle}</div>
              </div>

              <div>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}