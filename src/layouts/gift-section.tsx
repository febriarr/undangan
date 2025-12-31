"use client";

import Image from "next/image";

export default function GiftSection() {
  return (
    <div className={"flex justify-center items-center px-4 py-16 relative"}>
      <div className={"absolute flex items-center w-full h-full -z-0 inset-0"}>
        <Image
          src={"/flower.webp"}
          alt={"background"}
          width={400}
          height={400}
          className={"object-center object-cover "}
        />
      </div>
      <div
        className={
          "w-full flex flex-col space-y-6 justify-center items-center z-10"
        }
      >
        <div className={"text-center space-y-4"} data-aos="fade-up">
          <div className={"w-full mb-4 flex justify-center"}>
            <h3
              className={
                "text-4xl font-allura pb-4 border-b border-white w-fit"
              }
            >
              Wedding Gift
            </h3>
          </div>
          <p className={"text-sm text-pretty"}>
            Tanpa mengurangi rasa hormat, bagi Bapak/Ibu/Saudara/i yang ingin
            memberikan tanda kasih untuk kami, dapat melalui:
          </p>
        </div>
        <div
          className={
            "w-full bg-white text-black p-4 flex flex-col justify-center items-center rounded-xl space-y-4 "
          }
          data-aos="fade-down"
        >
          <div className={"w-full"}>
            <div className={"w-full flex justify-between items-end mb-6"}>
              <p className={"font-medium"}>Mandiri</p>
              <div className={"w-30"}>
                <Image
                  src={"/mandiri-transparent.png"}
                  alt={"logo mandiri"}
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <p className={"text-sm"}>No rek: 12345678</p>
            <p className={"text-sm"}>Atas Nama</p>
          </div>
          <div className={"w-full "}>
            <div className={"w-full flex justify-between items-center"}>
              <p className={"font-medium"}>Bank Central Asia</p>
              <div className={"w-30 h-20"}>
                <Image
                  src={"/logo-bca.png"}
                  alt={"logo mandiri"}
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <p className={"text-sm"}>No rek: 12345678</p>
            <p className={"text-sm"}>Atas Nama</p>
          </div>
        </div>
        <div
          className={"bg-white p-4 rounded-xl text-black"}
          data-aos="fade-up"
        >
          <div className={"w-full flex justify-center"}>
            <Image
              src={"/gift-box.jpeg"}
              alt={"logo mandiri"}
              width={400}
              height={400}
            />
          </div>
          <p className={"text-sm"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
            fugiat hic minus, mollitia nobis quo?
          </p>
          <p className={"text-sm"}>Atas Nama: lorem ipsum</p>
        </div>
        <p className={"text-sm text-center"}>
          Mohon untuk memastikan rekening atau alamat kado sudah sesuai, sebelum
          anda mengirimkan hadiah. Jika ada ragu jangan sungkan untuk menanyakan
          kepada yang bersangkutan
        </p>
      </div>
    </div>
  );
}
