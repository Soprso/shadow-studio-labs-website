interface BrandMarkProps {
  className?: string
}

/** The studio monogram, shared by the navbar, footer and mobile menu. */
export function BrandMark({ className = 'size-9' }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`shrink-0 ${className}`}
      role="img"
      aria-label="Shadow Studio Labs"
    >
      <defs>
        <linearGradient id="brand-mark-bg" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1b1929" />
          <stop offset="1" stopColor="#0a0a10" />
        </linearGradient>
        <linearGradient id="brand-mark-ink" x1="22" y1="16" x2="43" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#a89cff" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="15" fill="url(#brand-mark-bg)" />
      <rect
        x="0.75"
        y="0.75"
        width="62.5"
        height="62.5"
        rx="14.25"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.14"
        strokeWidth="1.5"
      />
      <path
        d="M42.5 21.5c-2.7-2.3-6.1-3.5-10.1-3.5-7.4 0-12.4 3.8-12.4 9.4 0 5.3 4.1 7.7 10.9 9.3 5.3 1.3 7.1 2.2 7.1 4.5 0 2.4-2.2 4-5.8 4-3.6 0-6.9-1.4-9.4-3.9l-3.3 4.4c3.1 3.1 7.4 4.8 12.6 4.8 7.9 0 13.2-4 13.2-9.9 0-5.4-4-7.7-11-9.4-5.2-1.3-6.9-2.1-6.9-4.3 0-2.1 2-3.5 5.2-3.5 3 0 5.7 1 7.8 2.8l2.1-4.7Z"
        fill="url(#brand-mark-ink)"
      />
    </svg>
  )
}
