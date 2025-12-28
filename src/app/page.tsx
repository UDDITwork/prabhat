import Navigation from '@/components/Navigation';
import CoverSection from '@/components/CoverSection';
import ContentsSection from '@/components/ContentsSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import AchievementsSection from '@/components/AchievementsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <CoverSection />
      <ContentsSection />
      <EducationSection />
      <ExperienceSection />
      <AchievementsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
