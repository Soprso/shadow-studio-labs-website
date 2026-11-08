import { Link, useParams } from 'react-router'
import { Container } from '../components/Container'
import { Seo } from '../components/Seo'
import { StoreButton } from '../components/StoreButton'
import { Check, ChevronRight, PlayStore } from '../components/Icons'
import { getApp } from '../data/apps'
import { site } from '../data/site'

function AppArtwork({ app }: { app: NonNullable<ReturnType<typeof getApp>> }) {
  if (app.screenshot && app.banner) {
    return (
      <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0f] px-6 py-10">
        <img
          src={app.banner}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-20 blur-2xl"
          loading="lazy"
          decoding="async"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 45%, ${app.accent ?? '#8b7dff'}2e, transparent 62%)`,
          }}
        />
        <div className="relative w-full max-w-[240px]">
          <div className="rounded-[2.5rem] border border-white/15 bg-[#07070b] p-2 shadow-[0_40px_100px_-30px_rgba(0,0,0,1)]">
            <div className="overflow-hidden rounded-[2rem] border border-white/5">
              <img
                src={app.screenshot}
                alt={`${app.name} app preview`}
                className="aspect-[9/19] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          {app.icon && (
            <img
              src={app.icon}
              alt=""
              width={56}
              height={56}
              className="absolute -right-5 top-10 size-14 rounded-2xl border border-white/10 shadow-xl"
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
      </div>
    )
  }

  if (!app.banner) return null

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0f] p-6 sm:p-8">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, ${app.accent ?? '#8b7dff'}22, transparent 60%)`,
        }}
      />
      <div className="relative">
        <img
          src={app.banner}
          alt={`${app.name} promotional artwork`}
          width={1024}
          height={500}
          className="aspect-[1024/500] w-full rounded-xl border border-white/10 object-cover shadow-2xl"
          loading="lazy"
          decoding="async"
        />
        {app.icon && (
          <img
            src={app.icon}
            alt=""
            width={64}
            height={64}
            className="absolute -bottom-8 left-5 size-16 rounded-2xl border border-white/15 shadow-xl"
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
    </div>
  )
}

export function AppDetail() {
  const { slug } = useParams<{ slug: string }>()
  const app = slug ? getApp(slug) : undefined

  if (!app) {
    return (
      <>
        <Seo title={`App not found — ${site.name}`} />
        <Container className="py-24 text-center">
          <p className="eyebrow justify-center">404</p>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight">App not found</h1>
          <p className="mt-2 text-muted">We couldn&apos;t find that app.</p>
          <Link
            to="/apps"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-canvas transition-colors hover:bg-white"
          >
            Back to Apps
          </Link>
        </Container>
      </>
    )
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.name,
    description: app.description,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: app.platform,
    url: `${site.siteUrl}/apps/${app.slug}`,
    ...(app.playStoreUrl ? { installUrl: app.playStoreUrl } : {}),
  }

  return (
    <>
      <Seo
        title={`${app.name} — ${site.name}`}
        description={app.shortDescription}
        canonicalPath={`/apps/${app.slug}`}
        jsonLd={jsonLd}
      />

      <section className="relative overflow-hidden py-12 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-20rem] h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(139,125,255,0.1),transparent)] blur-3xl"
        />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="text-sm text-faint">
            <Link to="/apps" className="transition-colors hover:text-ink">
              Apps
            </Link>
            <span aria-hidden="true" className="mx-2">
              /
            </span>
            <span className="text-muted">{app.name}</span>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                {app.releaseStage === 'published' ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-success/20 bg-success/10 px-3 py-1 text-[0.7rem] font-medium text-success">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-success" />
                    Available on Google Play
                  </span>
                ) : app.releaseStage === 'upcoming' ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-warning/20 bg-warning/10 px-3 py-1 text-[0.7rem] font-medium text-warning">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-warning" />
                    In development
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/[0.04] px-3 py-1 text-[0.7rem] font-medium text-muted">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-faint" />
                    Lab project
                  </span>
                )}
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-faint">
                  {app.platform}
                </span>
              </div>

              <div className="mt-6 flex items-center gap-4">
                {app.icon && (
                  <img
                    src={app.icon}
                    alt=""
                    width={64}
                    height={64}
                    className="size-16 rounded-2xl border border-white/10 shadow-lg"
                    decoding="async"
                  />
                )}
                <h1 className="text-[2.4rem] font-semibold leading-none tracking-[-0.04em] sm:text-5xl">
                  {app.name}
                </h1>
              </div>

              <p className="mt-5 text-lg leading-relaxed text-ink/75">{app.tagline}</p>
              <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
                {app.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {app.playStoreUrl ? (
                  <StoreButton href={app.playStoreUrl} appName={app.name} />
                ) : app.releaseStage === 'lab' ? (
                  <span className="inline-flex items-center gap-2 rounded-lg border border-line-strong bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-muted">
                    Experimental project
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-lg border border-warning/20 bg-warning/[0.07] px-4 py-2.5 text-sm font-medium text-warning">
                    Coming to Google Play
                  </span>
                )}
                <Link
                  to={app.privacyPath}
                  className="inline-flex items-center justify-center rounded-lg border border-line-strong bg-white/[0.03] px-5 py-3 text-sm font-semibold text-ink transition duration-300 hover:border-white/25 hover:bg-white/[0.07]"
                >
                  Privacy policy
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-3 text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  Contact the studio
                </Link>
              </div>
            </div>

            <AppArtwork app={app} />
          </div>
        </Container>
      </section>

      <section className="border-t border-white/[0.06] py-16 sm:py-20">
        <Container className="max-w-4xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true" className="h-px w-6 bg-accent/70" />
                Feature overview
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                What&apos;s inside {app.name}
              </h2>
            </div>
            {app.playStoreUrl && (
              <a
                href={app.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-4 py-2 text-sm text-muted transition-colors hover:border-white/25 hover:text-ink"
              >
                <PlayStore className="size-4" />
                View on Google Play
              </a>
            )}
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {app.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-surface p-4 text-sm leading-relaxed text-muted"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-center justify-between gap-4 border-t border-white/[0.06] pt-6">
            <Link
              to="/apps"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
            >
              <ChevronRight className="size-4 rotate-180" />
              Back to all projects
            </Link>
            <Link
              to="/apps"
              className="text-sm text-faint transition-colors hover:text-ink"
            >
              {site.name}
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
