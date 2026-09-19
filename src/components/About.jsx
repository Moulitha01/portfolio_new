import React from "react";
import { profile, skills } from "../data/portfolioData.js";
import { iconMap } from "./Icons.jsx";

export default function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <p className="font-mono-label text-xs text-accent mb-4">01 / PROFILE</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl">
              {profile.aboutHeading}
            </h2>
          </div>

          <p className="text-white/60 text-base sm:text-lg md:pt-9">
            {profile.aboutText}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <div
                key={skill.title}
                className="h-full border border-line rounded-lg p-6 transition-colors hover:bg-[#0b1230] hover:border-accent-soft/40"
              >
                <Icon className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-display font-semibold text-xl mb-1">{skill.title}</h3>
                <p className="text-white/45 text-sm">{skill.items}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}