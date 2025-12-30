"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div
      className={
        "w-full min-h-screen flex justify-center items-center relative"
      }
    >
      <div className={"content"}>
        <div
          className={
            "space-y-4 text-center flex flex-col items-center justify-center"
          }
        >
          <div className={"space-y-2 px-4"}>
            <p>The Wedding Of</p>
            <h1 className={"text-4xl font-allura"}>
              Aldi Taher
              <br />& <br /> Andri Susanti
            </h1>
            <p>Kamis, dd mm yyyy</p>
          </div>
          <div className={"w-[100px] aspect-square z-10"}>
            <Image
              src={"/wayang.webp"}
              alt={"logo wayang"}
              width={400}
              height={400}
              className={"w-full object-center object-cover"}
              priority={true}
            />
          </div>
          <div className={"space-y-2"}>
            <p>Kepada Yth:</p>
            <p>Bpk/Ibu/Saudara/i</p>
            <p className={"font-bold"}>Nama Tamu</p>
            <Button size={"sm"} className={"bg-accent-primary"}>
              Buka Undangan
            </Button>
          </div>
        </div>
      </div>
      <div className={"w-full h-full absolute inset-0"}>
        <Image
          src={"/flower-border.webp"}
          alt={"flower-border"}
          width={400}
          height={400}
          className={"object-center object-cover w-full h-full"}
        />
      </div>
    </div>
  );
}
