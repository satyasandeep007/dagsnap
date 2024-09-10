import '../globals.css';
import { Providers } from './Providers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS

export const metadata: any = {
  title: 'DAGSNAP',
  description: 'DAGSNAP ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}

          <ToastContainer
            position="top-right" // Position of the toast
            autoClose={3000} // Auto close after 3 seconds
            hideProgressBar={true} // Hide progress bar
            closeOnClick
            draggable
            pauseOnHover
          />
        </Providers>
      </body>
    </html>
  );
}
