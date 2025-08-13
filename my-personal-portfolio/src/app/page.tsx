import Image from "next/image";
import vahab from "./../../public/IMG_0451.jpg";
import MySkills from "@/components/MySkills";
export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex items-center justify-between">
        <section className="ml-24">
          <h1 className="mb-4 text-3xl font-bold">
            HI, my name is Vahab Afsharian
          </h1>
          <p className="text-lg">
            I’m a frontend developer passionate about building beautiful web
            experiences.
          </p>
        </section>

        <section className="flex flex-1 justify-center">
          <Image
            src={vahab}
            height={300}
            alt="vahab afsharian"
            width={300}
            className="border-old-gold-600 rounded-full border-4 shadow-xl"
          />
        </section>
      </div>
      <MySkills />
    </main>
  );
}
