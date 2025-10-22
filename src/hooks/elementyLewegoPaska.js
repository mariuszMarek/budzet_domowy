import StronaGlowna from "../pages/strona_glowna";
import WydatkiDzienne from "../pages/wydatki_dzienne";
import WydatekDzienny from "../pages/dodaj_wydatek_dzienny";

export default function ElementyLewegoPaska(handlujDodanieWpisu) {
  var licznikId = 1;
  const elementyDoWypisania = [
    {
      id: licznikId++,
      nazwa_wyswietlana: <StronaGlowna />,
      sciezka: "strona_glowna",
      nazwa_do_paska: "Główna",
    },
    {
      id: licznikId++,
      nazwa_wyswietlana: <WydatkiDzienne />,
      sciezka: "wydatki_dzienne",
      nazwa_do_paska: "Dzienne",
    },
    {
      id: licznikId++,
      nazwa_wyswietlana: <WydatekDzienny onSubmit={handlujDodanieWpisu} />,
      sciezka: "formularz",
      nazwa_do_paska: "Formularz",
    },
    {
      id: licznikId++,
      nazwa_wyswietlana: "Ustawienia",
      sciezka: "ustawienia",
      nazwa_do_paska: "Ustawienia",
    },
  ];
  return elementyDoWypisania;
}
