/**
 * Central registry of apps published by Shadow Studio Labs.
 *
 * To add a new app:
 *   1. Add an object here (and import its artwork in src/data/media.ts).
 *   2. Create its app page under src/pages/ (or reuse AppDetail via /apps/:slug).
 *   3. Create its privacy policy under src/pages/policies/.
 *   4. Register the privacy policy route in src/App.tsx.
 *
 * The Apps page, Privacy index and AppDetail page all read from this file,
 * so most new apps only need an entry here plus their policy page/route.
 */

import { media } from './media'

export type AppStatus = 'Available' | 'Coming Soon'
export type ReleaseStage = 'published' | 'upcoming' | 'lab'

export interface AppInfo {
  /** Display name, e.g. "Christmas Countdown" */
  name: string
  /** URL slug used for /apps/:slug and /privacy/:slug */
  slug: string
  /** Short supporting line used in product showcases */
  tagline: string
  /** One-line summary shown on app cards */
  shortDescription: string
  /** Longer description shown on the app's own page */
  description: string
  /** Platforms the app is available on, e.g. "Android" */
  platform: string
  /** Availability badge shown on cards and app pages */
  status: AppStatus
  /**
   * Marketing state of the project. Published apps have a store listing;
   * upcoming projects are announced but unreleased; lab projects stay out of
   * the published showcase.
   */
  releaseStage: ReleaseStage
  /** Route to this app's privacy policy, e.g. "/privacy/fan" */
  privacyPath: string
  /** Main features, shown on the app's own page */
  features: string[]
  /** Optional Google Play listing (published apps only). */
  playStoreUrl?: string
  /** Existing artwork from the studio asset library. */
  icon?: string
  banner?: string
  screenshot?: string
  /** Accent used for ambient lighting in product presentations. */
  accent?: string
}

export const apps: AppInfo[] = [
  {
    name: 'Christmas Countdown',
    slug: 'christmas-countdown',
    tagline: 'A festive countdown with collectible characters, music and wallpapers.',
    shortDescription:
      'A festive Christmas countdown with collectible character cards, themed wallpapers, daily streak rewards and a home-screen widget.',
    description:
      'Christmas Countdown brings the festive spirit with a live Christmas countdown, four selectable themes, background music, a downloadable wallpaper gallery, a collectible-card collection with daily streak rewards, and a home-screen countdown widget.',
    platform: 'Android',
    status: 'Available',
    releaseStage: 'published',
    privacyPath: '/privacy/christmas-countdown',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.rshadowmonarch123.christmascountdown',
    icon: media.christmas.icon,
    banner: media.christmas.banner,
    accent: '#e15b4b',
    features: [
      'Live Christmas countdown',
      'Collectible Christmas character cards',
      'Rare, epic, legendary and mythic card rarities',
      'Festive background music',
      'Four customizable themes',
      'Downloadable Christmas wallpapers',
      'Daily streak rewards',
      'Home-screen countdown widget',
    ],
  },
  {
    name: 'Halloween Countdown',
    slug: 'halloween-countdown',
    tagline: 'A spooky countdown paired with atmospheric wallpapers.',
    shortDescription:
      'A Halloween-themed countdown app with curated spooky wallpapers, themes and an immersive seasonal atmosphere.',
    description:
      'Halloween Countdown brings the spooky season to your home screen with a live countdown, a curated collection of Halloween wallpapers and videos, multiple themes and atmospheric customization.',
    platform: 'Android',
    status: 'Available',
    releaseStage: 'published',
    privacyPath: '/privacy/halloween-countdown',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.halloween.countdown',
    icon: media.halloween.icon,
    banner: media.halloween.banner,
    screenshot: media.halloween.screenshot,
    accent: '#f08a3c',
    features: [
      'Live Halloween countdown',
      'Curated spooky wallpapers',
      'Image and video wallpaper formats',
      'Multiple Halloween themes',
      'Atmospheric seasonal customization',
      'Download and save wallpapers',
      'Rewarded content unlocks (where applicable)',
    ],
  },
  {
    name: 'ASCEND',
    slug: 'ascend',
    tagline: 'Turn everyday goals into a real-life RPG progression system.',
    shortDescription:
      'A real-life RPG progression app that turns daily objectives into EXP, ranks, titles and collectible cards.',
    description:
      'ASCEND (My Life As A Game) is a real-life RPG-style personal progression app for Android. Complete daily objectives and bonus trials to earn EXP, promote through six ranks, unlock thirty-six collectible cards, earn titles and achievements — all stored offline in a local database on your device, with no account and no cloud sync.',
    platform: 'Android',
    status: 'Coming Soon',
    releaseStage: 'upcoming',
    privacyPath: '/privacy/ascend',
    icon: media.ascend.icon,
    banner: media.ascend.banner,
    screenshot: media.ascend.screenshot,
    accent: '#8b7dff',
    features: [
      'Daily objectives with customizable targets',
      'Thirty bonus trials, six ranks and thirty-six collectible cards',
      'Titles, achievements and rank-promotion records',
      'Rewarded-ad card unlocks with Google UMP consent',
      'No account or sign-in required — progress stored locally',
      'Local JSON backup export and import',
    ],
  },
  {
    name: 'FAN — Virtual Breeze',
    slug: 'fan',
    tagline: 'A calm, customizable virtual fan experience.',
    shortDescription:
      'A simple virtual fan experience with customizable fan skins, breeze effects and rewarded unlocks.',
    description:
      'FAN — Virtual Breeze is a lightweight virtual fan app. Pick a fan skin, choose a theme and color, and enjoy a calming breeze simulation — all offline and without an account.',
    platform: 'Android',
    status: 'Available',
    releaseStage: 'lab',
    privacyPath: '/privacy/fan',
    icon: media.fan.icon,
    banner: media.fan.banner,
    accent: '#67c7d8',
    features: [
      'Customizable fan skins',
      'Soothing breeze effects',
      'Optional rewarded unlocks for extra skins',
      'No account or sign-in required',
      'Preferences and unlocks stored locally on your device',
    ],
  },
]

/** Published applications, in showcase order. */
export const publishedApps = apps.filter((app) => app.releaseStage === 'published')

/** Announced but not yet released. */
export const upcomingApps = apps.filter((app) => app.releaseStage === 'upcoming')

/** Experimental projects kept in the studio, without a public release. */
export const labApps = apps.filter((app) => app.releaseStage === 'lab')

/** Look up an app by its URL slug. */
export function getApp(slug: string): AppInfo | undefined {
  return apps.find((app) => app.slug === slug)
}
