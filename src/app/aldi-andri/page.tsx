import { Metadata } from "next";
import DetailPage from "@/app/aldi-andri/_components/detail";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Wedding Invitation Aldi Pratama dan Andrianna Amalia Samsi",
  description: "Undangan Pernikahan Aldi Pratama dan Andrianna Amalia Samsi",
};
export default function AldiAndriPage() {
  return (
    <Suspense fallback={<div>Loadiing</div>}>
      <DetailPage />
    </Suspense>
  );
}
