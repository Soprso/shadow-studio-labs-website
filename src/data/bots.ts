/**
 * Central registry of bots published by Shadow Studio Labs.
 *
 * To add a new bot:
 *   1. Add an object here.
 *   2. Add its icon under /public (e.g. /public/bots/<slug>.svg).
 *   3. Create its landing page under src/pages/ (or reuse BotDetail via /bots/:slug).
 *
 * The Bots page and BotDetail page both read from this file.
 */
export interface BotInfo {
  /** Display name, e.g. "Shadow Currency Bot" */
  name: string
  /** URL slug used for /bots/:slug */
  slug: string
  /** One-line summary shown on bot cards */
  shortDescription: string
  /** Longer description shown on the bot's own page */
  description: string
  /** Category tag shown on cards, e.g. "Telegram Bot" */
  tag: string
  /** Public link that opens the bot in Telegram */
  telegramUrl: string
  /** Path to the bot's icon (served from /public) */
  iconPath: string
}

export const bots: BotInfo[] = [
  {
    name: 'Shadow Currency Bot',
    slug: 'shadow-currency-bot',
    shortDescription:
      'Free Telegram currency converter for fiat currencies and cryptocurrency. Convert USD, EUR, INR, GBP, BTC, ETH and more directly inside Telegram.',
    description:
      'ShadowCurrencyBot is a free Telegram currency converter that lets you convert fiat currencies and cryptocurrencies directly inside Telegram. Just send a message like "100 USD INR" and get the current conversion result back in seconds.',
    tag: 'Telegram Bot',
    telegramUrl: 'https://t.me/ShadowCurrencyBot',
    iconPath: '/bots/shadow-currency-bot.svg',
  },
]

/** Look up a bot by its URL slug. */
export function getBot(slug: string): BotInfo | undefined {
  return bots.find((bot) => bot.slug === slug)
}
