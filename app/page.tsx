'use client';

import dynamic from 'next/dynamic';

const LandingPageContent = dynamic(
  () => import('./page-content').then((mod) => ({ default: mod.default })),
  { ssr: false }
);

export default LandingPageContent;
