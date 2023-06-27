import {ReactNode, useState} from "react";
import {FilterContext, SetFilterContext} from "@/context/filterContext";

export const FilterContextProvider = ({ children }: {children: ReactNode}) => {
  const [search, setSearch] = useState<string>("");
  const [genre, setGenre] = useState<string | null>(null);
  const [cinemas, setCinemas] = useState<string[]>([]);

  return (
    <FilterContext.Provider value={{search, genre, cinemas }}>
      <SetFilterContext.Provider value={{setSearch, setGenre, setCinemas}}>
        {children}
      </SetFilterContext.Provider>
    </FilterContext.Provider>
  );
};