import { dag4 } from '@stardust-collective/dag4';

// Testnet
// Block Explorer API: https://be-testnet.constellationnetwork.io
// L0 API: https://l0-lb-testnet.constellationnetwork.io
// L1 API: https://l1-lb-testnet.constellationnetwork.io

export const connectToDagNetwork = () => {
  dag4.account.connect({
    networkVersion: '2.0',
    testnet: true,
  });
};

export const connectToDagCustomNetwork = () => {
  dag4.account.connect({
    networkVersion: '2.0',
    testnet: true,
    beUrl: 'https://be-testnet.constellationnetwork.io/',
    l0Url: 'https://l0-lb-testnet.constellationnetwork.io/',
    l1Url: 'https://l1-lb-testnet.constellationnetwork.io/',
  });
};
