import React from 'react';
import '../globals.css';
import Providers from './Providers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'DAGSNAP',
  description: 'DAGSNAP ',
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            closeOnClick
            draggable
            pauseOnHover
          />
        </Providers>
      </body>
    </html>
  );
}
