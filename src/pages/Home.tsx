import type { ComponentType, SVGProps } from 'react'
import { Link } from 'react-router'
import { Container } from '../components/Container'
import { ButtonLink } from '../components/ButtonLink'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { HeroArt } from '../components/HeroArt'
import { ProductShowcase } from '../components/ProductShowcase'
import { ContactCta } from '../components/ContactCta'
import { Seo } from '../components/Seo'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CodeBracket,
  Globe,
  PenTool,
  Rocket,
  Smartphone,
  Sparkles,
} from '../components/Icons'
import { publishedApps, upcomingApps } from '../data/apps'
import { site } from '../data/site'

type Icon = ComponentType<SVGProps<SVGSVGElement>>

const capabilities = [
  'Mobile application development',
  'Web application development',
  'UI/UX design',
  'Software engineering',
  'Digital product development',
]

const values = [
  {
    title: 'Independent',
    description: 'We choose the products we build and set our own standard for them.',
  },
  {
    title: 'Product-first',
    description: 'Design and engineering decisions start with the people using the product.',
  },
  {
    title: 'Built to last',
    description: 'Considered details, clean implementation and maintainable foundations.',
  },
]

const services: { title: string; description: string; icon: Icon }[] = [
  {
    title: 'Mobile App Development',
    description:
      'Thoughtful Android applications built around real use cases, with smooth performance and polished interactions.',
    icon: Smartphone,
  },
  {
    title: 'Web Development',
    description:
      'Fast, responsive web applications and marketing sites with a strong focus on clarity, accessibility and maintainability.',
    icon: Globe,
  },
  {
    title: 'UI/UX Design',
    description:
      'Interface systems, product flows and visual identities that make complex ideas feel simple and intuitive.',
    icon: PenTool,
  },
  {
    title: 'Custom Software Solutions',
    description:
      'Purpose-built tools and internal products designed around the way your work actually happens.',
    icon: CodeBracket,
  },
  {
    title: 'Product Engineering',
    description:
      'From first prototype to production release, we connect product thinking with solid technical execution.',
    icon: Rocket,
  },
]

const approach = [
  {
    title: 'Understand the Problem',
    description: 'Start with the people, the context and the outcome that actually matters.',
  },
  {
    title: 'Design the Experience',
    description: 'Shape the flow, hierarchy and visual language before writing the first line of code.',
  },
  {
    title: 'Engineer the Solution',
    description: 'Build with clean architecture, dependable foundations and attention to detail.',
  },
  {
    title: 'Test and Refine',
    description: 'Check real devices, edge cases and accessibility, then polish what needs polishing.',
  },
  {
    title: 'Launch and Improve',
    description: 'Ship with confidence, learn from how the product is used and keep making it better.',
  },
]

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.siteUrl,
  email: site.email,
  description: site.description,
}

export function Home() {
  return (
    <>
      <Seo
        title={`${site.name} — Building Digital Experiences That Matter`}
        description={site.description}
        canonicalPath="/"
        jsonLd={organizationJsonLd}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-22rem] h-[44rem] w-[76rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(139,125,255,0.16),rgba(139,125,255,0.04)_55%,transparent_75%)] blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-32 size-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(103,199,216,0.08),transparent)] blur-3xl"
        />

        <Container className="relative grid gap-14 pb-20 pt-16 sm:pb-24 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:pb-32 lg:pt-28">
          <div>
            <p className="eyebrow animate-enter">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(139,125,255,0.9)]" />
              Independent software studio
            </p>

            <h1 className="mt-6 max-w-3xl animate-enter text-[clamp(2.75rem,7vw,5rem)] font-semibold leading-[0.97] tracking-[-0.045em]">
              Building digital experiences that <span className="text-gradient">matter.</span>
            </h1>

            <p className="mt-6 max-w-xl animate-enter-late text-base leading-relaxed text-muted sm:text-lg">
              We design and develop innovative software, mobile applications and digital experiences
              that turn ideas into impactful products.
            </p>

            <div className="mt-9 flex animate-enter-later flex-col gap-3 sm:flex-row">
              <ButtonLink to="#products">
                Explore our products
                <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink to="/contact" variant="secondary">
                Contact us
              </ButtonLink>
            </div>

            <div className="mt-10 flex animate-enter-later flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/[0.06] pt-6">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-faint">
                Published on Google Play
              </span>
              <div className="flex items-center gap-3">
                {publishedApps.map((app) =>
                  app.icon ? (
                    <Link
                      key={app.slug}
                      to={`/apps/${app.slug}`}
                      aria-label={app.name}
                      className="group flex items-center gap-2 text-xs text-muted transition-colors hover:text-ink"
                    >
                      <img
                        src={app.icon}
                        alt=""
                        width={28}
                        height={28}
                        className="size-7 rounded-lg border border-white/10"
                        decoding="async"
                      />
                      <span className="hidden sm:inline">{app.name}</span>
                    </Link>
                  ) : null,
                )}
              </div>
            </div>
          </div>

          <HeroArt />
        </Container>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative scroll-mt-20 border-t border-white/[0.06] py-24 sm:py-32"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <SectionHeading
                eyebrow="About the studio"
                title={
                  <>
                    A small studio with a product-first point of view.
                  </>
                }
              />
            </Reveal>

            <Reveal delay={80} className="lg:col-span-7">
              <p className="text-xl leading-relaxed text-ink/85 sm:text-2xl sm:leading-relaxed">
                At Shadow Studio Labs, we believe great technology starts with great ideas. We build
                thoughtfully designed digital products that combine creativity, engineering and
                exceptional user experiences.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
                We are an independent software studio focused on modern digital products — from
                mobile applications and web platforms to the design systems and engineering that
                hold them together. We care about how a product feels, how it works and how it holds
                up over time.
              </p>

              <ul className="mt-9 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {capabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-2.5 text-sm text-muted">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    {capability}
                  </li>
                ))}
              </ul>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {values.map((value) => (
                  <div key={value.title} className="border-t border-white/[0.09] pt-4">
                    <p className="text-sm font-semibold text-ink">{value.title}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-faint">{value.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Products */}
      <section
        id="products"
        className="relative scroll-mt-20 overflow-hidden border-t border-white/[0.06] py-24 sm:py-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-40 size-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(139,125,255,0.06),transparent)] blur-3xl"
        />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              eyebrow="Our products"
              title="Apps designed to be part of someone's day."
              description="We build and publish our own applications — each one shaped around a specific moment, ritual or experience. Here is what is live today, and what is coming next."
            />
          </Reveal>

          <div className="mt-12 space-y-6 sm:space-y-8">
            {publishedApps.map((app, index) => (
              <Reveal key={app.slug} delay={index * 60}>
                <ProductShowcase app={app} reverse={index % 2 === 1} />
              </Reveal>
            ))}
          </div>

          {upcomingApps.length > 0 && (
            <Reveal className="mt-12" delay={60}>
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="eyebrow">
                    <span aria-hidden="true" className="h-px w-6 bg-warning/60" />
                    Also in the lab
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                    What we are building next
                  </h3>
                </div>
                <Link
                  to="/apps"
                  className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
                >
                  Explore all projects
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>

              {upcomingApps.map((app) => (
                <Link
                  key={app.slug}
                  to={`/apps/${app.slug}`}
                  className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/[0.08] bg-surface p-6 transition duration-500 hover:border-white/[0.16] sm:flex-row sm:items-center sm:p-8"
                >
                  {app.banner && (
                    <img
                      src={app.banner}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full scale-110 object-cover opacity-[0.08] blur-xl transition duration-700 group-hover:opacity-[0.12]"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <div className="relative flex items-center gap-4 sm:flex-1">
                    {app.icon && (
                      <img
                        src={app.icon}
                        alt=""
                        width={64}
                        height={64}
                        className="size-16 shrink-0 rounded-2xl border border-white/10"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    <div>
                      <span className="inline-flex items-center gap-2 rounded-full border border-warning/20 bg-warning/10 px-2.5 py-0.5 text-[0.65rem] font-medium text-warning">
                        <span aria-hidden="true" className="size-1.5 rounded-full bg-warning" />
                        In development
                      </span>
                      <h4 className="mt-2 text-xl font-semibold text-ink">{app.name}</h4>
                      <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">{app.tagline}</p>
                    </div>
                  </div>
                  <span className="relative inline-flex shrink-0 items-center gap-2 rounded-lg border border-line-strong bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-ink transition duration-300 group-hover:border-white/25 group-hover:bg-white/[0.07]">
                    Preview project
                    <ArrowUpRight className="size-4 text-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </Reveal>
          )}
        </Container>
      </section>

      {/* Services */}
      <section
        id="services"
        className="relative scroll-mt-20 border-t border-white/[0.06] py-24 sm:py-32"
      >
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="From first sketch to shipped product."
              description="We work across the full product surface — the experience people see, the systems underneath and the details that make both feel considered."
            />
          </Reveal>

          <Reveal className="mt-12" delay={80}>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.title}
                    className="group bg-surface p-7 transition-colors duration-300 hover:bg-surface-raised sm:p-8"
                  >
                    <span className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-accent transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent/10">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-5 text-base font-semibold text-ink">{service.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">{service.description}</p>
                  </div>
                )
              })}

              <Link
                to="/contact"
                className="group flex flex-col justify-between bg-accent-soft p-7 transition-colors duration-300 hover:bg-[#1c1834] sm:p-8"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent">
                  <Sparkles className="size-5" />
                </span>
                <div className="mt-8">
                  <h3 className="text-base font-semibold text-ink">
                    Have something different in mind?
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    Tell us about the idea. We will help you work out the right shape for it.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink">
                    Start a conversation
                    <ArrowRight className="size-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Approach */}
      <section
        id="approach"
        className="relative scroll-mt-20 border-t border-white/[0.06] py-24 sm:py-32"
      >
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our approach"
              title="A clear process, from problem to product."
              description="No black boxes. Every project moves through a deliberate sequence of understanding, designing, engineering and refining."
            />
          </Reveal>

          <Reveal className="mt-14" delay={80}>
            <ol className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
              {approach.map((step, index) => (
                <li key={step.title} className="relative">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[0.68rem] font-medium text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-px flex-1 bg-gradient-to-r from-accent/45 via-white/10 to-transparent"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold leading-snug text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative scroll-mt-20 border-t border-white/[0.06] py-24 sm:py-32"
      >
        <Container>
          <Reveal>
            <ContactCta />
          </Reveal>
        </Container>
      </section>
    </>
  )
}
