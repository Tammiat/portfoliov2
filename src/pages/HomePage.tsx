import { AboutSection } from '@/components/sections/AboutSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { MainStackSection } from '@/components/sections/MainStackSection';
import { SelectedProjectsSection } from '@/components/sections/SelectedProjectsSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SelectedProjectsSection />
      <AboutSection />
      <MainStackSection />
    </>
  );
}
