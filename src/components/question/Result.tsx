import React, { NonDirectionalSuspenseListProps } from "react";
import Link from "next/link";

interface Result {
  difficulty: string | null;
}

const Result = ({ difficulty }: Result) => {
  return (
    <div className="mx-5 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold pb-10">恭喜!</h1>
      <Link href={`/question/1?difficulty=${difficulty}`}>再チャレンジ</Link>
    </div>
  );
};

export default Result;
