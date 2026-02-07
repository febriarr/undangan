"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import AOS from "aos";

import HeroSection from "@/layouts/hero-section";
import ProfileMempelaiSection from "@/layouts/profile-mempelai-section";
import EventSection from "@/layouts/event-section";
import Countdown from "@/layouts/countdown";
import GallerySection from "@/layouts/gallery-section";
import LoveStorySection from "@/layouts/love-story-section";
import GiftSection from "@/layouts/gift-section";
import FormSection from "@/layouts/form-section";
import CloseSection from "@/layouts/close-section";
import Footer from "@/layouts/footer";
import { Button } from "@/components/ui/button";

export default function DetailPage() {
  const params = useSearchParams();
  const namaTamu = params.get("to");

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
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
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
        <source src="/lagu-jorok.mp3" type="audio/mpeg" />
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
        to={namaTamu ?? "Anda"}
        isOpen={isOpen}
        onOpenInvitation={handleOpenInvitation}
      />

      {/* CONTENT */}
      {isOpen && (
        <main className="max-w-xl mx-auto flex flex-col">
          <div ref={firstSectionRef}>
            <ProfileMempelaiSection />
          </div>

          <EventSection />

          <div className="text-center">
            <Image
              src="/divider.webp"
              alt="divider"
              width={400}
              height={400}
              className={"w-full"}
            />
            <div className="my-6 px-4">
              <Countdown targetDate="29 maret 2026" targetTime="06:00" />
            </div>
            <Image
              src="/divider.webp"
              alt="divider"
              width={400}
              height={400}
              className={"w-full"}
            />
          </div>

          <GallerySection />
          <LoveStorySection />
          <GiftSection />
          <FormSection />
          <CloseSection />
          <Footer />
        </main>
      )}
    </div>
  );
}
