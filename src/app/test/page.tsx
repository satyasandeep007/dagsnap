'use client';

import { useState } from 'react';

export default function SnapPage() {
  const [snapInstalled, setSnapInstalled] = useState(false);
  const defaultSnapOrigin = `local:http://localhost:8080`;

  const connectSnap = async (
    snapId: string = defaultSnapOrigin,
    params: Record<'version' | string, unknown> = {},
  ) => {
    await window.ethereum?.request({
      method: 'wallet_requestSnaps',
      params: {
        [snapId]: {},
      },
    });
    setSnapInstalled(true);
  };

  return (
    <div>
      <h1>MetaMask Snap Integration</h1>
      {snapInstalled ? (
        <p>MetaMask Snap is installed!</p>
      ) : (
        <button onClick={() => connectSnap()}>Connect MetaMask Snap</button>
      )}
    </div>
  );
}
