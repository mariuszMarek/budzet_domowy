import { useEffect, useState } from "react";

export const formatujKwote = (wartosc) => {
  const num = parseFloat(String(wartosc).replace(",", "."));
  if (isNaN(num) || num < 0) {
    return "0.00";
  }

  return num.toFixed(2);
};
export const pola = [
  {
    name: "id_wpisu",
    id: "id_wpisu",
    // value: crypto.randomUUID(),
    wartosc_domyslna: crypto.randomUUID(),
    type: "hidden",
  },
  {
    name: "dzien_wpisu",
    id: "dzien_wpisu",
    label: "Data wpisu",
    wartosc_domyslna: new Date(new Date().setHours(new Date().getHours() + 2))
      .toISOString()
      .slice(0, -8),
    type: "datetime-local",
    step: 60,
    required: true,
  },
  {
    name: "kwota_wpisu",
    id: "kwota_wpisu",
    wartosc_domyslna: "6.66",
    type: "text",
    inputMode: "decimal",
    label: "Kwota którą chcesz zapisać",
    placeholder: "PLN",
    required: true,
  },
  {
    name: "opis_wpisu",
    id: "opis_wpisu",

    wartosc_domyslna: "opis_wpisu",
    type: "text",
    minLength: 4,
    maxLength: 50,
    label: "Krótki opis danego wydatku",
    placeholder: "biedra",
    required: true,
  },
  {
    name: "kategoria",
    id: "kategoria",
    wartosc_domyslna: "Różne",
    type: "list",
    placeholder: "Kategoria wpisu",
    label: "Typ transakcji",
    datalist: [
      "Różne",
      "Dom",
      "Podróż",
      "Jedzenie",
      "Wyjście na miasto",
      "Rozrywka",
      "Inwestycje",
    ],
  },
  {
    name: "okres_wpisu",
    id: "okres_wpisu",

    label: "Okresowość wydatku",
    wartosc_domyslna: "Miesięcznie",
    type: "list",
    minLength: 4,
    maxLength: 50,
    placeholder: "Częstotliwośc wpisu",
    datalist: [
      "Jednorazowo",
      "Dziennie",
      "Tygodniowo",
      "Miesięcznie",
      "Kwartalnie",
      "Pół rocznie",
      "Rocznie",
    ],
  },
];

const stanZero = Object.fromEntries(
  pola.map((pole) => [pole.name, ""])
);
const ustawStanZero = () => ({
  ...stanZero,
  id_wpisu: crypto.randomUUID(),
  dzien_wpisu: new Date(new Date().setHours(new Date().getHours() + 2))
    .toISOString()
    .slice(0, -8),
});

export function useWydatek() {
  const [wydatek, setWydatek] = useState(ustawStanZero());

  const handlujZmiane = (e) => {
    var { name, value } = e.target;

    setWydatek((poprzedni_wpis) => ({
      ...poprzedni_wpis,
    //   id_wpisu: crypto.randomUUID(),
      [name]: value,
    }));
  };
  const handlujOnBlur = (e) => {
    var { name, value } = e.target;
    if (name === "kwota_wpisu") {
      value = formatujKwote(value);
    }
    setWydatek((poprzedni_wpis) => ({
      ...poprzedni_wpis,
    //   id_wpisu: crypto.randomUUID(),
      [name]: value,
    }));
  };

  const zerujFormularz = () => {
    setWydatek((poprzedni_wpis) =>({
        ...poprzedni_wpis,
        id_wpisu:crypto.randomUUID()
    }));
  };

  return {
    wydatek,
    setWydatek,
    handlujZmiane,
    zerujFormularz,
    handlujOnBlur,
  };
}
