import MySkills from "@/components/MySkills";
import HeroSection from "@/components/HeroSection";
export default function Home() {
    return (
        <main className="flex flex-col">
            <HeroSection />
            <MySkills />
        </main>
    );
}
