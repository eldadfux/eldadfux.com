import { init } from '@plausible-analytics/tracker'
import { useEffect } from 'react'

const PLAUSIBLE_DOMAIN = 'eldadfux.com'

/**
 * Client-only Plausible analytics init.
 * Must run in browser; init() is no-op during SSR.
 */
export function PlausibleInit() {
  useEffect(() => {
    init({
      domain: PLAUSIBLE_DOMAIN,
      // bindToWindow: true (default) so Plausible's verification tool can detect the install
      autoCapturePageviews: true,
    })
  }, [])
  return null
}
