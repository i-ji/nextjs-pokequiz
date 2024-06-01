"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { PokeType } from "../../types";
import Question from "@/components/question/Question";
import Result from "@/components/question/Result";

interface Props {
  params: {
    q: string;
  };
}

const Page = (props: Props) => {
  const [pokeInfo, setPokeInfo] = useState<PokeType[]>([]);
  const searchParams = useSearchParams();
  const difficulty = searchParams.get("difficulty");

  useEffect(() => {
    const getIndividualPoke = async () => {
      const res = await fetch(`/api?difficulty=${difficulty}`).then((res) =>
        res.json()
      );
      setPokeInfo(res);
    };

    getIndividualPoke();

    if (Number(props.params.q) >= 11) {
      notFound();
    }
  }, [props.params.q, difficulty]);

  const questions = () => {
    return pokeInfo.map((poke) => {
      return (
        <Question
          key={poke.id}
          poke={poke}
          q={props.params.q}
          difficulty={difficulty}
        />
      );
    });
  };

  const result = () => {
    return <Result difficulty={difficulty} />;
  };

  // console.log(difficulty);

  return (
    <div className="max-w-[768px] mx-auto mt-10">
      <div className="text-right mr-5">
        <Link href={"/"}>TOP</Link>
      </div>

      {props.params.q === "result" ? result() : questions()}
    </div>
  );
};

export default Page;
