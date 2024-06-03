"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { PokeType } from "../types";
import Question from "@/components/question/Question";
import Result from "@/components/question/Result";

const Page = () => {
  // クエリ文字列を受け取る
  const searchParams = useSearchParams();
  const difficulty = searchParams.get("difficulty");
  const q = searchParams.get("q");

  // クイズの描写
  const [pokeInfo, setPokeInfo] = useState<PokeType[]>([]);

  useEffect(() => {
    const getIndividualPoke = async () => {
      const res = await fetch(`/api?difficulty=${difficulty}`).then((res) =>
        res.json()
      );
      setPokeInfo(res);
    };

    getIndividualPoke();

    if (Number(q) >= 11) {
      notFound();
    }
  }, [q, difficulty]);

  // 正答率の集計
  const [isCorrent, setIsCorrent] = useState<boolean[]>([]);

  const aggregatedAnswer = (bool: boolean) => {
    const newIsCorrent = [...isCorrent, bool];
    setIsCorrent(newIsCorrent);
  };

  // isCorrentを空にする
  useEffect(() => {
    if (q === "1") {
      setIsCorrent([]);
    }
  }, [q]);

  const questions = () => {
    return pokeInfo.map((poke) => {
      return (
        <Question
          key={poke.id}
          poke={poke}
          q={q}
          difficulty={difficulty}
          aggregatedAnswer={aggregatedAnswer}
        />
      );
    });
  };

  const result = () => {
    return <Result difficulty={difficulty} isCorrent={isCorrent} />;
  };

  return (
    <div className="max-w-[768px] mx-auto mt-10">
      <div className="text-right mr-5">
        <Link href={"/"}>TOP</Link>
      </div>

      {q === "result" ? result() : questions()}
    </div>
  );
};

export default Page;
