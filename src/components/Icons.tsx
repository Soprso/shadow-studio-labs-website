import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

function StrokeIcon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function ArrowRight(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" />
    </StrokeIcon>
  )
}

export function ArrowUpRight(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M7 17 17 7m0 0H8m9 0v9" />
    </StrokeIcon>
  )
}

export function Check(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </StrokeIcon>
  )
}

export function Smartphone(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="6.5" y="2.75" width="11" height="18.5" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </StrokeIcon>
  )
}

export function Globe(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9h17M3.5 15h17M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z" />
    </StrokeIcon>
  )
}

export function PenTool(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m12 19 7-7-4-4-7 7-2.5 6.5L12 19Z" />
      <path d="m15 8 4-4 1 1-4 4M9.5 13.5l1 1" />
      <path d="M5.5 18.5 12 12" />
    </StrokeIcon>
  )
}

export function CodeBracket(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4 10.5 20" />
    </StrokeIcon>
  )
}

export function Layers(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
    </StrokeIcon>
  )
}

export function Rocket(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M13.5 4.5C16 2 20 2 20 2s0 4-2.5 6.5l-5 5-3-3 4-6Z" />
      <path d="M9.5 10.5 5 11l-1.5 4L8 13.5M13.5 14.5 13 19l4-1.5" />
      <path d="M6.5 17.5c-1 1-1 3.5-1 3.5s2.5 0 3.5-1" />
    </StrokeIcon>
  )
}

export function Mail(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="2.75" y="4.75" width="18.5" height="14.5" rx="2.5" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </StrokeIcon>
  )
}

export function Sparkles(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M12 3.5c.6 4.2 2.3 5.9 6.5 6.5-4.2.6-5.9 2.3-6.5 6.5-.6-4.2-2.3-5.9-6.5-6.5 4.2-.6 5.9-2.3 6.5-6.5Z" />
      <path d="M18.5 15.5c.25 1.75.95 2.45 2.7 2.7-1.75.25-2.45.95-2.7 2.7-.25-1.75-.95-2.45-2.7-2.7 1.75-.25 2.45-.95 2.7-2.7Z" />
    </StrokeIcon>
  )
}

export function Menu(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </StrokeIcon>
  )
}

export function Close(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </StrokeIcon>
  )
}

export function Compass(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </StrokeIcon>
  )
}

export function Shield(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M12 3 5 5.8v5.4c0 4.2 2.9 7.8 7 9.8 4.1-2 7-5.6 7-9.8V5.8L12 3Z" />
      <path d="m9 12 2 2 4-4.5" />
    </StrokeIcon>
  )
}

export function Cube(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
    </StrokeIcon>
  )
}

export function Search(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </StrokeIcon>
  )
}

export function ChevronRight(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m9 6 6 6-6 6" />
    </StrokeIcon>
  )
}

export function PlayStore(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594ZM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924Zm12.207 10.065 3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973Zm0 2.067-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21Z" />
    </svg>
  )
}
