import type { ReactNode } from 'react';

import { ThemeProvider } from '@/lib/components/theme-provider';

import { Footer } from './components/footer';
import { Header } from './components/header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="wrapper">{children}</main>
      <Footer />
    </div>
  </ThemeProvider>
);

export default Layout;
