import { Link } from 'react-router'
import { publishedApps, upcomingApps } from '../data/apps'
import { ArrowUpRight, Sparkles } from './Icons'

/**
 * Layered artwork for the hero. Uses the real store banners and icons rather
 * than decorative stock imagery.
 */
export function HeroArt() {
  const christmas = publishedApps.find((app) => app.slug === 'christmas-countdown')
  const halloween = publishedApps.find((app) => app.slug === 'halloween-countdown')
  const upcoming = upcomingApps[0]

  if (!christmas?.banner || !christmas.icon || !halloween?.banner || !halloween.icon) {
    return null
  }

  return (
    <div className="relative mx-auto w-full max-w-[520px] animate-enter-later">
      <div
        aria-hidden="true"
        className="absolute -inset-10 rounded-full bg-[radial-gradient(closest-side,rgba(139,125,255,0.22),rgba(139,125,255,0.05)_55%,transparent_75%)] blur-2xl"
      />

      <div className="relative">
        <Link
          to={`/apps/${christmas.slug}`}
          className="group block w-[94%] -rotate-1 rounded-2xl border border-white/10 bg-surface/90 p-2.5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur transition duration-500 hover:-rotate-0 hover:border-white/20 hover:shadow-glow"
        >
          <div className="overflow-hidden rounded-xl">
            <img
              src={christmas.banner}
              alt="Christmas Countdown promotional artwork"
              width={1024}
              height={500}
              className="aspect-[1024/500] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              decoding="async"
            />
          </div>
          <div className="flex items-center gap-3 px-2 pb-1 pt-3">
            <img
              src={christmas.icon}
              alt=""
              width={48}
              height={48}
              className="-mt-7 size-12 rounded-xl border border-white/15 shadow-lg"
              decoding="async"
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-ink">{christmas.name}</p>
              <p className="text-[0.7rem] text-faint">Live on Google Play</p>
            </div>
            <ArrowUpRight className="ml-auto size-4 shrink-0 text-faint transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
          </div>
        </Link>

        <Link
          to={`/apps/${halloween.slug}`}
          className="group relative z-10 -mt-4 ml-auto block w-[88%] rotate-1 rounded-2xl border border-white/10 bg-surface-raised/95 p-2.5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.95)] backdrop-blur transition duration-500 hover:rotate-0 hover:border-white/20 hover:shadow-glow"
        >
          <div className="overflow-hidden rounded-xl">
            <img
              src={halloween.banner}
              alt="Halloween Countdown promotional artwork"
              width={1024}
              height={500}
              className="aspect-[1024/500] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              decoding="async"
            />
          </div>
          <div className="flex items-center gap-3 px-2 pb-1 pt-3">
            <img
              src={halloween.icon}
              alt=""
              width={48}
              height={48}
              className="-mt-7 size-12 rounded-xl border border-white/15 shadow-lg"
              decoding="async"
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-ink">{halloween.name}</p>
              <p className="text-[0.7rem] text-faint">Live on Google Play</p>
            </div>
            <ArrowUpRight className="ml-auto size-4 shrink-0 text-faint transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
          </div>
        </Link>

        {upcoming && (
          <div className="absolute -left-3 top-[38%] hidden items-center gap-2 rounded-full border border-white/10 bg-canvas/85 px-3 py-2 text-[0.68rem] font-medium text-muted shadow-xl backdrop-blur sm:flex">
            <Sparkles className="size-3.5 text-accent" />
            <span>{upcoming.name} — in development</span>
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 px-1">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-faint">
          Independent studio · Android &amp; web
        </p>
        <span className="inline-flex items-center gap-1.5 text-[0.68rem] text-faint">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-success" />
          Shipping
        </span>
      </div>
    </div>
  )
}
