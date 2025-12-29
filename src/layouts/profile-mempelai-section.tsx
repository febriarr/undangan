"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

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
      <div className={"absolute top-[20%] rotate-45 -left-20 w-[200px] -z-0"}>
        <Image
          src={"/flower.webp"}
          alt={"divider"}
          width={400}
          height={400}
          className={"w-full h-full object-cover"}
        />
      </div>
      <div
        className={"absolute bottom-[20%] -rotate-45 -right-20 w-[200px] -z-0"}
      >
        <Image
          src={"/flower.webp"}
          alt={"divider"}
          width={400}
          height={400}
          className={"w-full h-full object-cover"}
        />
      </div>

      <div className={"space-y-6 flex flex-col text-center my-12 px-4 z-10"}>
        <div className={"space-y-2"}>
          <h2 className={"text-2xl"}>Ar Rum: 21</h2>
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
              className={"w-[150px] aspect-[3/4] overflow-hidden rounded-full"}
            >
              <Image
                src={"/aldi.jpeg"}
                alt={"aldi"}
                width={400}
                height={400}
                className={"w-full h-full object-cover"}
              />
            </div>
            <h3 className={"text-3xl font-allura"}>Aldi Taher</h3>
            <p className={"text-sm"}>
              Anak Dari
              <br />
              Bapak Lorem & Ipsum
            </p>
            <Button
              variant={"outline"}
              size={"sm"}
              className={"bg-transparent border-white"}
            >
              <Image
                src={"/instagram.svg"}
                alt={"ig"}
                width={20}
                height={20}
                unoptimized={true}
              />
              Instagram
            </Button>
          </div>
          <p className={"text-3xl font-allura"}>&</p>
          <div
            className={"space-y-4 flex flex-col justify-center items-center"}
          >
            <div
              className={"w-[150px] aspect-[3/4] overflow-hidden rounded-full"}
            >
              <Image
                src={"/andri.jpeg"}
                alt={"aldi"}
                width={400}
                height={400}
                className={"w-full h-full object-cover"}
              />
            </div>
            <h3 className={"text-3xl font-allura"}>Andri Susanti</h3>
            <p className={"text-sm"}>
              Anak Dari
              <br />
              Bapak Lorem & Ipsum
            </p>
            <Button
              variant={"outline"}
              size={"sm"}
              className={"bg-transparent border-white"}
            >
              <Image
                src={"/instagram.svg"}
                alt={"ig"}
                width={20}
                height={20}
                unoptimized={true}
              />
              Instagram
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
