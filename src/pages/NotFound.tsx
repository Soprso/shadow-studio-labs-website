import { Link } from 'react-router'
import { Container } from '../components/Container'
import { Seo } from '../components/Seo'

export function NotFound() {
  return (
    <>
      <Seo title="Page not found — Shadow Studio Labs" />
      <Container className="py-28 text-center sm:py-36">
        <p className="eyebrow justify-center">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-canvas transition-colors hover:bg-white"
        >
          Back to home
        </Link>
      </Container>
    </>
  )
}
