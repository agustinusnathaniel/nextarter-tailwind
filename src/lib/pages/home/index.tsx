import { CTASection } from './components/cta-section';
import { SomeText } from './components/some-text';

export const Home = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-8 text-center">
      <SomeText />
      <CTASection />
    </div>
  );
};
