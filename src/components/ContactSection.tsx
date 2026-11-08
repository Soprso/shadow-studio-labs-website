import { site } from '../data/site'

/** Clearly marked contact section shown at the bottom of privacy policies. */
export function ContactSection() {
  return (
    <section aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="text-xl font-semibold text-ink">
        Contact Us
      </h2>
      <div className="mt-3 space-y-3 text-[0.95rem] leading-relaxed text-muted">
        <p>
          If you have questions about this privacy policy or how {site.name} handles your
          information, you can reach us at:
        </p>
        <p>
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-accent transition-colors hover:text-accent-hover"
          >
            {site.email}
          </a>
        </p>
      </div>
    </section>
  )
}
