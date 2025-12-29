"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function EventSection() {
  return (
    <div
      className={
        "flex flex-col space-y-4 justify-center items-center relative min-h-screen w-full"
      }
    >
      <div className={"w-full h-full -z-0 absolute inset-0"}>
        <Image
          src={"/bg-night.webp"}
          alt={"background"}
          className={"w-full h-full object-cover object-center"}
          width={400}
          height={400}
        />
      </div>
      <div className={"w-full h-full -z-0 absolute top-0"}>
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
        <div className={"text-center space-y-4"}>
          <h3 className={"text-3xl font-allura"}>Assalamualaikum Wr Wb</h3>
          <p className={"text-sm"}>
            Dengan segala kerendahan hati kami bermaksud ingin mengundang
            bapak/ibu/saudara/i untuk hadir didalam acara pernikahan kami, yang
            akan diselenggarakan pada
          </p>
        </div>
        <div
          className={
            "w-full md:w-4/5 border-4 border-neutral-600 rounded-t-[50%] rounded-b-xl bg-black p-6 space-y-4 flex flex-col justify-center items-center text-center"
          }
        >
          <h4 className={"text-xl font-allura pb-4 border-b w-fit"}>
            Akad Nikah
          </h4>
          <p className={"text-xl"}>Hari</p>
          <p className={"text-3xl"}>0</p>
          <p className={"text-lg"}>Bulan Tahun</p>
          <p className={"text-sm"}>Jam</p>
          <p className={"text-sm"}>icon</p>
          <p className={"text-sm"}>Kediaman Mempelai pria/wanita</p>
          <p className={"text-sm"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            perspiciatis quaerat tempore!
          </p>
          <Button size={"sm"} className={"bg-accent-primary"}>
            Google Maps
          </Button>
        </div>
        <div
          className={
            "w-full md:w-4/5 border-4 border-neutral-600 rounded-t-[50%] rounded-b-xl bg-black p-6 space-y-4 flex flex-col justify-center items-center text-center"
          }
        >
          <h4 className={"text-xl font-allura pb-4 border-b w-fit"}>Resepsi</h4>
          <p className={"text-xl"}>Hari</p>
          <p className={"text-3xl"}>0</p>
          <p className={"text-lg"}>Bulan Tahun</p>
          <p className={"text-sm"}>Jam</p>
          <p className={"text-sm"}>icon</p>
          <p className={"text-sm"}>Kediaman Mempelai pria/wanita</p>
          <p className={"text-sm"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            perspiciatis quaerat tempore!
          </p>
          <Button size={"sm"} className={"bg-accent-primary"}>
            Google Maps
          </Button>
        </div>
      </div>
    </div>
  );
}
