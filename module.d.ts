declare module '@metamask/providers' {
  export interface MetaMaskInpageProvider {
    request: (request: { method: string; params?: any[] }) => Promise<any>;
  }
}
declare module 'qrcode.react';
