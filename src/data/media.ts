/**
 * Imported artwork from the studio's existing asset library.
 *
 * The files in src/assets/optimized are web-sized WebP derivatives of the
 * original artwork under assets/images. The originals are kept untouched;
 * these derivatives only reduce transfer size while preserving aspect ratio.
 *
 * Keeping the imports in one module means the app registry and the UI share
 * the same source of truth, and Vite can fingerprint each file.
 */

import christmasBanner from '../assets/optimized/christmas-banner.webp'
import christmasIcon from '../assets/optimized/christmas-icon.webp'

import halloweenBanner from '../assets/optimized/halloween-banner.webp'
import halloweenIcon from '../assets/optimized/halloween-icon.webp'
import halloweenScreenshot from '../assets/optimized/halloween-screenshot.webp'

import ascendBanner from '../assets/optimized/ascend-banner.webp'
import ascendIcon from '../assets/optimized/ascend-icon.webp'
import ascendScreenshot from '../assets/optimized/ascend-screenshot.webp'

import fanBanner from '../assets/optimized/fan-banner.webp'
import fanIcon from '../assets/optimized/fan-icon.webp'

import offlineAiBanner from '../assets/optimized/offline-ai-banner.webp'
import offlineAiIcon from '../assets/optimized/offline-ai-icon.webp'
import offlineAiScreenshot from '../assets/optimized/offline-ai-screenshot.webp'

import newYearBanner from '../assets/optimized/new-year-banner.webp'
import newYearIcon from '../assets/optimized/new-year-icon.webp'
import newYearScreenshot1 from '../assets/optimized/new-year-screenshot-1.webp'
import newYearScreenshot2 from '../assets/optimized/new-year-screenshot-2.webp'
import newYearScreenshot3 from '../assets/optimized/new-year-screenshot-3.webp'

export const media = {
  christmas: {
    icon: christmasIcon,
    banner: christmasBanner,
  },
  halloween: {
    icon: halloweenIcon,
    banner: halloweenBanner,
    screenshot: halloweenScreenshot,
  },
  ascend: {
    icon: ascendIcon,
    banner: ascendBanner,
    screenshot: ascendScreenshot,
  },
  fan: {
    icon: fanIcon,
    banner: fanBanner,
  },
  offlineAi: {
    icon: offlineAiIcon,
    banner: offlineAiBanner,
    screenshot: offlineAiScreenshot,
  },
  newYear: {
    icon: newYearIcon,
    banner: newYearBanner,
    screenshot: newYearScreenshot1,
    screenshots: [newYearScreenshot1, newYearScreenshot2, newYearScreenshot3],
  },
} as const
