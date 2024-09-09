'use client';
import React, { useState, useEffect } from 'react';
import LandingPage from '@/components/LandingPage';
import Image from 'next/image';
import logo from '@/images/dag.png';
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full">
        <Image src={logo} alt="logo" width={100} height={100} />
      </div>
    </div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <main className="h-screen bg-indigo-50">{isLoading ? <Loading /> : <LandingPage />}</main>;
}
