import { Link, useParams } from 'react-router'
import { ButtonLink } from '../components/ButtonLink'
import { Container } from '../components/Container'
import { Seo } from '../components/Seo'
import { getBot } from '../data/bots'
import { site } from '../data/site'

const formatExample = '<amount> <from currency> <to currency>'

const inputExamples = ['100 USD INR', '50 EUR USD', '1000 INR USD', '25.5 USD EUR', '1 BTC INR', '0.5 ETH USD']

const steps = [
  {
    title: 'Open the bot',
    description: 'Tap "Open ShadowCurrencyBot" below, or search for @ShadowCurrencyBot inside Telegram.',
  },
  {
    title: 'Press Start',
    description: 'Tap the Start button (or send /start) to begin a chat with the bot.',
  },
  {
    title: 'Send a conversion',
    description: 'Type an amount and two currency codes, like "100 USD INR".',
  },
  {
    title: 'Get your result',
    description: 'The bot replies with the current conversion result in seconds.',
  },
]

const features = [
  {
    title: 'Fiat currency conversion',
    description: 'Convert between major fiat currencies such as USD, EUR, INR and GBP.',
  },
  {
    title: 'Cryptocurrency conversion',
    description: 'Convert cryptocurrencies like BTC and ETH alongside fiat currencies.',
  },
  {
    title: 'Current exchange-rate data',
    description: 'Results use the latest available exchange-rate data from reliable sources.',
  },
  {
    title: 'Simple text-based input',
    description: 'No menus or buttons — just type "100 USD INR" and send.',
  },
  {
    title: 'No login required',
    description: 'Open the bot in Telegram and press Start. No account or sign-up needed.',
  },
  {
    title: 'Works inside Telegram',
    description: 'Nothing extra to install — the bot lives where you already chat.',
  },
  {
    title: 'Lightweight and fast',
    description: 'A small bot that replies quickly, without heavy interfaces.',
  },
  {
    title: 'Helpful error handling',
    description: 'If a currency code is unrecognized, the bot explains the problem instead of failing silently.',
  },
]

interface ChatExampleProps {
  command: string
  result: string
}

/** A chat-style "you send, bot replies" mock. Values are illustrative only. */
function ChatExample({ command, result }: ChatExampleProps) {
  return (
    <div className="rounded-xl border border-line bg-white/[0.04] p-4">
      <div className="space-y-3">
        <p className="ml-auto w-fit max-w-full rounded-lg rounded-br-sm bg-accent px-3 py-2 font-mono text-sm text-white">
          {command}
        </p>
        <p className="w-fit max-w-full rounded-lg rounded-bl-sm bg-surface px-3 py-2 font-mono text-sm text-ink/80 shadow-sm">
          {result}
        </p>
      </div>
    </div>
  )
}

const exampleResults: ChatExampleProps[] = [
  { command: '100 USD INR', result: '100 USD ≈ 8,325 INR (example)' },
  { command: '50 EUR USD', result: '50 EUR ≈ 54.20 USD (example)' },
  { command: '1000 INR USD', result: '1000 INR ≈ 12.01 USD (example)' },
  { command: '1 BTC USD', result: '1 BTC ≈ 61,500 USD (example)' },
]

const faqs = [
  {
    question: 'What is ShadowCurrencyBot?',
    answer:
      'ShadowCurrencyBot is a free Telegram currency converter. It converts between fiat currencies (such as USD, EUR, INR and GBP) and cryptocurrencies (such as BTC and ETH) directly inside Telegram — no separate app to install.',
  },
  {
    question: 'How do I convert USD to INR on Telegram?',
    answer:
      'Open ShadowCurrencyBot, press Start, then send a message in the format <amount> <from> <to> — for example "100 USD INR". The bot replies with the current conversion result.',
  },
  {
    question: 'Can I convert EUR to USD using Telegram?',
    answer:
      'Yes. Send something like "50 EUR USD" to the bot and it will reply with the current EUR-to-USD conversion.',
  },
  {
    question: 'Can ShadowCurrencyBot convert cryptocurrency?',
    answer:
      'Yes. The bot supports cryptocurrency conversions too — for example "1 BTC INR" or "0.5 ETH USD" — alongside regular fiat currency conversions.',
  },
  {
    question: 'Is ShadowCurrencyBot free?',
    answer: 'Yes, ShadowCurrencyBot is completely free to use.',
  },
  {
    question: 'Do I need to create an account?',
    answer:
      'No. You only need a Telegram account (which you already have to use Telegram). There is no separate sign-up for the bot.',
  },
  {
    question: 'How do I use the Telegram currency converter?',
    answer:
      'Open the bot in Telegram, press Start, and send a conversion like "100 USD INR". The bot replies with the current result. That is all there is to it.',
  },
  {
    question: 'Are exchange rates real-time?',
    answer:
      'ShadowCurrencyBot uses the latest available exchange-rate data — the Frankfurter API for fiat currencies and a separate cryptocurrency data source for crypto. Rates change frequently, so treat results as current reference rates rather than real-time market ticks.',
  },
]

export function BotDetail() {
  const { slug } = useParams<{ slug: string }>()
  const bot = slug ? getBot(slug) : undefined

  if (!bot) {
    return (
      <>
        <Seo title={`Bot not found — ${site.name}`} />
        <Container className="py-24 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Bot not found</h1>
          <p className="mt-2 text-muted">We couldn't find that bot.</p>
          <Link
            to="/bots"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-canvas transition-colors hover:bg-white"
          >
            Back to Bots
          </Link>
        </Container>
      </>
    )
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'ShadowCurrencyBot',
        url: `${site.siteUrl}/bots/shadow-currency-bot`,
        description: bot.description,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Telegram',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  }

  return (
    <>
      <Seo
        title="Free Currency Converter Telegram Bot | ShadowCurrencyBot"
        description="Convert USD to INR, EUR to USD, BTC to ETH and more with ShadowCurrencyBot — a free Telegram currency converter bot for fiat and crypto. No login needed."
        canonicalPath="/bots/shadow-currency-bot"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="py-14 sm:py-20">
        <Container className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <Link to="/bots" className="transition-colors hover:text-ink">
              Bots
            </Link>
            <span aria-hidden="true" className="mx-2">
              /
            </span>
            <span className="text-ink/80">{bot.name}</span>
          </nav>

          <div className="mt-10 flex flex-col items-center text-center">
            <img
              src={bot.iconPath}
              alt="ShadowCurrencyBot icon — a currency exchange symbol on a purple rounded square"
              width={64}
              height={64}
              className="size-16 rounded-2xl shadow-sm"
            />
            <span className="mt-4 inline-flex items-center rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
              {bot.tag}
            </span>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Free Currency Converter Telegram Bot
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
              ShadowCurrencyBot is a free Telegram currency converter that lets you convert fiat
              currencies and cryptocurrencies directly inside Telegram.
            </p>
            <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
              <ButtonLink to={bot.telegramUrl} className="w-full sm:w-auto">
                Open ShadowCurrencyBot
              </ButtonLink>
              <ButtonLink to="/bots" variant="secondary" className="w-full sm:w-auto">
                Browse all bots
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* What the bot does */}
      <section className="border-t border-white/[0.06] py-14 sm:py-20">
        <Container className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Convert currencies by just sending a message
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            There are no menus to navigate and no forms to fill in. To convert a currency, simply
            send a message in this format:
          </p>
          <p className="mt-4 rounded-lg border border-line bg-white/[0.04] px-4 py-3 font-mono text-sm text-ink">
            {formatExample}
          </p>
          <p className="mt-6 text-muted">
            For example, to convert 100 US dollars to Indian rupees, send:
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {inputExamples.map((example) => (
              <li key={example}>
                <code className="px-2.5 py-1">{example}</code>
              </li>
            ))}
          </ul>
          <p className="mt-6 leading-relaxed text-muted">
            The bot understands both traditional fiat currencies (USD, EUR, INR, GBP and more) and
            cryptocurrency conversions (BTC, ETH and more) — all from the same simple text input.
          </p>
        </Container>
      </section>

      {/* How to use */}
      <section className="border-t border-white/[0.06] py-14 sm:py-20">
        <Container className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            How to use ShadowCurrencyBot
          </h2>
          <ol className="mt-8 space-y-6">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Features */}
      <section className="border-t border-white/[0.06] py-14 sm:py-20">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Features
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-line bg-surface p-5 shadow-sm"
              >
                <h3 className="font-semibold text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Example conversions */}
      <section className="border-t border-white/[0.06] py-14 sm:py-20">
        <Container className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Example conversions
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Here is what a conversion looks like inside the chat. The values below are
            <strong> illustrative examples only</strong> — exchange rates change over time, so send
            the same command to the bot to see the current result.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {exampleResults.map((example) => (
              <ChatExample key={example.command} {...example} />
            ))}
          </div>
          <p className="mt-4 rounded-lg border border-warning/20 bg-warning/10 px-4 py-3 text-sm text-warning/90">
            Example values shown for illustration only. Exchange rates move constantly — always use
            the bot for the latest available rate.
          </p>
        </Container>
      </section>

      {/* Exchange rate information */}
      <section className="border-t border-white/[0.06] py-14 sm:py-20">
        <Container className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Where the rates come from
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            <p>
              ShadowCurrencyBot gets fiat exchange rates from the{' '}
              <strong>Frankfurter API</strong>, a free, open-source currency data API that tracks
              European Central Bank reference rates.
            </p>
            <p>
              Cryptocurrency conversions are handled through a separate cryptocurrency data source,
              so crypto pairs like BTC and ETH are supported alongside fiat currencies.
            </p>
            <p>
              Exchange rates can change at any time. Treat the bot's results as current reference
              rates — useful for everyday conversions, but not a substitute for a binding quote from
              a financial institution.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/[0.06] py-14 sm:py-20">
        <Container className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-semibold text-ink">{faq.question}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Learn more + CTA */}
      <section className="border-t border-white/[0.06] py-14 sm:py-20">
        <Container className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-line bg-surface p-8 text-center shadow-sm sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              Start converting in Telegram
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Open ShadowCurrencyBot and send your first conversion — it's free and takes seconds.
              For a deeper walkthrough, read{' '}
              <Link
                to="/articles/telegram-currency-converter"
                className="font-medium text-accent transition-colors hover:text-accent-hover"
              >
                How to Convert Currencies Directly in Telegram
              </Link>
              .
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink to={bot.telegramUrl}>Open ShadowCurrencyBot</ButtonLink>
              <ButtonLink to="/bots" variant="secondary">
                Browse all bots
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
