import type { Metadata, Viewport } from 'next';

import Layout from '@/lib/layout';
import { fontSans } from '@/lib/styles/fonts';
import { cn } from '@/lib/styles/utils';

import '@/lib/styles/globals.css';

const APP_NAME = 'nextarter-tailwind';

export const metadata: Metadata = {
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_NAME,
  },
  applicationName: APP_NAME,
  description: 'Next.js + TailwindCSS v3 + TypeScript template',
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    description: 'Next.js + TailwindCSS v3 + TypeScript template',
    images: {
      alt: 'nextarter-tailwind.sznm.dev og-image',
      url: 'https://og-image.sznm.dev/**nextarter-tailwind**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250',
    },
    title: 'nextarter-tailwind',
    url: 'https://nextarter-tailwind.sznm.dev',
  },
  title: APP_NAME,
  twitter: {
    card: 'summary_large_image',
    creator: '@agstnsnathaniel',
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  themeColor: '#FFFFFF',
  width: 'device-width',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable
      )}
    >
      <Layout>
        <div className="flex-1">{children}</div>
      </Layout>
    </body>
  </html>
);

export default RootLayout;
