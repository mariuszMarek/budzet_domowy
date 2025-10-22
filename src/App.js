import LeftSideBar from "./elements/left_side_bar";
import ElementyLewegoPaska from "./hooks/elementyLewegoPaska";
import Naglowek from "./elements/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

export default function App() {
  const [wpisy, setWpisy] = useState([]);

  const handlujDodanieWpisu = (nowyWpis) => {
    // console.log("glowna baza zostala zaaktualizowana o nowy wpis")
    // console.log(wpisy)
    setWpisy((aktualniePrzechowaneWpisy) => [
      ...aktualniePrzechowaneWpisy,
      nowyWpis,
    ]);
  };

  const elementyDoWypisania = ElementyLewegoPaska(handlujDodanieWpisu);

  return (
    <div className="bg-gray-200 min-h-screen w-full grid grid-cols-[200px_1fr_250px] grid-rows-[100px_1fr_100px]">
      <BrowserRouter>
        <div className="row-start-1 px-6 bg-gray-100 shadow-md border-b border-gray-200 col-span-3 ml-2 mr-2">
          <Naglowek />
        </div>

        <LeftSideBar elementyDoWypisania={elementyDoWypisania} />

        {/* srodkowy ekran */}
        <div
          className="m-2 mt-4 row-start-2 col-start-2 bg-gray-100 shadow-md p-6 border border-gray-200
        text-gray-600 leading-relaxed"
        >
          <Routes>
            {elementyDoWypisania.map((elementy) => (
              <Route
                path={`/${elementy.sciezka}`}
                element={elementy.nazwa_wyswietlana}
              />
            ))}
          </Routes>
          <ul className="w-full bg-blue-200 rounded-md pt-2 pb-2 mt-8 shadow-lg h-min">
          {wpisy
            .slice(-5)
            .reverse()
            .map((wpis) => {
              {console.log(wpis)}
              return (
                <li
                  className="flex justify-evenly"
                  key={wpis.id_wpisu}
                >
                  <div>{wpis.dzien_wpisu.split("T")[0]}</div>
                  <div >{wpis.kwota_wpisu}</div>
                  <div >{wpis.okres_wpisu}</div>
                  <div >{wpis.opis_transakcji}</div>
                </li>
              );
            })}
        </ul>
        </div>
      </BrowserRouter>

      {/* boczne meny */}
      <div className="flex row-start-2 col-start-3 m-2 mt-4 bg-gray-100 border-r border-b border-gray-200 p-4 shadow-md text-gray-700 font-medium transition">
        
      </div>
      {/* stopak */}
      <div className="ml-2 mr-2 mt-2 row-start-3 col-span-3 flex items-center justify-center bg-gray-100 border border-gray-200 text-sm text-gray-700"></div>
    </div>
  );
}
