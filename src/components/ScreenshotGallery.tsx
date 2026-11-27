interface ScreenshotGalleryProps {
  /** App name used to build descriptive alt text. */
  appName: string
  /** Ordered screenshot sources. */
  screenshots: string[]
}

/**
 * Responsive screenshot gallery.
 *
 * Small screens get a swipeable, snapping strip so the artwork stays readable;
 * larger screens switch to a three-column grid. Every image keeps the 9:20
 * phone aspect ratio used by the studio's app screenshots.
 */
export function ScreenshotGallery({ appName, screenshots }: ScreenshotGalleryProps) {
  if (screenshots.length === 0) return null

  return (
    <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
      {screenshots.map((src, index) => (
        <figure key={src} className="w-[220px] shrink-0 snap-center sm:w-auto">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#07070b] p-1.5 shadow-[0_24px_70px_-32px_rgba(0,0,0,1)]">
            <img
              src={src}
              alt={`${appName} screenshot ${index + 1}`}
              width={620}
              height={1378}
              className="aspect-[9/20] w-full rounded-xl object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </figure>
      ))}
    </div>
  )
}
