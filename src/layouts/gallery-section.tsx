"use client";

import Image from "next/image";

export default function GallerySection() {
  return (
    <div
      className={
        "w-full min-h-screen p-4 flex flex-col justify-center items-center text-center space-y-4"
      }
    >
      <h3 className={"text-3xl font-allura"}>Our Gallery</h3>
      <p className={"text-sm"}>Constantly, consistently, continually, You.</p>
      <div className={"w-full grid grid-cols-2 gap-2"}>
        <Image
          src={"/couple-1.jpeg"}
          alt={"couple image"}
          width={400}
          height={400}
          className={
            "w-full aspect-square rounded-lg object-cover object-center"
          }
        />
        <Image
          src={"/couple-2.jpeg"}
          alt={"couple image"}
          width={400}
          height={400}
          className={
            "w-full aspect-square rounded-lg object-cover object-center"
          }
        />
        <Image
          src={"/couple-3.jpeg"}
          alt={"couple image"}
          width={400}
          height={400}
          className={
            "w-full aspect-square rounded-lg object-cover object-center"
          }
        />
        <Image
          src={"/couple-1.jpeg"}
          alt={"couple image"}
          width={400}
          height={400}
          className={
            "w-full aspect-square rounded-lg object-cover object-center"
          }
        />
        <Image
          src={"/couple-2.jpeg"}
          alt={"couple image"}
          width={400}
          height={400}
          className={
            "w-full aspect-square rounded-lg object-cover object-center"
          }
        />
        <Image
          src={"/couple-3.jpeg"}
          alt={"couple image"}
          width={400}
          height={400}
          className={
            "w-full aspect-square rounded-lg object-cover object-center"
          }
        />
      </div>
    </div>
  );
}
