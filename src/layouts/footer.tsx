import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={"text-sm text-center p-4 py-10 w-full"}>
      Buat Website Anda bersama
      <Link
        href={"https://www.solvrae.web.id/"}
        prefetch={false}
        target={"_blank"}
        className={
          "underline flex w-full space-x-2 font-semibold  justify-center items-center"
        }
      >
        <Image
          src={"/solvrae_white.svg"}
          alt={"logo"}
          width={30}
          height={30}
          unoptimized={true}
        />{" "}
        Solvrae
      </Link>
      <br />
      AssetBy{" "}
      <Link
        href={"https://the.gandilova.com/"}
        prefetch={false}
        target={"_blank"}
      >
        Gandilova
      </Link>{" "}
    </footer>
  );
}
