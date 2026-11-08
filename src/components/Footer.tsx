import { Link } from 'react-router'
import { BrandMark } from './BrandMark'
import { Container } from './Container'
import { ArrowUpRight, Mail } from './Icons'
import { publishedApps, upcomingApps } from '../data/apps'
import { site } from '../data/site'

const studioLinks = [
  { label: 'About the studio', to: '/#about' },
  { label: 'What we do', to: '/#services' },
  { label: 'Our approach', to: '/#approach' },
  { label: 'All apps', to: '/apps' },
]

const moreLinks = [
  { label: 'Telegram bots', to: '/bots' },
  { label: 'Privacy policies', to: '/privacy' },
  { label: 'Contact', to: '/contact' },
]

interface FooterLink {
  label: string
  to: string
}

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h2 className="font-mono text-[0.66rem] font-medium uppercase tracking-[0.2em] text-faint">
        {title}
      </h2>
      <ul className="mt-4 space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="text-muted transition-colors hover:text-ink">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  const productLinks: FooterLink[] = [...publishedApps, ...upcomingApps].map((app) => ({
    label: app.name,
    to: `/apps/${app.slug}`,
  }))

  return (
    <footer className="relative border-t border-white/[0.06] bg-canvas-deep">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent"
      />
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.9fr_0.9fr_0.8fr]">
          <div className="max-w-sm">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 text-[0.95rem] font-semibold tracking-tight text-ink"
            >
              <BrandMark className="size-9" />
              {site.name}
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              An independent software studio building modern mobile applications, web applications
              and digital products.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent-hover"
            >
              <Mail className="size-4 text-faint transition-colors group-hover:text-accent-hover" />
              {site.email}
            </a>
          </div>

          <FooterColumn title="Studio" links={studioLinks} />
          <FooterColumn title="Products" links={productLinks} />
          <FooterColumn title="More" links={moreLinks} />
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.06] pt-7 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-1.5 transition-colors hover:text-ink"
          >
            Build something with us
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Container>
    </footer>
  )
}
