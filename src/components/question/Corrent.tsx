import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PokeType } from "@/app/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Corrent {
  poke: PokeType;
  q: string;
  difficulty: string | null;
}

const Corrent = ({ poke, q, difficulty }: Corrent) => {
  const getLink = () => {
    if (q === "10") {
      return `result?difficulty=${difficulty}`;
    }
    return `${Number(q) + 1}?difficulty=${difficulty}`;
  };

  return (
    <>
      <Card className="w-4/5 sm:w-3/5 mx-auto">
        <CardHeader>
          <CardTitle className=" text-3xl sm:text-4xl">
            {poke.japaneseName}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src={poke.img}
            alt=""
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
