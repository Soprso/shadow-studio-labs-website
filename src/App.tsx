import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Apps } from './pages/Apps'
import { AppDetail } from './pages/AppDetail'
import { Bots } from './pages/Bots'
import { BotDetail } from './pages/BotDetail'
import { TelegramCurrencyConverter } from './pages/articles/TelegramCurrencyConverter'
import { PrivacyIndex } from './pages/PrivacyIndex'
import { FanPrivacyPolicy } from './pages/policies/FanPrivacyPolicy'
import { HalloweenCountdownPrivacyPolicy } from './pages/policies/HalloweenCountdownPrivacyPolicy'
import { ChristmasCountdownPrivacyPolicy } from './pages/policies/ChristmasCountdownPrivacyPolicy'
import { NewYearCountdownPrivacyPolicy } from './pages/policies/NewYearCountdownPrivacyPolicy'
import { OfflineAiPrivacyPolicy } from './pages/policies/OfflineAiPrivacyPolicy'
import { AscendPrivacyPolicy } from './pages/policies/AscendPrivacyPolicy'
import { TermsOfService } from './pages/policies/TermsOfService'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'
import { ReportDashboard } from './pages/studio/ReportDashboard'

/**
 * Scroll to the top on route changes, or to the matching section when a
 * cross-page hash link such as /#products is followed.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      const element = document.getElementById(id)
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (element) {
        element.scrollIntoView({
          behavior: reduceMotion ? 'auto' : 'smooth',
          block: 'start',
        })
        return
      }
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-canvas"
      >
        Skip to content
      </a>
      <div className="flex min-h-svh flex-col">
        <Navbar />
        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<Apps />} />
            {/* Generic app page — add an entry to src/data/apps.ts and this route serves it. */}
            <Route path="/apps/:slug" element={<AppDetail />} />
            <Route path="/bots" element={<Bots />} />
            {/* Generic bot page — add an entry to src/data/bots.ts and this route serves it. */}
            <Route path="/bots/:slug" element={<BotDetail />} />
            <Route path="/articles/telegram-currency-converter" element={<TelegramCurrencyConverter />} />
            <Route path="/privacy" element={<PrivacyIndex />} />
            {/* Register each new privacy policy route here. */}
            <Route path="/privacy/fan" element={<FanPrivacyPolicy />} />
            <Route path="/privacy/halloween-countdown" element={<HalloweenCountdownPrivacyPolicy />} />
            <Route path="/halloween-countdown-privacy-policy" element={<HalloweenCountdownPrivacyPolicy />} />
            <Route path="/privacy/christmas-countdown" element={<ChristmasCountdownPrivacyPolicy />} />
            <Route path="/privacy/new-year-countdown" element={<NewYearCountdownPrivacyPolicy />} />
            <Route path="/privacy/offline-ai" element={<OfflineAiPrivacyPolicy />} />
            <Route path="/privacy/ascend" element={<AscendPrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/contact" element={<Contact />} />
            {/* Private developer tooling (authenticated server-side). Not linked publicly. */}
            <Route path="/studio/reports" element={<ReportDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
