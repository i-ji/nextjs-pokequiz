// タイプを日本語に変換する処理
export const typeTranlate = (type: string | undefined) => {
  switch (type) {
    case "normal":
      return (type = "ノーマル");
      break;
    case "fighting":
      return (type = "かくとう");
      break;
    case "flying":
      return (type = "ひこう");
      break;
    case "poison":
      return (type = "どく");
      break;
    case "ground":
      return (type = "じめん");
      break;
    case "rock":
      return (type = "いわ");
      break;
    case "bug":
      return (type = "むし");
      break;
    case "ghost":
      return (type = "ゴースト");
      break;
    case "steel":
      return (type = "はがね");
      break;
    case "fire":
      return (type = "ほのお");
      break;
    case "water":
      return (type = "みず");
      break;
    case "grass":
      return (type = "くさ");
      break;
    case "electric":
      return (type = "でんき");
      break;
    case "psychic":
      return (type = "エスパー");
      break;
    case "ice":
      return (type = "こおり");
      break;
    case "dragon":
      return (type = "ドラゴン");
      break;
    case "dark":
      return (type = "あく");
      break;
    case "fairy":
      return (type = "フェアリー");
      break;
    case "stellar":
      return (type = "ステラ");
      break;
    case undefined:
      return (type = "");
      break;
    default:
      return (type = "miss type");
      break;
  }
};

// ひらがなをカタカナに変換する処理
export function hiraToKana(str: string) {
  return str.replace(/[\u3041-\u3096]/g, function (match) {
    var chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
}

// ♂,♀をカタカナにする処理
export function symbolTokana(str: string) {
  if (str === "ニドランオす") {
    return str.replace("オす", "♂");
  } else if (str === "ニドランメす") {
    return str.replace("メす", "♀");
  } else {
    return str;
  }
}
