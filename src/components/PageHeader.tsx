interface PageHeaderProps {
  title: string
  subtitle?: string
  eyebrow?: string
}

/** Centered page title and subtitle, shared by top-level pages. */
export function PageHeader({ title, subtitle, eyebrow }: PageHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="eyebrow justify-center">
          <span aria-hidden="true" className="h-px w-8 bg-accent/70" />
          {eyebrow}
        </p>
      )}
      <h1 className="mt-5 text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
