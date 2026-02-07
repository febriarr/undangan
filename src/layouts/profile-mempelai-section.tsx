"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProfileMempelaiSection() {
  return (
    <div
      className={
        "w-full  overflow-hidden flex flex-col justify-center items-center relative"
      }
    >
      <div className={"w-full top-0"}>
        <Image
          src={"/divider.webp"}
          alt={"divider"}
          width={400}
          height={400}
          className={"w-full h-full object-cover"}
        />
      </div>
      <div className={"absolute top-[20%] rotate-45 -left-20 w-50 z-0"}>
        <Image
          src={"/flower.webp"}
          alt={"divider"}
          width={400}
          height={400}
          className={"w-full h-full object-cover"}
        />
      </div>
      <div className={"absolute bottom-[20%] -rotate-45 -right-20 w-50 z-0"}>
        <Image
          src={"/flower.webp"}
          alt={"divider"}
          width={400}
          height={400}
          className={"w-full h-full object-cover"}
        />
      </div>

      <div className={"space-y-6 flex flex-col text-center my-12 px-4 z-10"}>
        <div className={"space-y-2"} data-aos="fade-up">
          <h2 className={"text-4xl font-allura"}>Ar Rum: 21</h2>
          <p className={"text-sm"}>
            Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
            pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu
            merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan
            kasih sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </p>
        </div>
        <div className={"my-4 space-y-4"}>
          <h3 className={"text-2xl"}>The Couple</h3>
          <div
            className={"space-y-4 flex flex-col justify-center items-center"}
          >
            <div
              className={"w-50 aspect-3/4 overflow-hidden rounded-full"}
              data-aos="fade-right"
            >
              <Image
                src={"/aldi.jpeg"}
                alt={"aldi"}
                width={400}
                height={400}
                className={"w-full h-full object-cover"}
              />
            </div>
            <h3 className={"text-3xl font-allura"}>Aldi Pratama</h3>
            <p className={"text-sm"}>
              Putra Dari
              <br />
              Bapak Nasipi & Ibu Asmiyah
            </p>
            <Button
              variant={"outline"}
              size={"sm"}
              className={"bg-transparent border-white"}
              asChild={true}
            >
              <Link
                href={
                  "https://www.instagram.com/pratamaaldi9?igsh=MWJlbDR4c2RmOXRrMw=="
                }
                target={"_blank"}
              >
                <Image
                  src={"/instagram.svg"}
                  alt={"ig"}
                  width={20}
                  height={20}
                  unoptimized={true}
                />
                Instagram
              </Link>
            </Button>
          </div>
          <p className={"text-3xl font-allura"}>&</p>
          <div
            className={"space-y-4 flex flex-col justify-center items-center"}
          >
            <div
              className={"w-50 aspect-3/4 overflow-hidden rounded-full"}
              data-aos={"fade-left"}
            >
              <Image
                src={"/andri-2.jpeg"}
                alt={"aldi"}
                width={400}
                height={400}
                className={"w-full h-full object-cover"}
              />
            </div>
            <h3 className={"text-3xl font-allura"}>Andriana Amaliyah Samsi</h3>
            <p className={"text-sm"}>
              Puri Dari
              <br />
              Bapak Soehendro & Ibu Sa{"'"}ana
            </p>
            <Button
              variant={"outline"}
              size={"sm"}
              className={"bg-transparent border-white"}
              asChild={true}
            >
              <Link
                href={
                  "https://www.instagram.com/euandriiaana?igsh=cnJiYjUzZDQ2cHY4"
                }
                target={"_blank"}
              >
                <Image
                  src={"/instagram.svg"}
                  alt={"ig"}
                  width={20}
                  height={20}
                  unoptimized={true}
                />
                Instagram
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className={"w-full bottom-0"}>
        <Image
          src={"/divider.webp"}
          alt={"divider"}
          width={400}
          height={400}
          className={"w-full h-full object-cover"}
        />
      </div>
    </div>
  );
}
