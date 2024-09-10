import '../globals.css';
import { Providers } from './Providers';

export const metadata: any = {
  title: 'DAGSNAP',
  description: 'DAGSNAP ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
