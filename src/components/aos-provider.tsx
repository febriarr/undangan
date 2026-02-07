"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi (ms)
      easing: "ease-out-cubic",
      once: true, // animasi hanya sekali
      offset: 120, // jarak trigger
      anchorPlacement: "top-bottom",
      mirror: false,
    });
    const handleRefresh = () => {
      AOS.refreshHard();
    };
    AOS.refresh();
    window.addEventListener("load", handleRefresh);
    window.addEventListener("resize", handleRefresh);

    return () => {
      window.removeEventListener("load", handleRefresh);
      window.removeEventListener("resize", handleRefresh);
    };
  }, []);

  return <>{children}</>;
}
