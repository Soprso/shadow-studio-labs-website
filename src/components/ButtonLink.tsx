import type { ReactNode } from 'react'
import { Link } from 'react-router'

type Variant = 'primary' | 'secondary'

const styles: Record<Variant, string> = {
  primary:
    'inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-canvas shadow-[0_8px_30px_-12px_rgba(255,255,255,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_36px_-12px_rgba(255,255,255,0.45)]',
  secondary:
    'inline-flex items-center justify-center gap-2 rounded-lg border border-line-strong bg-white/[0.03] px-5 py-3 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07]',
}

interface ButtonLinkProps {
  /** Internal route, or an anchor (#...) / external (http...) URL */
  to: string
  variant?: Variant
  children: ReactNode
  className?: string
}

/**
 * A link styled as a button. Renders a plain <a> for anchor (#) and
 * external (http) targets, and a router <Link> otherwise.
 */
export function ButtonLink({ to, variant = 'primary', children, className = '' }: ButtonLinkProps) {
  const isAnchorOrExternal =
    to.startsWith('#') || to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:')

  if (isAnchorOrExternal) {
    const external = to.startsWith('http')
    return (
      <a
        href={to}
        className={`${styles[variant]} ${className}`}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={`${styles[variant]} ${className}`}>
      {children}
    </Link>
  )
}
