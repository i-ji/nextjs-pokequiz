import { useState, useRef, useEffect, FormEvent } from "react";
import { hangulToKana, symbolTokana, hiraToKana } from "@/app/utils";
import { PokeType } from "@/app/types";
export const useQuestionState = ({
  poke,
  aggregatedAnswer,
}: {
  poke: PokeType;
  aggregatedAnswer: (bool: boolean) => void;
}) => {
  const [inputText, setInputText] = useState("");

  // フォーカスを当てる
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const linkRef = useRef<HTMLAnchorElement>(null);

  // 回答した際の処理
  const [isCorrent, setIsCorrent] = useState<boolean | null>(null);
  const answerPoke = (e: FormEvent) => {
    e.preventDefault();

    if (inputText === "") return;

    if (
      hangulToKana(poke.japaneseName) ===
      symbolTokana(hiraToKana(inputText)).trim()
    ) {
      aggregatedAnswer(true);
      setIsCorrent(true);
    } else {
      aggregatedAnswer(false);
      setIsCorrent(false);
    }

    setInputText("");
  };

  //結果判別
  const isJudgment = () => {
    if (isCorrent) {
      return "正解!";
    } else if (isCorrent === false) {
      return "不正解...";
    } else if (isCorrent === null) {
      return "";
    }
  };

  return {
    inputText,
    setInputText,
    isCorrent,
    inputRef,
    answerPoke,
    isJudgment,
    linkRef,
  };
};
