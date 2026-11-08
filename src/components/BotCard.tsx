import { ButtonLink } from './ButtonLink'
import type { BotInfo } from '../data/bots'
import { ArrowUpRight } from './Icons'

export function BotCard({ bot }: { bot: BotInfo }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-white/[0.08] bg-surface p-6 transition duration-500 hover:border-white/[0.16] hover:shadow-glow">
      <div className="flex items-start gap-4">
        <img
          src={bot.iconPath}
          alt={`${bot.name} icon`}
          width={52}
          height={52}
          className="size-12 shrink-0 rounded-xl border border-white/10"
          loading="lazy"
        />
        <div className="min-w-0">
          <h2 className="text-lg font-semibold text-ink">{bot.name}</h2>
          <span className="mt-1.5 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[0.65rem] font-medium text-accent">
            {bot.tag}
          </span>
        </div>
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{bot.shortDescription}</p>
      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <ButtonLink to={bot.telegramUrl} className="flex-1">
          Open bot
          <ArrowUpRight className="size-4" />
        </ButtonLink>
        <ButtonLink to={`/bots/${bot.slug}`} variant="secondary" className="flex-1">
          Learn more
        </ButtonLink>
      </div>
    </article>
  )
}
