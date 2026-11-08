import { PlayStore } from './Icons'

interface StoreButtonProps {
  href: string
  /** App name used for the accessible label. */
  appName: string
  className?: string
}

/** Prominent Google Play call-to-action linking to the real store listing. */
export function StoreButton({ href, appName, className = '' }: StoreButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Get ${appName} on Google Play`}
      className={`group inline-flex items-center gap-3 rounded-xl bg-ink px-5 py-3 text-canvas shadow-[0_10px_40px_-12px_rgba(255,255,255,0.3)] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_16px_50px_-12px_rgba(255,255,255,0.45)] focus-visible:outline-accent ${className}`}
    >
      <PlayStore className="size-6 shrink-0" />
      <span className="flex flex-col items-start leading-none">
        <span className="text-[0.55rem] font-medium uppercase tracking-[0.18em] text-black/55">
          Get it on
        </span>
        <span className="mt-1 text-[0.95rem] font-semibold tracking-tight text-black">
          Google Play
        </span>
      </span>
    </a>
  )
}
