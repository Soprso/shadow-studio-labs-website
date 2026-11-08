import { Container } from '../components/Container'
import { PageHeader } from '../components/PageHeader'
import { AppCard } from '../components/AppCard'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { apps, publishedApps, upcomingApps, labApps } from '../data/apps'
import { site } from '../data/site'

export function Apps() {
  return (
    <>
      <Seo
        title="Apps & Projects — Shadow Studio Labs"
        description="Explore the Android applications and upcoming projects built by Shadow Studio Labs, including Christmas Countdown, Halloween Countdown and ASCEND."
      />
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-18rem] h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(139,125,255,0.12),transparent)] blur-3xl"
        />
        <Container className="relative">
          <PageHeader
            eyebrow="Products"
            title="Apps & projects"
            subtitle={`Applications designed, built and published by ${site.name} — plus the projects currently taking shape inside the studio.`}
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {apps.map((app, index) => (
              <Reveal key={app.slug} delay={(index % 2) * 70}>
                <AppCard app={app} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-faint">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-success" />
              {publishedApps.length} published on Google Play
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-warning" />
              {upcomingApps.length} in development
            </span>
            {labApps.length > 0 && (
              <span className="inline-flex items-center gap-2">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-faint" />
                {labApps.length} experimental
              </span>
            )}
          </div>
        </Container>
      </section>
    </>
  )
}
