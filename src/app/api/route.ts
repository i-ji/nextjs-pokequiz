import { PokeType } from "../types";

const ENDPOINT = "https://pokeapi.co/api/v2/pokemon";
const ENDPOINT_SPECIES = "https://pokeapi.co/api/v2/pokemon-species";

export async function GET(req: Request) {
  // クエリ文字列を受け取る
  const { searchParams } = new URL(req.url);
  const difficulty = searchParams.get("difficulty");

  let pokesInfo = [] as PokeType[];
  try {
    // id, 画像の取得
    const randomNum = Math.floor(Math.random() * Number(difficulty)) + 1;
    const data = await fetch(`${ENDPOINT}/${randomNum}`, {
      cache: "no-store",
    }).then((res) => {
      return res.json();
    });

    // 日本語名, 中国語名, タイプ, 分類の取得
    const data_species = await fetch(`${ENDPOINT_SPECIES}/${randomNum}`, {
      cache: "no-store",
    }).then((res) => {
      return res.json();
    });

    const pokeInfo = {
      id: data.id,
      japaneseName: data_species.names[0].name,
      chineseName: data_species.names[3].name,
      img: data.sprites.front_default,
      types: {
        type1: data.types[0].type.name,
        type2: data.types[1] ? data.types[1].type.name : undefined,
      },
      genera: data_species.genera[0].genus,
    };
    pokesInfo.push(pokeInfo);
  } catch (error) {
    console.error("GETリクエストが失敗しました", error);
  }

  return Response.json(pokesInfo);
}
