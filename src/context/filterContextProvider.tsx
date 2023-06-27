import {useState} from "react";
import {FilterContext} from "@/context/filterContext";

export const FilterContextProvider = ({ children }: any) => {
  const [search, setSearch] = useState<string>("");
  const [genre, setGenre] = useState<string | null>(null);
  const [cinemas, setCinemas] = useState<string[]>([]);

  return (
    <FilterContext.Provider value={{ search, genre, cinemas, setSearch, setGenre, setCinemas }}>
      {children}
    </FilterContext.Provider>
  );
};