// import Cialo from "../elements/tabela/cialo";
import WlasnaTabela from "../elements/tabela/tabela";
export default function StronaGlowna({ tablicaWierszy, handlujAktualizacjeWpisu }) {
  const tablicaKolumn = [
    { klucz: "dzien_wpisu", napis: "Data", edytowalne: false },
    { klucz: "kwota_wpisu", napis: "PLN", edytowalne: true },
    { klucz: "kategoria", napis: "Kategoria", edytowalne: false },
    { klucz: "opis_wpisu", napis: "Opis", edytowalne: true },
    { klucz: "okres_wpisu", napis: "Okres", edytowalne: false },
    { klucz: "oplacony", napis: "Opł.", edytowalne: true },
  ];
  return (
    <div>
      {tablicaWierszy?.length > 0 ? (
        <WlasnaTabela tablicaWierszy={tablicaWierszy} tablicaKolumn={tablicaKolumn} handlujAktualizacjeWpisu={handlujAktualizacjeWpisu} />
      ) : (
        <p>brak wpisów w tabeli</p>
      )}
    </div>
  );
}
