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
      offset: 20, // jarak trigger
      anchorPlacement: "center-center",
      mirror: true,
    });
    AOS.refresh();
  }, []);

  return <>{children}</>;
}
