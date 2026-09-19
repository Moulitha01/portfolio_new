import React from "react";
import { profile, socials } from "../data/portfolioData.js";
import LaptopCode from "./LaptopCode.jsx";
import { ArrowIcon, DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "./Icons.jsx";

export default function Hero() {
  return (
    <section id="top" className="relative border-b border-line">
      {/* top nav */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-lg tracking-tight">
          {profile.logo.split("/")[0]}
          <span className="text-accent">/{profile.logo.split("/")[1]}</span>
        </a>

        <nav className="hidden sm:flex items-center gap-10 font-mono-label text-xs text-white/70">
          <a href="#about" className="hover:text-accent-pale transition-colors">ABOUT</a>
          <a href="#work" className="hover:text-accent-pale transition-colors">WORK</a>
          <a href="#experience" className="hover:text-accent-pale transition-colors">EXPERIENCE</a>
        </nav>

        <div className="flex items-center gap-5">
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

            <div className="border-t border-line divide-y divide-line mt-10">
              <a href={socials.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 py-6 hover:bg-white/[0.02] transition-colors">
                <div className="w-12 h-12 shrink-0 border border-line rounded-lg flex items-center justify-center text-accent group-hover:border-accent-soft transition-colors">
                  <GithubIcon />
                </div>
                <div>
                  <p className="font-mono-label text-[11px] text-accent-soft mb-1">01 // LINK</p>
                  <p className="font-display font-semibold text-base">GITHUB</p>
                  <p className="text-white/45 text-sm">View repositories</p>
                </div>
              </a>

              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 py-6 hover:bg-white/[0.02] transition-colors">
                <div className="w-12 h-12 shrink-0 border border-line rounded-lg flex items-center justify-center text-accent group-hover:border-accent-soft transition-colors">
                  <LinkedinIcon />
                </div>
                <div>
                  <p className="font-mono-label text-[11px] text-accent-soft mb-1">02 // LINK</p>
                  <p className="font-display font-semibold text-base">LINKEDIN</p>
                  <p className="text-white/45 text-sm">Connect professionally</p>
                </div>
              </a>

              <a href={`mailto:${socials.email}`} className="group flex items-center gap-5 py-6 hover:bg-white/[0.02] transition-colors">
                <div className="w-12 h-12 shrink-0 border border-line rounded-lg flex items-center justify-center text-accent group-hover:border-accent-soft transition-colors">
                  <MailIcon />
                </div>
                <div>
                  <p className="font-mono-label text-[11px] text-accent-soft mb-1">03 // LINK</p>
                  <p className="font-display font-semibold text-base">EMAIL</p>
                  <p className="text-white/45 text-sm">Start a conversation</p>
                </div>
              </a>
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