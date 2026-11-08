import { Link } from 'react-router'
import { site } from '../data/site'
import { ArrowRight, Check, Mail } from './Icons'

const projectTypes = [
  'Website development',
  'Mobile application development',
  'Custom software projects',
  'Business collaborations',
]

/** Reusable contact panel used on the home page and the contact page. */
export function ContactCta() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-32 size-[28rem] rounded-full bg-[radial-gradient(closest-side,rgba(139,125,255,0.18),transparent)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 size-[26rem] rounded-full bg-[radial-gradient(closest-side,rgba(103,199,216,0.09),transparent)] blur-2xl"
      />

      <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:p-14">
        <div>
          <p className="eyebrow">
            <span aria-hidden="true" className="h-px w-8 bg-accent/70" />
            Start a project
          </p>
          <h2 className="mt-5 max-w-xl text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[2.6rem]">
            Have an idea worth building?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Whether you are shaping a new product, modernising an existing one or exploring a custom
            software idea, we would like to hear about it.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${site.email}?subject=Project%20enquiry%20%E2%80%94%20Shadow%20Studio%20Labs`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-canvas transition duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              <Mail className="size-4" />
              Email the studio
            </a>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-line-strong bg-white/[0.03] px-5 py-3 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07]"
            >
              Contact page
              <ArrowRight className="size-4 text-faint transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-faint">
            Tell us what you have in mind, who it is for and where you are in the process. A short
            note is more than enough to start.
          </p>
        </div>

        <div className="rounded-2xl border border-white/[0.07] bg-canvas/55 p-6 sm:p-7">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-faint">
            What we can help with
          </p>
          <ul className="mt-5 space-y-3">
            {projectTypes.map((type) => (
              <li key={type} className="flex items-start gap-2.5 text-sm text-muted">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                {type}
              </li>
            ))}
          </ul>
          <div className="mt-7 border-t border-white/[0.07] pt-5">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-faint">
              Email
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block break-all text-sm font-medium text-ink transition-colors hover:text-accent-hover"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
