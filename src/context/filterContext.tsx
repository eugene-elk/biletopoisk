import {Context, createContext} from "react";

export type filterContextType = {
  search: string,
  genre: (string | null),
  cinema: (string | null),
  setSearch: (value: string) => void,
  setGenre: (value: string | null) => void,
  setCinema: (value: string | null) => void
}

export const FilterContext: Context<filterContextType> = createContext({
  search: "",
  genre: null as (string | null),
  cinema: null as (string | null),
  setSearch: (value: string) => {},
  setGenre: (value: string | null) => {},
  setCinema: (value: string | null) => {}
});


