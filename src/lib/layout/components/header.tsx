import { ThemeToggle } from '@/lib/components/theme-toggle';

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-base-100/80 backdrop-blur-md">
      <section className="wrapper mx-auto flex items-center justify-between py-2">
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
};
