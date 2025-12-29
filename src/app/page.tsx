import HeroSection from "@/layouts/hero-section";
import ProfileMempelaiSection from "@/layouts/profile-mempelai-section";
import EventSection from "@/layouts/event-section";
import Image from "next/image";
import Countdown from "@/layouts/countdown";
import GallerySection from "@/layouts/gallery-section";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-google-sans text-white overflow-x-clip">
      <main
        className={
          "flex flex-col justify-center items-center w-full max-w-xl mx-auto "
        }
      >
        <HeroSection />
        <ProfileMempelaiSection />
        <EventSection />
        <div
          className={
            "flex flex-col relative justify-center items-center text-center"
          }
        >
          <div className={"w-full"}>
            <Image
              src={"/divider.webp"}
              alt={"divider"}
              width={400}
              height={400}
              className={"w-full h-full object-cover"}
            />
          </div>
          <div className={"my-6 px-4"}>
            <Countdown targetDate={"12 Desember 2026"} targetTime={"08:00"} />
          </div>
          <div className={"w-full"}>
            <Image
              src={"/divider.webp"}
              alt={"divider"}
              width={400}
              height={400}
              className={"w-full h-full object-cover"}
            />
          </div>
        </div>
        <GallerySection />
      </main>
    </div>
  );
}
