import { db } from "@/lib/firebase";
import { collection, query, orderBy, getDocs, limit } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limitParam = searchParams.get("limit") || "50";

    const q = query(
      collection(db, "ucapan"),
      orderBy("createdAt", "desc"),
      limit(parseInt(limitParam)),
    );

    const querySnapshot = await getDocs(q);
    const ucapanList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate().toISOString() || null,
    }));

    return NextResponse.json(
      {
        success: true,
        data: ucapanList,
        total: ucapanList.length,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching ucapan:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data ucapan" },
      { status: 500 },
    );
  }
}
