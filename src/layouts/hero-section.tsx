"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

type HeroSectionProps = {
  to?: string;
  onOpenInvitation: () => void;
  isOpen: boolean;
};

export default function HeroSection({
  to,
  onOpenInvitation,
  isOpen,
}: HeroSectionProps) {
  return (
    <section
      className={clsx(
        "w-full min-h-screen flex justify-center items-center relative",
        {
          // sebelum dibuka → FIXED
          "fixed inset-0 z-50": !isOpen,

          // setelah dibuka → NORMAL FLOW (STATIC)
          "relative z-auto": isOpen,
        },
      )}
    >
      {/* CONTENT */}
      <div className="z-10 text-center space-y-4 px-4">
        <p>The Wedding Of</p>

        <h1 className="text-4xl font-allura">
          Aldi Taher
          <br />&<br />
          Andri Susanti
        </h1>

        <p>Kamis, dd mm yyyy</p>

        <div className="w-[100px] mx-auto">
          <Image
            src="/wayang.webp"
            alt="wayang"
            width={400}
            height={400}
            priority
          />
        </div>

        <div className="space-y-2">
          <p>Kepada Yth:</p>
          <p>Bpk/Ibu/Saudara/i</p>
          <p className="font-bold">{to ?? "Anda"}</p>

          {!isOpen && (
            <Button
              size="sm"
              className="bg-accent-primary"
              onClick={onOpenInvitation}
            >
              Buka Undangan
            </Button>
          )}
        </div>
      </div>

      {/* BACKGROUND */}
      <Image
        src="/flower-border.webp"
        alt="flower"
        fill
        className="object-cover"
        priority
      />
    </section>
  );
}
