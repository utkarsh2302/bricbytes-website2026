import { Suspense, lazy } from 'react';

const GlobeScene = lazy(() => import('./GlobeScene'));

interface GlobeProps {
  className?: string;
}

export function Globe({ className = '' }: GlobeProps) {
  return (
    <div className={className}>
      <Suspense fallback={<div style={{ width: '100%', height: '100%', background: 'transparent' }} />}>
        <GlobeScene />
      </Suspense>
    </div>
  );
}
