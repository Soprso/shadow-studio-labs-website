import { Link } from 'react-router'
import type { AppInfo } from '../data/apps'
import { StoreButton } from './StoreButton'
import { ArrowRight, Check, PlayStore } from './Icons'

interface ProductShowcaseProps {
  app: AppInfo
  reverse?: boolean
}

function StageBadge({ stage }: { stage: AppInfo['releaseStage'] }) {
  if (stage === 'published') {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-success/20 bg-success/10 px-3 py-1 text-[0.7rem] font-medium text-success">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-success" />
        Live on Google Play
      </span>
    )
  }

  if (stage === 'upcoming') {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-warning/20 bg-warning/10 px-3 py-1 text-[0.7rem] font-medium text-warning">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-warning" />
        In development
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/[0.04] px-3 py-1 text-[0.7rem] font-medium text-muted">
      <span aria-hidden="true" className="size-1.5 rounded-full bg-faint" />
      Lab project
    </span>
  )
}

function ProductVisual({ app }: { app: AppInfo }) {
  const accent = app.accent ?? '#8b7dff'

  if (app.screenshot && app.banner) {
    return (
      <div
        className="relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 px-4 py-8 sm:min-h-[420px]"
        style={{ backgroundColor: '#0a0a0f' }}
      >
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
            backgroundImage: `radial-gradient(circle at 50% 45%, ${accent}26, transparent 62%)`,
          }}
        />
        <div className="relative w-full max-w-[228px]">
          <div className="rounded-[2.4rem] border border-white/15 bg-[#07070b] p-2 shadow-[0_40px_100px_-30px_rgba(0,0,0,1)]">
            <div className="overflow-hidden rounded-[1.9rem] border border-white/5">
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
            <div className="absolute -right-5 top-8 rounded-2xl border border-white/10 bg-canvas/90 p-2 shadow-xl backdrop-blur">
              <img
                src={app.icon}
                alt=""
                width={48}
                height={48}
                className="size-12 rounded-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
          <div className="absolute -left-4 bottom-10 rounded-full border border-white/10 bg-canvas/85 px-3 py-1.5 text-[0.65rem] font-medium text-muted shadow-lg backdrop-blur">
            Android
          </div>
        </div>
      </div>
    )
  }

  if (!app.banner) return null

  return (
    <div
      className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 p-6 sm:min-h-[420px] sm:p-10"
      style={{
        backgroundColor: '#0a0a0f',
        backgroundImage: `radial-gradient(circle at 30% 25%, ${accent}22, transparent 58%)`,
      }}
    >
      <div className="relative w-full max-w-[420px]">
        <div className="overflow-hidden rounded-xl border border-white/10 shadow-[0_30px_80px_-25px_rgba(0,0,0,1)]">
          <img
            src={app.banner}
            alt={`${app.name} promotional artwork`}
            width={1024}
            height={500}
            className="aspect-[1024/500] w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        {app.icon && (
          <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-xl border border-white/10 bg-canvas/90 p-3 shadow-xl backdrop-blur">
            <img
              src={app.icon}
              alt=""
              width={48}
              height={48}
              className="size-12 rounded-xl"
              loading="lazy"
              decoding="async"
            />
            <div>
              <p className="text-sm font-semibold text-ink">{app.name}</p>
              <p className="text-[0.68rem] text-faint">Android application</p>
            </div>
          </div>
        )}
        <div className="absolute -top-3 right-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-canvas/85 px-3 py-1.5 text-[0.65rem] font-medium text-muted shadow-lg backdrop-blur">
          {app.playStoreUrl ? (
            <>
              <PlayStore className="size-3" />
              Google Play
            </>
          ) : (
            'Coming soon'
          )}
        </div>
      </div>
    </div>
  )
}

/** Full-width alternating product presentation for a single application. */
export function ProductShowcase({ app, reverse = false }: ProductShowcaseProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.015] p-4 transition-colors duration-500 hover:border-white/[0.13] sm:p-6 lg:p-8">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className={reverse ? 'lg:order-2' : ''}>
          <ProductVisual app={app} />
        </div>

        <div className={`px-1 sm:px-2 lg:px-0 ${reverse ? 'lg:order-1' : ''}`}>
          <div className="flex flex-wrap items-center gap-3">
            <StageBadge stage={app.releaseStage} />
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-faint">
              {app.platform}
            </span>
          </div>

          <h3 className="mt-5 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{app.name}</h3>
          <p className="mt-3 text-lg leading-relaxed text-ink/75">{app.tagline}</p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{app.description}</p>

          <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {app.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-muted">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>

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
              to={`/apps/${app.slug}`}
              className="group/link inline-flex items-center gap-2 rounded-lg border border-line-strong bg-white/[0.03] px-5 py-3 text-sm font-semibold text-ink transition duration-300 hover:border-white/25 hover:bg-white/[0.07]"
            >
              View product page
              <ArrowRight className="size-4 text-faint transition-transform duration-300 group-hover/link:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
