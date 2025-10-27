// import Cialo from "../elements/tabela/cialo";
import WlasnaTabela from "../elements/tabela/tabela";
export default function StronaGlowna({ tablicaWierszy }) {
  const tablicaKolumn = [
    { klucz: "dzien_wpisu", napis: "Data" },
    { klucz: "kwota_wpisu", napis: "PLN" },
    { klucz: "kategoria", napis: "Kategoria" },
    { klucz: "opis_wpisu", napis: "Opis" },
    { klucz: "okres_wpisu", napis: "Okres" },
  ];
//   console.log(tablicaWierszy);
  return (
    <div>
      {tablicaWierszy?.length > 0 ? (
        // tutaj powinna być tabela z tabela.js
        <WlasnaTabela tablicaWierszy={tablicaWierszy} tablicaKolumn={tablicaKolumn} />
      ) : (
        <p>brak wpisów w tabeli</p>
      )}
    </div>
  );
}
