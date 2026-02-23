'use client'

/**
 * Shared space theme: deep black with subtle cosmic gradient and optional starfield.
 * Use once per page as a fixed full-screen layer behind content.
 */
export function SpaceBackground() {
  return (
    <>
      {/* Base: deep space black with very subtle blue tint at edges */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 50% 0%, rgba(56, 189, 248, 0.04) 0%, transparent 50%),
            radial-gradient(ellipse 100% 100% at 50% 100%, rgba(30, 58, 138, 0.02) 0%, transparent 45%),
            #050508
          `,
        }}
      />
      {/* Minimal starfield: sparse dots for depth, not literal */}
      <div
        className="fixed inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(1.5px 1.5px at 20% 30%, rgba(255,255,255,0.35), transparent),
            radial-gradient(1px 1px at 60% 70%, rgba(255,255,255,0.4), transparent),
            radial-gradient(1.5px 1.5px at 80% 15%, rgba(255,255,255,0.25), transparent),
            radial-gradient(1px 1px at 40% 85%, rgba(255,255,255,0.3), transparent),
            radial-gradient(1px 1px at 90% 55%, rgba(255,255,255,0.2), transparent),
            radial-gradient(1.5px 1.5px at 10% 60%, rgba(255,255,255,0.28), transparent),
            radial-gradient(1px 1px at 70% 40%, rgba(255,255,255,0.22), transparent),
            radial-gradient(1px 1px at 35% 20%, rgba(255,255,255,0.18), transparent)
          `,
          backgroundSize: '100% 100%',
        }}
      />
    </>
  )
}
