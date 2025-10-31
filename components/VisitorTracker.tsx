'use client'

import { useEffect } from 'react'

export default function VisitorTracker() {
  useEffect(() => {
    // Only send once per hour
    if (document.cookie.includes('loopera_visited=1')) return

    const sendVisit = async () => {
      try {
        const response = await fetch('/api/visit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            url: window.location.href,
            path: window.location.pathname,
            referrer: document.referrer,
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString()
          })
        })

        if (!response.ok) {
          console.error('VisitorTracker: non-200 response', response.status, response.statusText)
          return
        }

        const data = await response.json()
        if (!data.success) console.error('VisitorTracker failed:', data.error)
        else console.log('VisitorTracker: visit logged successfully')
      } catch (err) {
        console.error('VisitorTracker fetch error:', err)
      }
    }

    sendVisit()

    // Set cookie for 1 hour
    document.cookie = 'loopera_visited=1; path=/; max-age=3600; SameSite=Lax'
  }, [])

  return null
}
