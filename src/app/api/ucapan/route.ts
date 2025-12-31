// app/api/ucapan/route.ts
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nama, kehadiran, ucapan } = body;

    // Validasi input
    if (!nama || !kehadiran || !ucapan) {
      return NextResponse.json(
        { error: "Semua field harus diisi" },
        { status: 400 },
      );
    }

    // Tambahkan data ke Firestore
    const docRef = await addDoc(collection(db, "ucapan"), {
      nama,
      kehadiran,
      ucapan,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json(
      {
        success: true,
        id: docRef.id,
        message: "Ucapan berhasil ditambahkan",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error adding ucapan:", error);
    return NextResponse.json(
      { error: "Gagal menambahkan ucapan" },
      { status: 500 },
    );
  }
}
