"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

type HeroSectionProps = {
  to?: string;
  onOpenInvitation: () => void;
  isOpen: boolean;
  date: string;
  direction?: "normal" | "reverse";
};

export default function HeroSection({
  to,
  onOpenInvitation,
  isOpen,
  date,
  direction = "normal",
}: HeroSectionProps) {
  return (
    <section
      className={clsx(
        "w-full min-h-screen flex justify-center items-center relative",
        {
          "fixed inset-0 z-50": !isOpen,

          "relative z-auto": isOpen,
        },
      )}
    >
      {/* CONTENT */}
      <div className="z-10 text-center space-y-4 px-4">
        <p>The Wedding Of</p>

        <div
          className={`flex gap-4 ${direction === "normal" ? "flex-col" : "flex-col-reverse"}`}
        >
          <h1 className="text-4xl font-allura">Aldi Pratamas</h1>
          <span className={"text-4xl font-allura"}>&</span>
          <h1 className="text-4xl font-allura">Andriana Amaliyah S</h1>
        </div>

        <p>{date}</p>

        <div className="w-25 mx-auto">
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
