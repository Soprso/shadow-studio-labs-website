import type { ReactNode } from 'react'
import { ContactSection } from './ContactSection'

interface PolicyLayoutProps {
  appName: string
  lastUpdated: string
  children: ReactNode
}

/**
 * Shared layout for privacy policy pages: comfortable reading width
 * (approx. 720px on desktop), page header and a contact section.
 */
export function PolicyLayout({ appName, lastUpdated, children }: PolicyLayoutProps) {
  return (
    <div className="mx-auto w-full max-w-[45rem] px-5 sm:px-6 lg:px-8">
      <div className="py-12 sm:py-16">
        <p className="eyebrow">
          <span aria-hidden="true" className="h-px w-6 bg-accent/70" />
          Privacy Policy
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{appName}</h1>
        <p className="mt-3 text-sm text-faint">Last updated: {lastUpdated}</p>
        <div className="mt-10 space-y-9">{children}</div>
        <div className="mt-12 border-t border-white/[0.08] pt-9">
          <ContactSection />
        </div>
      </div>
    </div>
  )
}
