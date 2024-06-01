"use client";

import Image from "next/image";
import Desc from "@/components/top/Description";
import Defficulty from "@/components/top/Defficulty";

export default function Home() {
  return (
    <div className=" max-w-[768px] mx-auto mt-10">
      <Desc />
      <Defficulty />
    </div>
  );
}
