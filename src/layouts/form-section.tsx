"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner"; // atau toast library pilihan Anda

interface Ucapan {
  id: string;
  nama: string;
  ucapan: string;
  createdAt: string;
}

export default function FormSection() {
  const [nama, setNama] = useState("");
  const [kehadiran, setKehadiran] = useState("");
  const [ucapan, setUcapan] = useState("");
  const [ucapanList, setUcapanList] = useState<Ucapan[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingList, setLoadingList] = useState(true);

  // Fetch ucapan saat component mount
  useEffect(() => {
    fetchUcapan();
  }, []);

  const fetchUcapan = async () => {
    try {
      setLoadingList(true);
      const response = await fetch("/api/ucapan/list", {
        cache: "no-cache",
      });
      const result = await response.json();

      if (result.success) {
        setUcapanList(result.data);
      }
    } catch (error) {
      console.error("Error fetching ucapan:", error);
    } finally {
      setLoadingList(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nama || !kehadiran || !ucapan) {
      toast.error("Semua field harus diisi!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/ucapan", {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nama, kehadiran, ucapan }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Ucapan berhasil dikirim!");
        // Reset form
        setNama("");
        setKehadiran("");
        setUcapan("");
        // Refresh list
        fetchUcapan();
      } else {
        toast.error(result.error || "Gagal mengirim ucapan");
      }
    } catch (error) {
      console.error("Error submitting ucapan:", error);
      toast.error("Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    // Kurang dari 1 menit
    if (diffInSeconds < 60) {
      return "Baru saja";
    }

    // Kurang dari 1 jam (dalam menit)
    if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} menit yang lalu`;
    }

    // Kurang dari 1 hari (dalam jam)
    if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} jam yang lalu`;
    }

    // 1 hari yang lalu
    if (diffInSeconds < 172800) {
      // 2 hari
      return "1 hari yang lalu";
    }

    // 2 hari yang lalu
    if (diffInSeconds < 259200) {
      // 3 hari
      return "2 hari yang lalu";
    }

    // Lebih dari 3 hari, tampilkan format tanggal lengkap
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div
      className={
        "w-full text-black py-6 px-4 flex flex-col justify-center items-center space-y-6"
      }
    >
      <h3 className={"text-4xl font-allura text-white"}>Doa dan Ucapan</h3>
      <div
        className={"w-full divide-y py-6 rounded-xl bg-white"}
        data-aos="fade-down"
      >
        <form onSubmit={handleSubmit} className={"w-full space-y-4 p-4"}>
          <div className={"space-y-2 w-full"}>
            <Label htmlFor={"nama-tamu"}>Name</Label>
            <Input
              type="text"
              id="nama-tamu"
              name="nama-tamu"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              disabled={loading}
            />
          </div>
          <div className={"space-y-2 w-full"}>
            <Label htmlFor={"Konfirmasi Kehadiran"}>Konfirmasi Kehadiran</Label>
            <div className={"w-full"}>
              <Select
                value={kehadiran}
                onValueChange={setKehadiran}
                disabled={loading}
              >
                <SelectTrigger className={"w-full"}>
                  <SelectValue placeholder={"Konfirmasi Kehadiran"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value={"hadir"}>Hadir</SelectItem>
                    <SelectItem value={"tidak-hadir"}>Tidak Hadir</SelectItem>
                    <SelectItem value={"ragu"}>Masih Ragu</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className={"space-y-2 w-full"}>
            <Label htmlFor={"ucapan"}>Ucapan</Label>
            <Textarea
              id="ucapan"
              placeholder={"tulis ucapan anda"}
              value={ucapan}
              onChange={(e) => setUcapan(e.target.value)}
              disabled={loading}
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Mengirim..." : "Kirim Ucapan"}
          </Button>
        </form>

        {/*untuk ucapan*/}
        <div
          className={
            "w-full p-4 max-h-[300px] overflow-y-auto overflow-x-hidden space-y-4 relative"
          }
        >
          <div className={"w-full flex justify-center"}>
            <div className={"flex space-x-2 sticky-top-0"}>
              <MessageSquare className={"w-4 h-4"} />
              <span className={"text-sm font-semibold"}>
                {ucapanList.length} Ucapan
              </span>
            </div>
          </div>

          {loadingList ? (
            <p className="text-center text-sm text-gray-500">Memuat...</p>
          ) : ucapanList.length === 0 ? (
            <p className="text-center text-sm text-gray-500">
              Belum ada ucapan
            </p>
          ) : (
            ucapanList.map((item) => (
              <div
                key={item.id}
                className={"w-full flex space-x-2 items-start"}
              >
                <div
                  className={
                    "w-8 p-1 rounded-full aspect-square bg-black flex-shrink-0"
                  }
                >
                  <Image
                    src={"/solvrae_white.svg"}
                    alt={"logo"}
                    width={50}
                    height={50}
                    unoptimized={true}
                  />
                </div>
                <div className={"flex-1"}>
                  <p className={"font-semibold text-sm"}>{item.nama}</p>
                  <p className={"text-sm text-pretty"}>{item.ucapan}</p>
                  <span className={"font-thin text-xs text-gray-500"}>
                    {formatDate(item.createdAt)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
