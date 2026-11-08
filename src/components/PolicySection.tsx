import type { ReactNode } from 'react'

interface PolicySectionProps {
  title: string
  children: ReactNode
}

/** A titled section inside a privacy policy page. */
export function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <div className="mt-3 space-y-3 break-words text-[0.95rem] leading-relaxed text-muted [&_a]:break-words [&_a]:font-medium [&_a]:text-accent [&_a]:transition-colors [&_a:hover]:text-accent-hover [&_code]:break-all [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  )
}
