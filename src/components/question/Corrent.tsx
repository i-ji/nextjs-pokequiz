import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PokeType } from "@/app/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { hangulToKana } from "@/app/utils";

interface Corrent {
  poke: PokeType;
  q: string | null;
  difficulty: string | null;
}

const Corrent = ({ poke, q, difficulty }: Corrent) => {
  // 次の問題orリザルトへのリンク
  const getLink = () => {
    if (q === "10") {
      return `?difficulty=${difficulty}&q=result`;
    }
    return `?difficulty=${difficulty}&q=${Number(q!) + 1}`;
  };

  return (
    <>
      <Card className="w-4/5 sm:w-3/5 mx-auto">
        <CardHeader>
          <CardTitle className=" text-3xl sm:text-4xl">
            {hangulToKana(poke.japaneseName)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src={poke.img}
            alt={hangulToKana(poke.japaneseName)}
            width={60}
            height={60}
            className="w-4/5 sm:w-3/5 mx-auto"
          />
        </CardContent>
        <CardFooter>
          <div className="ml-auto">
            <Link href={`${getLink()}`}>
              {q === "10" ? "結果を見る" : "次の問題へ"}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default Corrent;
