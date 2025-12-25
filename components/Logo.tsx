
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 400 240" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-auto ${className}`}
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <style>{`
        .logo-text { 
          font-family: 'Inter', sans-serif; 
          font-weight: 900; 
          text-transform: uppercase;
          letter-spacing: -0.07em;
        }
        .glow-studio {
          filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.2));
        }
      `}</style>
    </defs>
    
    {/* DONT */}
    <text x="50%" y="60" textAnchor="middle" className="logo-text" fontSize="78" fill="#FFFFFF">DONT</text>
    
    {/* ASK */}
    <text x="50%" y="130" textAnchor="middle" className="logo-text" fontSize="96" fill="#6366F1">ASK</text>
    
    {/* STUDIO */}
    <g transform="translate(200, 208)" className="glow-studio">
      <text textAnchor="middle" className="logo-text" fontSize="92" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeOpacity="0.95">
        STU<tspan fill="#FFFFFF" stroke="none">D</tspan>IO
      </text>
    </g>
  </svg>
);

export default Logo;
