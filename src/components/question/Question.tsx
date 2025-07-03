"use clietn";

import React, { useEffect } from "react";
import { PokeType } from "@/app/types";
import { typeTranlate } from "@/app/utils";
import Corrent from "./Corrent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { hangulToKana } from "@/app/utils";
import { modifiedQuestion } from "@/app/utils";
import { useQuestionState } from "@/utils/hooks/question/useQuestionState";

interface Question {
  poke: PokeType;
  q: string | null;
  difficulty: string | null;
  aggregatedAnswer: (bool: boolean) => void;
}

const Question = ({ poke, q, difficulty, aggregatedAnswer }: Question) => {
  const {
    inputText,
    setInputText,
    isCorrent,
    inputRef,
    answerPoke,
    isJudgment,
    linkRef,
  } = useQuestionState({ poke, aggregatedAnswer });

  useEffect(() => {
    if (isCorrent !== null && linkRef.current) {
      linkRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isCorrent, linkRef]);

  return (
    <div className="text-center space-y-5">
      <p>Q{q} このポケモンの名前は？</p>
      <h1 className="font-bold text-3xl sm:text-4xl">
        {modifiedQuestion(poke.chineseName)}
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
        <button
          className="bg-[#ffde00] p-1 text-[#de2910] rounded"
          disabled={isCorrent !== null}
        >
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
              {hangulToKana(poke.genera)}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="font-bold text-xl">{isJudgment()}</div>

      {isCorrent !== null && (
        <Corrent poke={poke} q={q} difficulty={difficulty} linkRef={linkRef} />
      )}
    </div>
  );
};

export default Question;
