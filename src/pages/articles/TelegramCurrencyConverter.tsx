import { Link } from 'react-router'
import { ButtonLink } from '../../components/ButtonLink'
import { Container } from '../../components/Container'
import { Seo } from '../../components/Seo'

const exampleCommands = ['100 USD INR', '50 EUR USD', '1000 INR USD', '1 BTC INR']

export function TelegramCurrencyConverter() {
  return (
    <>
      <Seo
        title="How to Convert Currencies Directly in Telegram — Shadow Studio Labs"
        description="Learn how to convert USD to INR, EUR to USD and cryptocurrencies directly in Telegram with simple text commands using ShadowCurrencyBot."
        canonicalPath="/articles/telegram-currency-converter"
      />
      <section className="py-14 sm:py-20">
        <Container className="mx-auto max-w-3xl">
          <article>
            <nav aria-label="Breadcrumb" className="text-sm text-muted">
              <Link to="/bots" className="transition-colors hover:text-ink">
                Bots
              </Link>
              <span aria-hidden="true" className="mx-2">
                /
              </span>
              <Link
                to="/bots/shadow-currency-bot"
                className="transition-colors hover:text-ink"
              >
                ShadowCurrencyBot
              </Link>
              <span aria-hidden="true" className="mx-2">
                /
              </span>
              <span className="text-ink/80">Article</span>
            </nav>

            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              How to Convert Currencies Directly in Telegram
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Quick currency conversion is one of those things you need more often than you expect —
              and doing it inside Telegram is faster than opening a separate app or searching the
              web.
            </p>

            <h2 className="mt-10 text-xl font-semibold text-ink">
              Why quick currency conversion is useful
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Whether you're checking what something costs in your home currency, budgeting for a
              trip, sending money to family, or comparing prices across markets, you usually just
              need one number: <em>how much is this in that currency?</em> A currency converter that
              lives inside your messaging app means you don't have to switch apps or remember where
              you left a calculator — the conversion is one message away.
            </p>

            <h2 className="mt-10 text-xl font-semibold text-ink">
              How to convert USD to INR
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              To convert US dollars to Indian rupees, send a message with the amount, the source
              currency, and the target currency:
            </p>
            <p className="mt-4 rounded-lg border border-line bg-white/[0.04] px-4 py-3 font-mono text-sm text-ink">
              100 USD INR
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              The pattern is always the same:{' '}
              <code>
                &lt;amount&gt; &lt;from currency&gt; &lt;to currency&gt;
              </code>
              . Use standard currency codes (USD, EUR, INR, GBP and so on) to avoid ambiguity.
            </p>

            <h2 className="mt-10 text-xl font-semibold text-ink">
              How to convert EUR to USD
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              The same format works for any pair. To convert euros to US dollars, send:
            </p>
            <p className="mt-4 rounded-lg border border-line bg-white/[0.04] px-4 py-3 font-mono text-sm text-ink">
              50 EUR USD
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              You can also reverse the direction anytime — converting USD to EUR is just{' '}
              <code>100 USD EUR</code>.
            </p>

            <h2 className="mt-10 text-xl font-semibold text-ink">
              How cryptocurrency conversion works
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Cryptocurrencies use the same simple format. To see what one bitcoin is worth in
              rupees, send:
            </p>
            <p className="mt-4 rounded-lg border border-line bg-white/[0.04] px-4 py-3 font-mono text-sm text-ink">
              1 BTC INR
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              Crypto rates come from a separate data source than fiat rates, because the two markets
              update on different schedules. That means you can mix and match — for example,
              converting fiat to crypto or comparing a crypto amount against a fiat currency — from
              the same chat.
            </p>

            <h2 className="mt-10 text-xl font-semibold text-ink">
              How to use Telegram for quick conversions
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Using a Telegram bot for conversions is straightforward:
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-5 leading-relaxed text-muted">
              <li>Open the bot in Telegram.</li>
              <li>Press Start to begin the chat.</li>
              <li>Send a conversion such as <code>100 USD INR</code>.</li>
              <li>Read the current result in the bot's reply.</li>
            </ol>
            <p className="mt-3 leading-relaxed text-muted">
              No app to download, no account to create, and no forms to fill in — the bot does the
              work from a single text message.
            </p>

            <h2 className="mt-10 text-xl font-semibold text-ink">Example commands</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Here are a few commands you can try right away:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {exampleCommands.map((command) => (
                <li key={command}>
                  <code className="px-2.5 py-1">{command}</code>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-xl font-semibold text-ink">
              Introducing ShadowCurrencyBot
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              <Link
                to="/bots/shadow-currency-bot"
                className="font-medium text-accent transition-colors hover:text-accent-hover"
              >
                ShadowCurrencyBot
              </Link>{' '}
              is a free Telegram currency converter bot built by Shadow Studio Labs. It converts
              fiat currencies like USD, EUR, INR and GBP, and it supports cryptocurrency conversions
              like BTC and ETH as well. It uses the Frankfurter API for fiat exchange rates and a
              separate cryptocurrency data source for crypto, so results reflect the latest
              available data rather than a fixed table.
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              Because exchange rates change constantly, treat any result as a current reference rate
              — it's perfect for everyday conversions, not for a binding quote.
            </p>

            <h2 className="mt-10 text-xl font-semibold text-ink">How to start using it</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Getting started takes about ten seconds: open the bot, press Start, and send your
              first conversion. If you'd like more detail on how the bot works and what it supports,
              the{' '}
              <Link
                to="/bots/shadow-currency-bot"
                className="font-medium text-accent transition-colors hover:text-accent-hover"
              >
                ShadowCurrencyBot page
              </Link>{' '}
              covers it all.
            </p>

            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <ButtonLink to="https://t.me/ShadowCurrencyBot">
                Try ShadowCurrencyBot on Telegram
              </ButtonLink>
              <ButtonLink to="/bots/shadow-currency-bot" variant="secondary">
                Learn more about the bot
              </ButtonLink>
            </div>
          </article>
        </Container>
      </section>
    </>
  )
}
