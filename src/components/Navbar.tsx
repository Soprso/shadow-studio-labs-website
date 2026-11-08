import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Container } from './Container'
import { BrandMark } from './BrandMark'
import { ArrowUpRight, Close, Menu } from './Icons'
import { site } from '../data/site'

const navItems = [
  { label: 'Studio', to: '/#about' },
  { label: 'Products', to: '/#products' },
  { label: 'Apps', to: '/apps' },
  { label: 'Bots', to: '/bots' },
]

const linkClasses = (isActive: boolean) =>
  `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? 'text-ink' : 'text-muted hover:text-ink'
  }`

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()

  // Close with Escape and lock background scrolling while the menu is open.
  useEffect(() => {
    if (!open) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const isActive = (to: string) => {
    if (to.startsWith('/#')) return pathname === '/' && hash === to.slice(1)
    if (to === '/') return pathname === '/'
    return pathname === to || pathname.startsWith(`${to}/`)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-canvas/75 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link
          to="/"
          className="flex items-center gap-2.5 rounded-lg text-[0.95rem] font-semibold tracking-tight text-ink"
          aria-label={`${site.name} — home`}
        >
          <BrandMark className="size-8" />
          <span className="text-sm sm:text-[0.95rem]">{site.name}</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              aria-current={isActive(item.to) ? (item.to.startsWith('/#') ? 'location' : 'page') : undefined}
              className={linkClasses(isActive(item.to))}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-lg border border-line-strong bg-white/[0.03] px-4 py-2 text-sm font-medium text-ink transition duration-300 hover:border-white/25 hover:bg-white/[0.07]"
          >
            Start a project
            <ArrowUpRight className="size-4 text-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-lg border border-line bg-white/[0.03] p-2 text-muted transition-colors hover:bg-white/[0.07] hover:text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <Close className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {/* Mobile navigation */}
      {open && (
        <div
          id="mobile-nav"
          className="border-t border-white/[0.06] bg-canvas/98 backdrop-blur-xl md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.to) ? (item.to.startsWith('/#') ? 'location' : 'page') : undefined}
                  className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                    isActive(item.to)
                      ? 'bg-white/[0.05] text-ink'
                      : 'text-muted hover:bg-white/[0.04] hover:text-ink'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/privacy"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-muted transition-colors hover:bg-white/[0.04] hover:text-ink"
              >
                Privacy
              </Link>
            </nav>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-canvas"
            >
              Start a project
              <ArrowUpRight className="size-4" />
            </Link>
          </Container>
        </div>
      )}
    </header>
  )
}
