'use client';

import Header from '@/app/layout/Header';
import LandingPage from '@/app/components/LandingPage';

export default function Home() {
  return (
    <main className="h-screen bg-[#FCFAF6]">
      <Header />
      <LandingPage />
    </main>
  );
}
