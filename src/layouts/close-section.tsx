"use client";

import Image from "next/image";

export default function CloseSection() {
  return (
    <div
      className={
        "w-full h-screen flex justify-center items-center relative text-center"
      }
    >
      <div
        className={"z-10 space-y-4 p-4  flex flex-col w-full justify-center"}
        data-aos="fade-zoom-in"
      >
        <p className={"text-sm"}>
          Terima kasih, Atas kehadiran dan doa restu bapak/ibu/saudara/i Kami
          yang berbahagia
        </p>
        <p className={"text-sm"}>Hormat Kami</p>
        <h3 className={"text-4xl font-allura"}>
          Aldi Taher
          <br />& <br /> Andri Susanti
        </h3>
        <h3 className={"text-3xl font-allura"}>Wassalamualaikum Wr Wb</h3>
      </div>
      <div className={"absolute w-full h-full bottom-0"}>
        <Image
          src={"/bg-joglo-with-tree-transparent.webp"}
          alt={"couple image"}
          width={500}
          height={500}
          className={"w-full h-full object-cover"}
        />
      </div>
    </div>
  );
}
