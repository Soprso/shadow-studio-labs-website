import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

/** Shared eyebrow + headline + supporting copy used by the marketing sections. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      <p className={`eyebrow ${centered ? 'justify-center' : ''}`}>
        <span aria-hidden="true" className="h-px w-8 bg-accent/70" />
        {eyebrow}
      </p>
      <h2 className="mt-5 text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[2.6rem] lg:text-[3rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      )}
    </div>
  )
}
