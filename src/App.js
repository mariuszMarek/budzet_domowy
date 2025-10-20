import SideBar from "./elements/side_bar";
import Naglowek from "./elements/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const elementyDoWypisania = [
    { id: 1, nazwa_wyswietlana: "Strona główna", sciezka: "" },
    {
      id: 2,
      nazwa_wyswietlana: "Wydatki dzienne",
      sciezka: "wydatki_dzienne",
    },
    { id: 3, nazwa_wyswietlana: "Ustawienia", sciezka: "ustawienia" },
  ];

  return (
    <div class="bg-gray-700 min-h-screen w-full grid grid-cols-[200px_1fr_200px] grid-rows-[100px_1fr_100px]">
      <BrowserRouter>
        <div className="bg-red-400 col-span-3 ml-3 mr-3 mb-3">
          <Naglowek></Naglowek>
        </div>
        <SideBar elementyDoWypisania={elementyDoWypisania}></SideBar>
        <div className="bg-green-600 row-start-2 col-start-2 m-3">
          <Routes>
            {elementyDoWypisania.map((elementy) => (
              <Route
                path={`/${elementy.sciezka}`}
                element={`${elementy.nazwa_wyswietlana}`}
              />
            ))}
          </Routes>
        </div>
      </BrowserRouter>

      <div className="row-start-2 bg-orange-600 m-3">
        {" "}
        boczne menu kontekstowe?
      </div>
      <div className="row-start-3 col-span-3 bg-purple-700 mr-3 ml-3 mt-3"></div>
    </div>
  );
}
