"use client";

import Image from "next/image";

export default function GallerySection() {
  return (
    <div
      className={
        "w-full min-h-screen p-4 flex flex-col justify-center items-center text-center space-y-4"
      }
    >
      <h3 className={"text-4xl font-allura"} data-aos={"fade-up"}>
        Our Gallery
      </h3>
      <p className={"text-sm"} data-aos={"fade-up"}>
        Constantly, consistently, continually, You.
      </p>
      <div className={"w-full grid grid-cols-2 gap-2"}>
        <Image
          src={"/couple-1.jpeg"}
          alt={"couple image"}
          width={400}
          height={400}
          className={
            "w-full aspect-[3/4] rounded-lg object-cover object-center"
          }
          data-aos={"fade-zoom-in"}
        />
        <Image
          src={"/couple-2.jpeg"}
          alt={"couple image"}
          width={400}
          height={400}
          className={
            "w-full aspect-[3/4] rounded-lg object-cover object-center"
          }
          data-aos={"fade-zoom-in"}
        />
        <Image
          src={"/couple-3.jpeg"}
          alt={"couple image"}
          width={400}
          height={400}
          className={
            "w-full aspect-[3/4] rounded-lg object-cover object-center"
          }
          data-aos={"fade-zoom-in"}
        />
        <Image
          src={"/couple-1.jpeg"}
          alt={"couple image"}
          width={400}
          height={400}
          className={
            "w-full aspect-[3/4] rounded-lg object-cover object-center"
          }
          data-aos={"fade-zoom-in"}
        />
        <Image
          src={"/couple-2.jpeg"}
          alt={"couple image"}
          width={400}
          height={400}
          className={
            "w-full aspect-[3/4] rounded-lg object-cover object-center"
          }
          data-aos={"fade-zoom-in"}
        />
        <Image
          src={"/couple-3.jpeg"}
          alt={"couple image"}
          width={400}
          height={400}
          className={
            "w-full aspect-[3/4] rounded-lg object-cover object-center"
          }
          data-aos={"fade-zoom-in"}
        />
        <Image
          src={"/couple-3.jpeg"}
          alt={"couple image"}
          width={400}
          height={400}
          className={
            "w-full aspect-video col-span-2 rounded-lg object-cover object-center"
          }
          data-aos={"fade-zoom-in"}
        />
      </div>
    </div>
  );
}
