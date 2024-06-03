import React from "react";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Defficulty = () => {
  return (
    <div className="px-5 mt-10 space-y-5 flex flex-col">
      <Link
        href={{ pathname: "/question", query: { difficulty: 151, q: 1 } }}
        // as={`/question/easy`}
      >
        <Card className="border border-[#ffde00]">
          <CardHeader>
            <CardTitle className="mb-2">简单的</CardTitle>
            <CardDescription>第一世代のポケモンが出ます。</CardDescription>
          </CardHeader>
        </Card>
      </Link>

      <Link href={{ pathname: "/question", query: { difficulty: 251, q: 1 } }}>
        <Card className="border border-[#ffde00]">
          <CardHeader>
            <CardTitle className="mb-2">正常的</CardTitle>
            <CardDescription>
              第一世代~第二世代のポケモンが出ます。
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>

      <Link href={{ pathname: "/question", query: { difficulty: 386, q: 1 } }}>
        <Card className="border border-[#ffde00]">
          <CardHeader>
            <CardTitle className="mb-2">难的</CardTitle>
            <CardDescription>
              第一世代~第三世代のポケモンが出ます。
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>

      <Link href={{ pathname: "/question", query: { difficulty: 493, q: 1 } }}>
        <Card className="border border-[#ffde00]">
          <CardHeader>
            <CardTitle className="mb-2">很难</CardTitle>
            <CardDescription>
              第一世代~第四世代のポケモンが出ます。
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
};

export default Defficulty;
