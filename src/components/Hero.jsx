import React from "react";
import { profile, socials } from "../data/portfolioData.js";
import LaptopCode from "./LaptopCode.jsx";
import { ArrowIcon, DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "./Icons.jsx";

export default function Hero() {
  const quickLinks = [
    {
      id: "01",
      title: "GITHUB",
      subtitle: "View repositories",
      href: socials.github,
      external: true,
      Icon: GithubIcon,
    },
    {
      id: "02",
      title: "LINKEDIN",
      subtitle: "Connect professionally",
      href: socials.linkedin,
      external: true,
      Icon: LinkedinIcon,
    },
    {
      id: "03",
      title: "EMAIL",
      subtitle: "Start a conversation",
      href: `mailto:${socials.email}`,
      external: false,
      Icon: MailIcon,
    },
  ];

  return (
    <section id="top" className="relative grid-bg border-b border-line">
      {/* top nav */}
      <div className="w-full px-4 py-6 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-lg tracking-tight">
          {profile.logo.split("/")[0]}
          <span className="text-accent">/{profile.logo.split("/")[1]}</span>
        </a>

        <div className="flex items-center gap-10">
          <nav className="hidden sm:flex items-center gap-10 font-mono-label text-xs text-accent-soft">
            <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
            <a href="#work" className="hover:text-white transition-colors">WORK</a>
            <a href="#experience" className="hover:text-white transition-colors">EXPERIENCE</a>
          </nav>

          <div className="hidden sm:flex items-center gap-4 text-accent-soft">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent-pale transition-colors">
              <GithubIcon />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent-pale transition-colors">
              <LinkedinIcon />
            </a>
            <a href={`mailto:${socials.email}`} aria-label="Email" className="hover:text-accent-pale transition-colors">
              <MailIcon />
            </a>
          </div>

          <a href="#contact" className="inline-flex items-center gap-1.5 font-mono-label text-xs px-4 py-2 border border-accent text-accent-pale rounded-full hover:bg-accent/10 transition-colors">
            CONTACT <ArrowIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* hero content */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* left: name + intro */}
          <div className="text-left">
            <div className="flex items-center gap-3 font-mono-label text-xs text-accent-soft mb-6">
              <span className="w-8 h-px bg-accent-soft/60" />
              {profile.role} · {profile.location}
            </div>

            <h1 className="font-heavy leading-[0.95] tracking-tight">
              <span className="block text-6xl sm:text-7xl">{profile.name.toUpperCase()}</span>
              <span className="block text-6xl sm:text-7xl ghost-text">
                {profile.surname.toUpperCase()}
              </span>
            </h1>

            <p className="max-w-md mt-6 text-white/60 text-base">
              I engineer intelligent systems where generative AI, machine learning, and
              thoughtful software converge.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-8">
              <a href="#work" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-soft transition-colors text-ink font-mono-label text-xs font-bold px-6 py-3 rounded-full">
                EXPLORE MY WORK ↓
              </a>
              <a href={socials.resumeUrl} download className="inline-flex items-center gap-2 border border-line hover:border-accent-soft transition-colors font-mono-label text-xs font-bold px-6 py-3 rounded-full">
                RÉSUMÉ <DownloadIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* link boxes: solid black cards, separated by a gap */}
            <div className="flex flex-col gap-3 mt-10">
              {quickLinks.map(({ id, title, subtitle, href, external, Icon }) => (
                <a
                  key={id}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-5 px-5 py-5 bg-black border border-line rounded-xl hover:border-accent-soft transition-colors"
                >
                  <div className="w-12 h-12 shrink-0 border border-line rounded-lg bg-black flex items-center justify-center text-accent group-hover:border-accent-soft transition-colors">
                    <Icon />
                  </div>
                  <div>
                    <p className="font-mono-label text-[11px] text-accent-soft mb-1">{id} // LINK</p>
                    <p className="font-display font-semibold text-base">{title}</p>
                    <p className="text-white/45 text-sm">{subtitle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* right: laptop with code */}
          <div className="flex items-center justify-center md:justify-end">
            <LaptopCode size={380} />
          </div>
        </div>
      </div>

      {/* bottom-right corner tag */}
      <div className="absolute right-6 bottom-6 flex items-center gap-2 font-mono-label text-[11px] text-accent-soft/80 text-right">
        <span>
          BUILDING IN PUBLIC
          <br />
          SCROLL TO EXPLORE
        </span>
        <span className="w-px h-8 bg-accent-soft/40" />
      </div>
    </section>
  );
}