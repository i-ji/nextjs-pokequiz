"use client";

import Link from "next/link";
import Question from "@/components/question/Question";
import Result from "@/components/question/Result";
import { useQuestionState } from "@/utils/hooks/question/useQuestionTopState";

const QuestionTop = () => {
  const { pokeInfo, difficulty, q, isCorrent, aggregatedAnswer } =
    useQuestionState();

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
    <div className="max-w-[768px] mx-auto mt-10 pb-10">
      <div className="text-right mr-5">
        <Link href={"/"}>首页</Link>
      </div>

      {q === "result" ? result() : questions()}
    </div>
  );
};

export default QuestionTop;
