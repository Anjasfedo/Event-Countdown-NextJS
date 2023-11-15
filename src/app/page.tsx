"use client";

import { assets } from "@/utils/asset-utils";
import Image from "next/image";
import { type Alphabet, alphabets } from "@/utils/alphabet-utils";
import { cn } from "@/utils/tailwind-utils";
import { Poppins } from "next/font/google";

import CountDownTimer from "@/components/countdown-timer";

import { useEffect, useState } from "react";

const poppin = Poppins({
  weight: "600",
  subsets: ["latin"],
});

export default function Home() {
  const [currentAlphabet, setCurrentAlphabet] = useState<Alphabet>(
    alphabets[0]
  );

  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    let currIdx = 0;
    const rotateFW = () => {
      setCurrentAlphabet(alphabets[currIdx]);
      currIdx = (currIdx + 1) % alphabets.length;
    };
    const intervals = setInterval(rotateFW, 2000);
    return () => clearInterval(intervals);
  }, []);

  useEffect(() => {
    setShowBackground(true);
  }, []);

  return (
    <main>
      <div
        className={cn(
          "fixed inset-0 transition-colors delay-100 duration-700 opacity-25",
          {
            "bg-purple-300": currentAlphabet === "a",
            "bg-sky-300": currentAlphabet === "b",
            "bg-yellow-300": currentAlphabet === "c",
            "bg-teal-300": currentAlphabet === "d",
            "bg-blue-300": currentAlphabet === "e",
            "bg-green-300": currentAlphabet === "f",
            "bg-orange-400": currentAlphabet === "g",
            "bg-red-300": currentAlphabet === "h",
            "bg-neutral-300": currentAlphabet === "i",
          }
        )}
      />
      <Image
        width={1200}
        height={1200}
        role="Presentation"
        alt="Gradient"
        className="fixed inset-0 w-screen h-screen object-cover"
        src={assets.gradient}
      />
      <div
        className="fixed inset-0 opacity-30"
        style={{
          backgroundImage: `url(${assets.square})`,
          backgroundSize: "30px",
        }}
      />
      <div
        className={cn(
          "bg-black fixed inset-0 transition-opacity duration-[1500ms]",
          !showBackground ? "opacity-100" : "opacity-0"
        )}
      />

      <div className="mt-48 max-w-7xl mx-auto">
        <div className="flex flex-col items-center relative z-10">
          <h1
            className={`text-5xl max-w-3xl text-center leading-snug mb-8 ${poppin.className}`}
          >
            <span
              className={cn("transition-colors duration-200", {
                "text-purple-300": currentAlphabet === "a",
                "text-sky-300": currentAlphabet === "b",
                "text-yellow-300": currentAlphabet === "c",
                "text-teal-300": currentAlphabet === "d",
                "text-blue-300": currentAlphabet === "e",
                "text-green-300": currentAlphabet === "f",
                "text-orange-400": currentAlphabet === "g",
                "text-red-300": currentAlphabet === "h",
                "text-neutral-300": currentAlphabet === "i",
              })}
            >
              {" "}
              Book{" "}
            </span>
            Return Countdown
          </h1>

          <p className="mb-8">
            <span className="text-gray-300">On 22 November 2023</span>
          </p>

          <CountDownTimer currentAlphabet={currentAlphabet} />
        </div>
      </div>
    </main>
  );
}
