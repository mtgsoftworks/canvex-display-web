export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="100" height="100" rx="24" fill="#181820" />
      
      {/* Monitor Glow */}
      <path 
        d="M 78 32 V 26 C 78 21.582 74.418 18 70 18 H 22 C 17.582 18 14 21.582 14 26 V 62 C 14 66.418 17.582 70 22 70 H 60" 
        stroke="url(#monitor-grad)" 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        opacity="0.5"
        style={{ filter: 'blur(3px)' }}
      />
      {/* Monitor */}
      <path 
        d="M 78 32 V 26 C 78 21.582 74.418 18 70 18 H 22 C 17.582 18 14 21.582 14 26 V 62 C 14 66.418 17.582 70 22 70 H 60" 
        stroke="url(#monitor-grad)" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Phone Glow */}
      <rect 
        x="62" y="34" width="26" height="46" rx="6" 
        stroke="#8AB4F8" 
        strokeWidth="6"
        fill="none"
        opacity="0.5"
        style={{ filter: 'blur(3px)' }}
      />
      {/* Phone */}
      <rect 
        x="62" y="34" width="26" height="46" rx="6" 
        stroke="#8AB4F8" 
        strokeWidth="2.5"
        fill="#181820"
      />
      
      {/* Phone Home Indicator Glow */}
      <line x1="70" y1="74" x2="80" y2="74" stroke="#8AB4F8" strokeWidth="4" strokeLinecap="round" opacity="0.5" style={{ filter: 'blur(2px)' }} />
      {/* Phone Home Indicator */}
      <line x1="70" y1="74" x2="80" y2="74" stroke="#8AB4F8" strokeWidth="2.5" strokeLinecap="round" />

      <defs>
        <linearGradient id="monitor-grad" x1="14" y1="44" x2="78" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#20D4B5" />
          <stop offset="1" stopColor="#4A90E2" />
        </linearGradient>
      </defs>
    </svg>
  );
}
