import { useEffect } from 'react'

const APPWRITE_ANALYTICS_ENDPOINT = 'https://fra.cloud.appwrite.io/v1'
const APPWRITE_ANALYTICS_PROJECT = 'ashkelon.news.stage'
const APPWRITE_ANALYTICS_PROPERTY = 'eldadfux-com'

let appwriteAnalyticsInitialized = false

/**
 * Client-only Appwrite Analytics init.
 * Dynamic import keeps the SDK out of the SSR bundle.
 * Guard ensures start() is only called once (React Strict Mode / HMR can run effect twice).
 */
export function AppwriteAnalyticsInit() {
  useEffect(() => {
    if (appwriteAnalyticsInitialized) return
    void import('appwrite').then(({ Client, Analytics, Tracking }) => {
      if (appwriteAnalyticsInitialized) return
      const client = new Client()
        .setEndpoint(APPWRITE_ANALYTICS_ENDPOINT)
        .setProject(APPWRITE_ANALYTICS_PROJECT)
      new Tracking(new Analytics(client), APPWRITE_ANALYTICS_PROPERTY).start()
      appwriteAnalyticsInitialized = true
    })
  }, [])
  return null
}
