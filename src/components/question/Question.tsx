"use clietn";

import React, { FormEvent, useEffect, useRef, useState } from "react";
import { PokeType } from "@/app/types";
import { symbolTokana, typeTranlate, hiraToKana } from "@/app/utils";
import Corrent from "./Corrent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Question {
  poke: PokeType;
  q: string | null;
  difficulty: string | null;
  aggregatedAnswer: (bool: boolean) => void;
}

const Question = ({ poke, q, difficulty, aggregatedAnswer }: Question) => {
  const [inputText, setInputText] = useState("");

  const [isCorrent, setIsCorrent] = useState<boolean | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  // フォーカスを当てる
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // 回答した際の処理
  const answerPoke = (e: FormEvent) => {
    e.preventDefault();

    if (inputText === "") return;

    if (poke.japaneseName === hiraToKana(symbolTokana(inputText))) {
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
      return <div>正解!</div>;
    } else if (isCorrent === false) {
      return <div>不正解...</div>;
    } else if (isCorrent === null) {
      return <div></div>;
    }
  };

  return (
    <div className="text-center space-y-5">
      <p>Q{q} このポケモンの名前は？</p>
      <h1 className="font-bold text-3xl sm:text-4xl">
        {poke.chineseName}
        {/* {poke.japaneseName} */}
      </h1>

      <form onSubmit={answerPoke}>
        <input
          type="text"
          className="bg-[#ffde00] p-1 text-[#de2910] rounded mr-4"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          disabled={isCorrent !== null}
          ref={inputRef}
        />
        <button className="bg-[#ffde00] p-1 text-[#de2910] rounded">
          こたえ
        </button>
      </form>

      <div className="space-y-3 w-4/5 sm:w-3/5 mx-auto">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>ポケモンのタイプを見る</AccordionTrigger>
            <AccordionContent className="text-left">
              {typeTranlate(poke.types.type1)}&nbsp;
              {typeTranlate(poke.types.type2)}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>ポケモンの分類を見る</AccordionTrigger>
            <AccordionContent className="text-left">
              {poke.genera}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {isJudgment()}

      {isCorrent !== null && (
        <Corrent poke={poke} q={q} difficulty={difficulty} />
      )}
    </div>
  );
};

export default Question;
