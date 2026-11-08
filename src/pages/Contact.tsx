import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'
import { ContactCta } from '../components/ContactCta'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { site } from '../data/site'

export function Contact() {
  return (
    <>
      <Seo
        title="Contact — Shadow Studio Labs"
        description="Get in touch with Shadow Studio Labs about website development, mobile application development, custom software projects and collaborations."
        canonicalPath="/contact"
      />
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-18rem] h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(139,125,255,0.12),transparent)] blur-3xl"
        />
        <Container className="relative max-w-5xl">
          <PageHeader
            eyebrow="Contact"
            title="Let's build something worth using."
            subtitle="Have a product idea, a project in progress or a problem that needs a considered software solution? Tell us a little about it."
          />

          <Reveal className="mt-14">
            <ContactCta />
          </Reveal>

          <Reveal className="mx-auto mt-10 max-w-2xl text-center" delay={60}>
            <p className="text-sm leading-relaxed text-faint">
              Prefer email? Write to{' '}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-muted underline decoration-white/15 underline-offset-4 transition-colors hover:text-ink"
              >
                {site.email}
              </a>
              . Including a short description of your project, the platforms involved and your
              timeline helps us reply with something useful.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
