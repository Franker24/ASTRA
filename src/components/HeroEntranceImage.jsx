import { animated, useSpring } from '@react-spring/web'

/**
 * Entrance animation for the primary hero image on each page.
 * Uses inline transform so Tailwind opacity/blend classes on `className` still apply.
 *
 * - Default: slight zoom, vertical slide, brightness lift (stronger “reveal”).
 * - gentle: fade + tiny zoom only — better when the hero is very transparent or stacks with star fields / heavy gradients (e.g. Home).
 */
export function HeroEntranceImage({
  className = '',
  alt,
  src,
  toScale = 1,
  gentle = false,
  /** Used with `gentle`: final opacity (omit opacity-* from className in that case). */
  fadeOpacity = 0.5,
  ...props
}) {
  const style = useSpring(
    gentle
      ? {
          from: {
            opacity: 0,
            transform: `scale(${toScale * 1.015})`,
          },
          to: {
            opacity: fadeOpacity,
            transform: `scale(${toScale})`,
          },
          config: { tension: 85, friction: 28 },
        }
      : {
          from: {
            transform: `scale(${toScale * 1.06}) translate3d(0, 14px, 0)`,
            filter: 'brightness(0.92)',
          },
          to: {
            transform: `scale(${toScale}) translate3d(0, 0, 0)`,
            filter: 'brightness(1)',
          },
          config: { mass: 1, tension: 120, friction: 32 },
        }
  )

  return <animated.img alt={alt} src={src} className={className} style={style} {...props} />
}
