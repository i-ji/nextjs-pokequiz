// タイプを日本語に変換する処理
export const typeTranlate = (type: string | undefined) => {
  switch (type) {
    case "normal":
      return (type = "ノーマル");
    case "fighting":
      return (type = "かくとう");
    case "flying":
      return (type = "ひこう");
    case "poison":
      return (type = "どく");
    case "ground":
      return (type = "じめん");
    case "rock":
      return (type = "いわ");
    case "bug":
      return (type = "むし");
    case "ghost":
      return (type = "ゴースト");
    case "steel":
      return (type = "はがね");
    case "fire":
      return (type = "ほのお");
    case "water":
      return (type = "みず");
    case "grass":
      return (type = "くさ");
    case "electric":
      return (type = "でんき");
    case "psychic":
      return (type = "エスパー");
    case "ice":
      return (type = "こおり");
    case "dragon":
      return (type = "ドラゴン");
    case "dark":
      return (type = "あく");
    case "fairy":
      return (type = "フェアリー");
    case "stellar":
      return (type = "ステラ");
    case undefined:
      return (type = "");
    default:
      return (type = "miss type");
  }
};

// ひらがなをカタカナに変換する処理
export function hiraToKana(str: string) {
  return str.replace(/[\u3041-\u3096]/g, function (match) {
    var chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
}

// 入力した回答の修正
export function symbolTokana(str: string) {
  switch (str) {
    case "ニドランオス":
      return str.replace("オス", "♂");
    case "ニドランメス":
      return str.replace("メス", "♀");
    case "ポリゴン2":
      return str.replace("ポリゴン2", "ポリゴン２");
    case "ポリゴンZ":
      return str.replace("ポリゴンZ", "ポリゴンＺ");
    case "ポリゴンz":
      return str.replace("ポリゴンz", "ポリゴンＺ");
    default:
      return str;
  }
}

// 答え、分類の修正
export function hangulToKana(str: string) {
  switch (str) {
    case "초라기":
      return str.replace("초라기", "チョンチー");
    case "아귀포켓몬":
      return str.replace("아귀포켓몬", "あんこうポケモン");
    case "Purugly":
      return str.replace("Purugly", "ブニャット");
    case "Pokémon Tigre Gato":
      return str.replace("Pokémon Tigre Gato", "とらねこポケモン");
    default:
      return str;
  }
}

// 問題文の修正
export function modifiedQuestion(str: string) {
  switch (str) {
    case "몬냥이":
      return str.replace("몬냥이", "東施喵");
    default:
      return str;
  }
}
