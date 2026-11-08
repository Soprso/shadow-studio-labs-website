import { Link } from 'react-router'
import type { AppInfo } from '../data/apps'
import { ArrowRight, PlayStore } from './Icons'

function StageBadge({ stage }: { stage: AppInfo['releaseStage'] }) {
  if (stage === 'published') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-success/20 bg-canvas/80 px-2.5 py-1 text-[0.65rem] font-medium text-success backdrop-blur">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-success" />
        On Google Play
      </span>
    )
  }

  if (stage === 'upcoming') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-warning/20 bg-canvas/80 px-2.5 py-1 text-[0.65rem] font-medium text-warning backdrop-blur">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-warning" />
        In development
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-canvas/80 px-2.5 py-1 text-[0.65rem] font-medium text-muted backdrop-blur">
      <span aria-hidden="true" className="size-1.5 rounded-full bg-faint" />
      Lab project
    </span>
  )
}

export function AppCard({ app }: { app: AppInfo }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-surface transition duration-500 hover:border-white/[0.16] hover:shadow-glow">
      <Link
        to={`/apps/${app.slug}`}
        className="relative block overflow-hidden focus-visible:outline-offset-4"
        aria-label={`View ${app.name}`}
      >
        {app.banner ? (
          <img
            src={app.banner}
            alt={`${app.name} artwork`}
            width={1024}
            height={500}
            className="aspect-[2/1] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div
            aria-hidden="true"
            className="aspect-[2/1] w-full bg-[radial-gradient(circle_at_30%_30%,rgba(139,125,255,0.18),transparent_60%)]"
          />
        )}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent"
        />
        <div className="absolute right-4 top-4">
          <StageBadge stage={app.releaseStage} />
        </div>
        {app.icon && (
          <img
            src={app.icon}
            alt=""
            width={56}
            height={56}
            className="absolute bottom-4 left-5 size-14 rounded-xl border border-white/15 shadow-xl"
            loading="lazy"
            decoding="async"
          />
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6 pt-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-semibold tracking-[-0.02em] text-ink">
            <Link to={`/apps/${app.slug}`} className="transition-colors hover:text-accent-hover">
              {app.name}
            </Link>
          </h2>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{app.shortDescription}</p>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-[0.65rem] text-faint">
          <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 font-mono uppercase tracking-[0.1em]">
            {app.platform}
          </span>
          <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 font-mono uppercase tracking-[0.1em]">
            {app.releaseStage === 'published'
              ? 'Available'
              : app.releaseStage === 'upcoming'
                ? 'Coming soon'
                : 'Experimental'}
          </span>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            to={`/apps/${app.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent-hover"
          >
            View project
            <ArrowRight className="size-4 text-faint" />
          </Link>
          {app.playStoreUrl && (
            <a
              href={app.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get ${app.name} on Google Play`}
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
            >
              <PlayStore className="size-3.5" />
              Google Play
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
