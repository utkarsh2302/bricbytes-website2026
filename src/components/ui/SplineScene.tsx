'use client'

import { Suspense, lazy } from 'react'
import { useTheme } from '@/ThemeContext'

const GlobeScene = lazy(() => import('@/components/hero/GlobeScene').then(m => ({ default: m.GlobeScene })))

export function SplineScene(): React.ReactNode {
  const { theme } = useTheme()

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center" style={{ minHeight: '400px' }}>
          <span className="loader"></span>
        </div>
      }
    >
      <GlobeScene theme={theme} />
    </Suspense>
  )
}
