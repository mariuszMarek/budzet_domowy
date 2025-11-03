import LeftSideBar from "../elements/left_side_bar";
import ElementyLewegoPaska from "../hooks/elementyLewegoPaska";
import Naglowek from "../elements/header";
import OstatnieWpisy from "../elements/ostatnie_wpisy";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";

export default function GlownaAplikacja() {
  const NAZWA_LOCAL_STORAGE = "WPISY_TMP";
  const [wpisy, setWpisy] = useState(() => {
    // return
    return JSON.parse(localStorage.getItem(NAZWA_LOCAL_STORAGE)) || [];
  });

  const handlujDodanieWpisu = (nowyWpis) => {
    setWpisy((aktualniePrzechowaneWpisy) => [...aktualniePrzechowaneWpisy, nowyWpis]);
  };
  
  const handlujAktualizacjeWpisu = (idZmiany, nazwaPola, nowaWartosc) => {
    console.log(idZmiany)
    console.log(nazwaPola)
    console.log(nowaWartosc)
    setWpisy((aktualneWpisy) => 
      aktualneWpisy.map((wpis) => 
        (wpis.id_wpisu === idZmiany ? { ...wpis, [nazwaPola]: nowaWartosc } : wpis)
      )
    );
  };

  useEffect(() => {
    localStorage.setItem(NAZWA_LOCAL_STORAGE, JSON.stringify(wpisy));
  }, [wpisy]);

  const elementyDoWypisania = useMemo(() => {
    return ElementyLewegoPaska(handlujDodanieWpisu, wpisy, handlujAktualizacjeWpisu);
  }, [wpisy]);

  return (
    // <div className="bg-gray-200 min-h-screen w-full grid grid-cols-[200px_1fr_250px] grid-rows-[100px_1fr_100px]">
    <div className='bg-gray-200 min-h-screen w-full grid grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr_auto]'>
      <div className='row-start-1 px-6 bg-gray-100 shadow-md border-b border-gray-200 col-span-3 ml-2 mr-2'>
        <Naglowek />
      </div>
      <div className='flex flex-row col-start-1 row-start-2 m-2 mt-4 w-full'>
        <LeftSideBar elementyDoWypisania={elementyDoWypisania} />
      </div>

      {/* srodkowy ekran */}
      <div
        className='flex flex-col m-2 mt-4 row-start-2 col-start-2 bg-gray-100 shadow-md p-6 border border-gray-200
        text-gray-600 leading-relaxed'
      >
        <Routes>
          {elementyDoWypisania.map((elementy) => (
            <Route path={`/${elementy.sciezka}`} element={elementy.nazwa_wyswietlana} />
          ))}
        </Routes>
      </div>

      {/* boczne meny */}
      <div className='flex row-start-2 col-start-3 m-2 mt-4 bg-gray-100 border-r border-b border-gray-200 p-4 shadow-md text-gray-700 font-medium transition'>
        <OstatnieWpisy wpisy={wpisy} />
      </div>
      {/* stopak */}
      <div className='ml-2 mr-2 mt-2 row-start-3 col-span-3 flex items-center justify-center bg-gray-100 border border-gray-200 text-sm text-gray-700'></div>
    </div>
  );
}
