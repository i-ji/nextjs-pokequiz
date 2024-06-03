import React, { NonDirectionalSuspenseListProps } from "react";
import Link from "next/link";

interface Result {
  difficulty: string | null;
  isCorrent: boolean[];
}

const Result = ({ difficulty, isCorrent }: Result) => {
  const onlyCorrent = isCorrent.filter((cor) => {
    if (cor) {
      return cor;
    }
  });
  const correntNum = onlyCorrent.length;

  return (
    <div className="mx-5 text-center text-lg">
      <h1 className="text-3xl sm:text-4xl font-bold pb-10">恭喜!</h1>
      <p className="pb-10">
        あなたの正答率は10問中
        <span className="font-bold underline">{correntNum}問</span>
        です。
      </p>
      <Link href={`/question?difficulty=${difficulty}&q=1`}>再チャレンジ</Link>
    </div>
  );
};

export default Result;
