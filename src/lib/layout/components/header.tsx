import { ThemeToggle } from '@/lib/components/theme-toggle';

export const Header = () => (
  <header className="bg-base-100/80 sticky top-0 z-10 w-full backdrop-blur-md">
    <section className="wrapper mx-auto flex items-center justify-between py-2">
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </section>
  </header>
);
