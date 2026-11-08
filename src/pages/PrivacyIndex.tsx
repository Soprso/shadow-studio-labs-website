import { Link } from 'react-router'
import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'
import { ChevronRight } from '../components/Icons'
import { Seo } from '../components/Seo'
import { apps } from '../data/apps'

export function PrivacyIndex() {
  const policies = apps.filter((app) => app.privacyPath)

  return (
    <>
      <Seo
        title="Privacy Policies — Shadow Studio Labs"
        description="Privacy information for applications published by Shadow Studio Labs."
      />
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-18rem] h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(139,125,255,0.1),transparent)] blur-3xl"
        />
        <Container className="relative max-w-3xl">
          <PageHeader
            eyebrow="Transparency"
            title="Privacy policies"
            subtitle="Privacy information for the applications and services published by Shadow Studio Labs."
          />

          <ul className="mt-12 divide-y divide-white/[0.06] overflow-hidden rounded-2xl border border-white/[0.08] bg-surface">
            {policies.map((app) => (
              <li key={app.slug}>
                <Link
                  to={app.privacyPath}
                  className="group flex items-center gap-4 px-5 py-5 transition-colors hover:bg-white/[0.03] sm:px-6"
                >
                  {app.icon ? (
                    <img
                      src={app.icon}
                      alt=""
                      width={44}
                      height={44}
                      className="size-11 shrink-0 rounded-xl border border-white/10"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] font-semibold text-accent"
                    >
                      {app.name.charAt(0)}
                    </span>
                  )}
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium text-ink">{app.name}</span>
                    <span className="mt-0.5 block text-sm text-faint">Privacy Policy</span>
                  </span>
                  <ChevronRight className="size-5 shrink-0 text-faint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-ink" />
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-center text-xs text-faint">
            Each policy explains what an app stores locally, which third-party services it uses and
            how to contact the studio.
          </p>
        </Container>
      </section>
    </>
  )
}
