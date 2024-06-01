export interface PokeType {
  id: number;
  japaneseName: string;
  chineseName: string;
  img: string;
  types: {
    type1: string;
    type2: string | undefined;
  };
  genera: string;
}
