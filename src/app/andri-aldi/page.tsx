import DetailPage, { DetailPageProps } from "@/layouts/detail-page";
import { addressAndri } from "@/layouts/event-section";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Invitation Aldi Pratama and Andriana Amaliyah Samsi",
  description: "Undangan Pernikahan Aldi Pratama dan Andriana Amaliyah Samsi",
  openGraph: {
    title: "Wedding Invitation Aldi Pratama and Andriana Amaliyah Samsi",
    description: "Undangan Pernikahan Aldi Pratama dan Andriana Amaliyah Samsi",
    images: [{ url: "https://invitation.solvrae.web.id/og-image.png" }],
  },
};

export default function AndriAldiPage() {
  const propsDetailPage: DetailPageProps = {
    heroSection: {
      date: "Minggu, 29 Maret 2026",
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
      bride: "wanita",
    },
    countdownSection: {
      targetDate: "29 maret 2026",
      targetTime: "09:00",
    },
    direction: "reverse",
  };

  return (
    <Suspense fallback={<div>Loadiing</div>}>
      <DetailPage {...propsDetailPage} />
    </Suspense>
  );
}
