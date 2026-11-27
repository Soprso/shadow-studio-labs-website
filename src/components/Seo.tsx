import { useEffect } from 'react'
import { site } from '../data/site'

interface SeoProps {
  title: string
  description?: string
  /** Site-relative path used to build the canonical URL, e.g. "/bots/shadow-currency-bot" */
  canonicalPath?: string
  /** JSON-LD structured data injected into <head> for this page */
  jsonLd?: object
  /** Ask search engines not to index this page (e.g. private tooling routes). */
  noindex?: boolean
}

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = content
}

/**
 * Sets the document title and meta description for the current page,
 * and optionally injects social metadata, a canonical link and JSON-LD.
 * Render once at the top of each page.
 */
export function Seo({ title, description, canonicalPath, jsonLd, noindex }: SeoProps) {
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : undefined
  const canonicalUrl = canonicalPath ? `${site.siteUrl}${canonicalPath}` : undefined

  useEffect(() => {
    document.title = title

    if (description) {
      setMeta('meta[name="description"]', 'name', 'description', description)
      setMeta('meta[property="og:description"]', 'property', 'og:description', description)
      setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    }

    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)

    let canonical: HTMLLinkElement | undefined
    if (canonicalUrl) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      canonical.href = canonicalUrl
      document.head.appendChild(canonical)
      setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    }

    let robots: HTMLMetaElement | undefined
    if (noindex) {
      robots = document.createElement('meta')
      robots.name = 'robots'
      robots.content = 'noindex, nofollow, noarchive'
      document.head.appendChild(robots)
    }

    let script: HTMLScriptElement | undefined
    if (jsonLdString) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = jsonLdString
      document.head.appendChild(script)
    }

    return () => {
      canonical?.remove()
      robots?.remove()
      script?.remove()
    }
  }, [title, description, canonicalUrl, jsonLdString, noindex])

  return null
}
