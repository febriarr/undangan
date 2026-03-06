"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Link from "next/link";

export type DetailDate = {
  day: string;
  date: string;
  month: string;
  time: string;
  address: {
    street: string;
    detail: string;
    linkMap: string;
  };
};

export type EventSectionProps = {
  reception: DetailDate;
  marriageCovenant: DetailDate;
  bride: string;
  event?: string;
};

export default function EventSection({
  reception,
  marriageCovenant,
  bride,
  event = "Resepsi",
}: EventSectionProps) {
  return (
    <div
      className={
        "flex flex-col space-y-4 justify-center items-center relative min-h-screen w-full"
      }
    >
      <div className={"w-full h-full z-0 absolute inset-0"}>
        <Image
          src={"/bg-night.webp"}
          alt={"background"}
          className={"w-full h-full object-cover object-center"}
          width={400}
          height={400}
        />
      </div>
      <div className={"w-full h-full z-0 absolute top-0"}>
        <Image
          src={"/bg-joglo-with-tree-transparent.webp"}
          alt={"background"}
          className={"w-full h-full object-cover object-center"}
          width={400}
          height={400}
        />
      </div>
      <div
        className={
          "w-full z-10 py-12 space-y-4 px-4 flex flex-col justify-center items-center"
        }
      >
        <div className={"text-center space-y-4"} data-aos={"fade-down"}>
          <h3 className={"text-3xl font-allura"}>Assalamualaikum Wr Wb</h3>
          <p className={"text-sm"}>
            Dengan segala kerendahan hati kami bermaksud ingin mengundang
            bapak/ibu/saudara/i untuk hadir didalam acara pernikahan kami, yang
            akan diselenggarakan pada
          </p>
        </div>
        <div
          className={
            "w-full md:w-4/5 border-4 border-neutral-600 rounded-t-[50%] rounded-b-xl bg-black p-6 py-14 space-y-4 flex flex-col justify-center items-center text-center"
          }
          data-aos={"fade-up"}
        >
          <h4 className={"text-3xl font-allura pb-4 border-b w-fit"}>
            Akad Nikah
          </h4>
          <p className={"text-xl"}>{marriageCovenant.day}</p>
          <p className={"text-4xl"}>{marriageCovenant.date}</p>
          <p className={"text-lg"}>{marriageCovenant.month}</p>
          <p className={"text-sm"}>{marriageCovenant.time}</p>
          <p className={"text-sm"}>
            <MapPin className={"w-4 h-4"} />
          </p>
          <p className={"text-sm"}>Kediaman Mempelai {bride}</p>
          <p className={"text-sm"}>
            {marriageCovenant.address.street}
            <br />
            {marriageCovenant.address.detail}
          </p>
          <Button
            size={"sm"}
            className={"bg-accent-primary hover:bg-accent-primary/90"}
            asChild={true}
          >
            <Link href={marriageCovenant.address.linkMap} target={"_blank"}>
              <MapPin className={"w-4 h-4"} /> Google Maps
            </Link>
          </Button>
        </div>
        <div
          className={
            "w-full md:w-4/5 border-4 border-neutral-600 rounded-t-[50%] rounded-b-xl bg-black p-6 py-14 space-y-4 flex flex-col justify-center items-center text-center"
          }
          data-aos={"fade-up"}
        >
          <h4 className={"text-3xl font-allura pb-4 border-b w-fit"}>
            {event}
          </h4>
          <p className={"text-xl"}>{reception.day}</p>
          <p className={"text-3xl"}>{reception.date}</p>
          <p className={"text-lg"}>{reception.month}</p>
          <p className={"text-sm"}>{reception.time}</p>
          <p className={"text-sm"}>
            <MapPin className={"w-4 h-4"} />
          </p>
          <p className={"text-sm"}>Kediaman Mempelai {bride}</p>
          <p className={"text-sm"}>
            {reception.address.street}
            <br />
            {reception.address.detail}
          </p>
          <Button
            size={"sm"}
            className={"bg-accent-primary hover:bg-accent-primary/90"}
            asChild={true}
          >
            <Link href={reception.address.linkMap} target={"_blank"}>
              <MapPin className={"w-4 h-4"} /> Google Maps
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export const addressAndri = "https://maps.app.goo.gl/q9hk7UPuMULtMpdS8?g_st=iw";
