import { createContext } from "react";
import { NamesContextType } from "../types";

const NamesContext = createContext<NamesContextType | undefined>(undefined)

export default NamesContext