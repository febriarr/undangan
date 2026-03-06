"use client";
import EventSection, { EventSectionProps } from "@/layouts/event-section";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import HeroSection from "@/layouts/hero-section";
import ProfileMempelaiSection from "@/layouts/profile-mempelai-section";
import Image from "next/image";
import Countdown from "@/layouts/countdown";
import GiftSection from "@/layouts/gift-section";
import FormSection from "@/layouts/form-section";
import CloseSection from "@/layouts/close-section";
import Footer from "@/layouts/footer";

export type DetailPageProps = {
  heroSection: {
    date: string;
  };
  eventSection: EventSectionProps;
  countdownSection: {
    targetDate: string;
    targetTime: string;
  };
  direction?: "normal" | "reverse";
};

export default function DetailPage({
  heroSection,
  eventSection,
  countdownSection,
  direction,
}: DetailPageProps) {
  const params = useSearchParams();
  const namaTamu = params.get("to");

  const formatName = (name: string) => {
    return name
      .replace(/[-_]/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const firstSectionRef = useRef<HTMLDivElement | null>(null);

  /**
   *  LOCK SCROLL sebelum undangan dibuka
   */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "auto" : "hidden";
    document.body.style.height = isOpen ? "auto" : "100vh";

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    };
  }, [isOpen]);

  /**
   *  AUTO SCROLL setelah buka undangan
   */
  useEffect(() => {
    if (isOpen && firstSectionRef.current) {
      requestAnimationFrame(() => {
        firstSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const timeout = window.setTimeout(() => {
      AOS.refreshHard();
    }, 300);
    return () => window.clearTimeout(timeout);
  }, [isOpen]);

  /**
   * ️ OPEN INVITATION
   */
  const handleOpenInvitation = () => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const playFromReff = () => {
      audio.currentTime = 39; // detik reff
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    };

    if (audio.readyState >= 1) {
      // metadata sudah ada
      playFromReff();
    } else {
      audio.addEventListener("loadedmetadata", playFromReff, { once: true });
    }

    setIsOpen(true);
  };

  /**
   *  TOGGLE MUSIC
   */
  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true));
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-google-sans">
      {/*  AUDIO */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/beautiful-in-white.mp3" type="audio/mpeg" />
      </audio>

      {/*  MUSIC BUTTON */}
      {isOpen && (
        <Button
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-50 "
          size={"icon-sm"}
        >
          {isPlaying ? <Volume2 /> : <VolumeX />}
        </Button>
      )}

      {/* HERO */}
      <HeroSection
        to={formatName(namaTamu ?? "Anda")}
        isOpen={isOpen}
        onOpenInvitation={handleOpenInvitation}
        date={heroSection.date}
        direction={direction}
      />

      {/* CONTENT */}
      {isOpen && (
        <main className="max-w-xl mx-auto flex flex-col">
          <div ref={firstSectionRef}>
            <ProfileMempelaiSection direction={direction} />
          </div>

          <EventSection {...eventSection} />

          <div className="text-center">
            <Image
              src="/divider.webp"
              alt="divider"
              width={400}
              height={400}
              className={"w-full"}
            />
            <div className="my-6 px-4">
              <Countdown
                targetDate={countdownSection.targetDate}
                targetTime={countdownSection.targetTime}
              />
            </div>
            <Image
              src="/divider.webp"
              alt="divider"
              width={400}
              height={400}
              className={"w-full"}
            />
          </div>

          <GiftSection />
          <FormSection />
          <CloseSection />
          <Footer />
        </main>
      )}
    </div>
  );
}
