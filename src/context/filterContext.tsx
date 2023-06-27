import {Context, createContext} from "react";

export type filterContextType = {
  search: string,
  genre: (string | null),
  cinemas: string[],
}

export type setFilterContextType = {
  // eslint-disable-next-line no-unused-vars
  setSearch: (value: string) => void,
  // eslint-disable-next-line no-unused-vars
  setGenre: (value: string | null) => void,
  // eslint-disable-next-line no-unused-vars
  setCinemas: (value: string[]) => void,
}

export const FilterContext: Context<filterContextType> = createContext({
  search: "",
  genre: null as (string | null),
  cinemas: [] as string[],
});

export const SetFilterContext: Context<setFilterContextType> = createContext({
  // eslint-disable-next-line no-unused-vars
  setSearch: (value: string) => {},
  // eslint-disable-next-line no-unused-vars
  setGenre: (value: string | null) => {},
  // eslint-disable-next-line no-unused-vars
  setCinemas: (value: string[]) => {}
});


