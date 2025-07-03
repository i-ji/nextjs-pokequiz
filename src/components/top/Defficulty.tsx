import React from "react";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Defficulty = () => {
  const difficultyLevelList = [
    { difficulty: 151, title: "简单的", desc: "第一世代のポケモンが出ます。" },
    {
      difficulty: 251,
      title: "正常的",
      desc: " 第一世代~第二世代のポケモンが出ます。",
    },
    {
      difficulty: 386,
      title: "难的",
      desc: "第一世代~第三世代のポケモンが出ます。",
    },
    {
      difficulty: 493,
      title: "很难",
      desc: "第一世代~第四世代のポケモンが出ます。",
    },
  ];
  return (
    <div className="px-5 mt-10 space-y-5 flex flex-col pb-10">
      {difficultyLevelList.map((list) => {
        return (
          <Link
            href={{
              pathname: "/question",
              query: { difficulty: list.difficulty, q: 1 },
            }}
            key={list.difficulty}
          >
            <Card className="border border-[#ffde00]">
              <CardHeader>
                <CardTitle className="mb-2">{list.title}</CardTitle>
                <CardDescription>{list.desc}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default Defficulty;
