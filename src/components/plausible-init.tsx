import { useEffect } from 'react'

const PLAUSIBLE_DOMAIN = 'eldadfux.com'

let plausibleInitialized = false

/**
 * Client-only Plausible analytics init.
 * Dynamic import ensures the tracker is only loaded in the browser, avoiding
 * SSR/resolution issues with rolldown and @plausible-analytics/tracker.
 * Guard ensures init() is only called once (React Strict Mode / HMR can run effect twice).
 */
export function PlausibleInit() {
  useEffect(() => {
    if (plausibleInitialized) return
    void import('@plausible-analytics/tracker').then(({ init }) => {
      if (plausibleInitialized) return
      init({
        domain: PLAUSIBLE_DOMAIN,
        autoCapturePageviews: true,
      })
      plausibleInitialized = true
    })
  }, [])
  return null
}
