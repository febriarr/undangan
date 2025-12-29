"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: string; // Format: "12 Desember 2026"
  targetTime?: string; // Format: "14:00" (opsional, default 00:00)
}

export default function Countdown({
  targetDate = "12 Desember 2026",
  targetTime = "14:00",
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const parseIndonesianDate = (dateString: string, time: string): Date => {
    const months: { [key: string]: number } = {
      januari: 0,
      februari: 1,
      maret: 2,
      april: 3,
      mei: 4,
      juni: 5,
      juli: 6,
      agustus: 7,
      september: 8,
      oktober: 9,
      november: 10,
      desember: 11,
    };

    const parts = dateString.toLowerCase().split(" ");
    const day = parseInt(parts[0]);
    const month = months[parts[1]];
    const year = parseInt(parts[2]);

    const [hours, minutes] = time.split(":").map(Number);

    return new Date(year, month, day, hours, minutes, 0);
  };

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const target = parseIndonesianDate(targetDate, targetTime);
      const difference = +target - +new Date();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, targetTime]);

  const timeBlocks = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-8">
      {/* Display tanggal target */}
      <div className="text-center mb-8">
        <h3 className={"text-3xl font-allura"}>Counting The Days</h3>
      </div>

      {/* Countdown blocks */}
      <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6">
        {timeBlocks.map((block, index) => (
          <div key={block.label} className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <div className="bg-accent-primary rounded-xl shadow-lg w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 flex items-center justify-center transition-all hover:shadow-xl">
                <span className="text-2xl sm:text-3xl md:text-5xl">
                  {String(block.value).padStart(2, "0")}
                </span>
              </div>
              <span className="text-xs sm:text-sm md:text-base  mt-3 font-semibold uppercase tracking-wide">
                {block.label}
              </span>
            </div>
            {index < timeBlocks.length - 1 && (
              <span className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
