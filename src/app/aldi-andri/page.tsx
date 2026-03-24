import { Metadata } from "next";

import { Suspense } from "react";
import DetailPage, { DetailPageProps } from "@/layouts/detail-page";
import { addressAndri } from "@/layouts/event-section";

export const metadata: Metadata = {
  title: "Wedding Invitation Aldi Pratama and Andriana Amaliyah Samsi",
  description: "Undangan Pernikahan Aldi Pratama dan Andriana Amaliyah Samsi",
  openGraph: {
    title: "Wedding Invitation Aldi Pratama and Andriana Amaliyah Samsi",
    description: "Undangan Pernikahan Aldi Pratama dan Andriana Amaliyah Samsi",
    images: [{ url: "https://invitation.solvrae.web.id/og-image.png" }],
  },
};
export default function AldiAndriPage() {
  const propsDetailPage: DetailPageProps = {
    heroSection: {
      date: "Rabu, 01 April 2026",
    },
    eventSection: {
      marriageCovenant: {
        day: "Minggu",
        date: "29",
        month: "Maret 2026",
        time: "09:00 WIB",
        address: {
          street: "Jl.Gatot Subroto, Kampung Baru, Bulusan",
          detail: "(Gudang Karka Selatan STP)",
          linkMap: addressAndri,
        },
      },
      reception: {
        day: "Rabu",
        date: "01",
        month: "April 2026",
        time: "Bebas",
        address: {
          street: "Perum Puri Brawijaya Permai Blok FH 10",
          detail: "(Baluk - Kebalenan)",
          linkMap: "https://maps.app.goo.gl/Ckm3YmaUTy5itJdm9?g_st=ic",
        },
      },
      bride: {
        akad: "wanita",
        resepsi: "pria",
      },
      event: "Ngunduh Mantu",
    },
    countdownSection: {
      targetDate: "01 april 2026",
      targetTime: "18:00",
    },
  };

  return (
    <Suspense fallback={<div>Loadiing</div>}>
      <DetailPage {...propsDetailPage} />
    </Suspense>
  );
}
