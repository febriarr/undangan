import Link from "next/link";

export default function Footer() {
  return (
    <footer className={"text-sm text-center p-4 border-t w-full"}>
      PoweredBy{" "}
      <Link
        href={"https://www.solvrae.web.id/"}
        prefetch={false}
        target={"_blank"}
        className={"underline"}
      >
        Solvrae
      </Link>
      . AssetBy{" "}
      <Link
        href={"https://the.gandilova.com/"}
        prefetch={false}
        target={"_blank"}
        className={"underline"}
      >
        Gandilova
      </Link>{" "}
    </footer>
  );
}
