export function Monogram({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} className={className} aria-hidden>
      <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
      <circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.25" />
      <text
        x="32" y="40"
        textAnchor="middle"
        fontFamily="Fraunces, serif"
        fontSize="22"
        fontStyle="italic"
        fill="currentColor"
      >
        L<tspan fill="var(--gold)">&amp;</tspan>S
      </text>
    </svg>
  );
}

export function WaveDivider({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 12" className={className} preserveAspectRatio="none" aria-hidden>
      <path
        d="M0 6 Q 25 0 50 6 T 100 6 T 150 6 T 200 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.5"
      />
    </svg>
  );
}

export function LavaBlob({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden>
      <defs>
        <radialGradient id="lava-g" cx="35%" cy="35%">
          <stop offset="0%" stopColor="oklch(0.78 0.13 65)" stopOpacity="0.9" />
          <stop offset="60%" stopColor="oklch(0.42 0.04 50)" stopOpacity="0.95" />
          <stop offset="100%" stopColor="oklch(0.18 0.012 55)" stopOpacity="1" />
        </radialGradient>
      </defs>
      <path
        fill="url(#lava-g)"
        d="M210 30 C 290 40 360 90 365 175 C 370 250 320 320 245 350 C 175 378 90 360 50 295 C 10 230 25 140 80 85 C 120 45 165 25 210 30 Z"
      />
    </svg>
  );
}
