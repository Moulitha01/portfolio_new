import React from "react";

/**
 * LaptopCode — an open laptop with animated syntax-colored code lines on
 * the screen, floating gently. Replaces the circular core emblem in the
 * hero section.
 *
 * Usage: <LaptopCode size={380} />
 */
export default function LaptopCode({ size = 380, className = "" }) {
  const lines = [
    { x: 44, w: 70, color: "#c084fc" },
    { x: 44, w: 120, color: "#a855f7" },
    { x: 64, w: 90, color: "#e9d5ff" },
    { x: 64, w: 60, color: "#a855f7" },
    { x: 44, w: 50, color: "#c084fc" },
    { x: 44, w: 140, color: "#e9d5ff" },
    { x: 44, w: 95, color: "#a855f7" },
    { x: 64, w: 70, color: "#c084fc" },
  ];

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size * 0.72 }}>
      <style>{`
        @keyframes lap-float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes lap-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .lap-float { animation: lap-float 5s ease-in-out infinite; transform-origin: 50% 50%; }
        .lap-cursor { animation: lap-blink 1s step-end infinite; }
        @media (prefers-reduced-motion: reduce) {
          .lap-float, .lap-cursor { animation: none; }
        }
      `}</style>

      <div
        className="absolute inset-[-15%] rounded-full blur-2xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.28) 0%, rgba(124,58,237,0.12) 45%, transparent 70%)",
        }}
      />

      <svg viewBox="0 0 380 274" width={size} height={size * 0.72} role="img" aria-label="Laptop displaying code">
        <defs>
          <linearGradient id="lap-body" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#18181f" />
            <stop offset="100%" stopColor="#0b0b10" />
          </linearGradient>
          <linearGradient id="lap-base" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#232330" />
            <stop offset="100%" stopColor="#131318" />
          </linearGradient>
        </defs>

        <g className="lap-float">
          {/* screen */}
          <rect x="70" y="20" width="240" height="160" rx="12" fill="url(#lap-body)" stroke="#a855f7" strokeOpacity="0.4" strokeWidth="1.5" />
          <rect x="84" y="34" width="212" height="132" rx="4" fill="#050507" />

          {/* window controls */}
          <circle cx="98" cy="46" r="3" fill="#a855f7" fillOpacity="0.6" />
          <circle cx="110" cy="46" r="3" fill="#c084fc" fillOpacity="0.6" />
          <circle cx="122" cy="46" r="3" fill="#e9d5ff" fillOpacity="0.6" />

          {/* code lines */}
          {lines.map((line, i) => (
            <rect
              key={i}
              x={line.x}
              y={60 + i * 13}
              width={line.w}
              height="4"
              rx="2"
              fill={line.color}
              fillOpacity="0.85"
            />
          ))}
          <rect className="lap-cursor" x={44 + lines[lines.length - 1].w + 6} y={60 + (lines.length - 1) * 13} width="6" height="4" rx="1" fill="#f4f2fb" />

          {/* base / keyboard deck */}
          <path d="M50 180 L330 180 L352 210 L28 210 Z" fill="url(#lap-base)" stroke="#a855f7" strokeOpacity="0.25" strokeWidth="1" />
          <rect x="160" y="188" width="60" height="6" rx="3" fill="#050507" />

          {/* subtle keyboard hint texture */}
          <g opacity="0.25">
            {Array.from({ length: 10 }).map((_, i) => (
              <rect key={i} x={64 + i * 25} y="195" width="14" height="3" rx="1" fill="#a855f7" />
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
}