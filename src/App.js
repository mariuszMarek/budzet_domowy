import LeftSideBar from "./elements/left_side_bar";
import ElementyLewegoPaska from "./hooks/elementyLewegoPaska"
import Naglowek from "./elements/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App() {

  const elementyDoWypisania = ElementyLewegoPaska()

  return (
    <div className="bg-gray-200 min-h-screen w-full grid grid-cols-[200px_1fr_200px] grid-rows-[100px_1fr_100px]">
      <BrowserRouter>        
        <div className="row-start-1 px-6 bg-gray-100 shadow-sm border-b border-gray-200 col-span-3 ml-2 mr-2">
          <Naglowek/>
        </div>

        <LeftSideBar elementyDoWypisania={elementyDoWypisania}/>

        {/* glowna strona */}
        <div className="m-2 mt-4 row-start-2 col-start-2 bg-gray-100 shadow-sm p-6 border border-gray-200
        text-gray-600 leading-relaxed">
          <Routes>
            {elementyDoWypisania.map((elementy) => (
              <Route
                path={`/${elementy.sciezka}`}
                element={elementy.nazwa_wyswietlana}
              />
            ))}
          </Routes>
        </div>
      </BrowserRouter>

      {/* boczne meny */}
      <div className="row-start-2 col-start-3 m-2 mt-4 bg-gray-100 border-r border-b border-gray-200 p-4 shadow-sm text-gray-700 font-medium transition">
        boczne menu kontekstowe na rozne inne rzeczy
      </div>
      {/* stopak */}
      <div className="ml-2 mr-2 mt-2 row-start-3 col-span-3 flex items-center justify-center bg-gray-100 border border-gray-200 text-sm text-gray-700"></div>
    </div>
  );
}
