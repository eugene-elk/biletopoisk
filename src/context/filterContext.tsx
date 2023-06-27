import {Context, createContext} from "react";

export type filterContextType = {
  search: string,
  genre: (string | null),
  cinemas: string[],
  setSearch: (value: string) => void,
  setGenre: (value: string | null) => void,
  setCinemas: (value: string[]) => void,
}

export const FilterContext: Context<filterContextType> = createContext({
  search: "",
  genre: null as (string | null),
  cinemas: [] as string[],
  setSearch: (value: string) => {},
  setGenre: (value: string | null) => {},
  setCinemas: (value: string[]) => {}
});


