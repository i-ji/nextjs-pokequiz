import React, { NonDirectionalSuspenseListProps } from "react";
import Link from "next/link";

interface Result {
  difficulty: string | null;
  isCorrent: boolean[];
}

const Result = ({ difficulty, isCorrent }: Result) => {
  // 正解数を割り出す処理
  const onlyCorrent = isCorrent.filter((cor) => {
    if (cor) {
      return cor;
    }
  });
  const correntNum = onlyCorrent.length;

  // メッセージ
  const getMessage = () => {
    if (correntNum <= 3) {
      return "令人失望的...";
    } else if (correntNum <= 7) {
      return "再努力一点";
    } else if (correntNum <= 10) {
      return "恭喜!";
    }
  };

  return (
    <div className="mx-5 text-center text-lg">
      <h1 className="text-3xl sm:text-4xl font-bold pb-10">{getMessage()}</h1>
      <p className="pb-10">
        あなたの正答数は10問中
        <span className="font-bold underline">{correntNum}問</span>
        です。
      </p>
      <Link href={`/question?difficulty=${difficulty}&q=1`}>再チャレンジ</Link>
    </div>
  );
};

export default Result;
