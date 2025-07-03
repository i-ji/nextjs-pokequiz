import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { PokeType } from "@/app/types";

export const useQuestionState = () => {
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

  return { pokeInfo, difficulty, q, isCorrent, aggregatedAnswer };
};
