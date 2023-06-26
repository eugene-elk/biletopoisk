import {useState} from "react";
import {FilterContext} from "@/context/filterContext";

export const FilterContextProvider = ({ children }: any) => {
  const [search, setSearch] = useState<string>("");
  const [genre, setGenre] = useState<string | null>(null);
  const [cinema, setCinema] = useState<string | null>(null);

  return (
    <FilterContext.Provider value={{ search, genre, cinema, setSearch, setGenre, setCinema }}>
      {children}
    </FilterContext.Provider>
  );
};