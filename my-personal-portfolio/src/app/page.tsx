import MySkills from "@/components/MySkills";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <MySkills />
      <Footer />
    </main>
  );
}
