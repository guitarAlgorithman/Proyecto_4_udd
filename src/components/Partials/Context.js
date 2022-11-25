import { React } from "react";
import { createContext, useState,useEffect } from "react";

import { readData } from "../../database/DataManager";

export const ComidasMenu = createContext();

export function ComidasMenuProvider(props) {
  const [comidas, setComidas] = useState([]);
  useEffect (() => {
    readData("menus").then((data) => {
      setComidas(data);
    });
  }, []);

  //console.log(comidas);
  return (
    <ComidasMenu.Provider value={comidas}>{props.children}</ComidasMenu.Provider>
  );
}

export default ComidasMenu;
