'use client';

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, polygonMumbai, sepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskProvider } from '@/hooks';

const { chains, provider } = configureChains([mainnet, polygon, sepolia, polygonMumbai], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: 'NextJS Snap',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <MetaMaskProvider>{children}</MetaMaskProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
