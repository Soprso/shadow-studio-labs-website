import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'
import { BotCard } from '../components/BotCard'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { bots } from '../data/bots'
import { site } from '../data/site'

export function Bots() {
  return (
    <>
      <Seo
        title="Bots — Shadow Studio Labs"
        description="Telegram bots built by Shadow Studio Labs, including ShadowCurrencyBot — a free currency converter for fiat and crypto inside Telegram."
      />
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-18rem] h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(139,125,255,0.1),transparent)] blur-3xl"
        />
        <Container className="relative">
          <PageHeader
            eyebrow="Utilities"
            title="Bots & tools"
            subtitle={`Useful tools that live where you already chat, built by ${site.name}.`}
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {bots.map((bot, index) => (
              <Reveal key={bot.slug} delay={index * 70}>
                <BotCard bot={bot} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
