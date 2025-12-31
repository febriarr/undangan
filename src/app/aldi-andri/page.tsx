import { Metadata } from "next";
import DetailPage from "@/app/aldi-andri/_components/detail";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Wedding Invitation Aldi Taher dan Andri Susanti",
  description:
    "Aduh Senangnya Pengantin Baru, Duduk melamun sambil ent** ent***an",
};
export default function AldiAndriPage() {
  return (
    <Suspense fallback={<div>Loadiing</div>}>
      <DetailPage />
    </Suspense>
  );
}
