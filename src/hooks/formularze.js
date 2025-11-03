import { useEffect, useState } from "react";

const czasLetni_Zimowy = 1;
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
    wartosc_domyslna: crypto.randomUUID(),
    type: "hidden",
  },
  {
    name: "dzien_wpisu",
    id: "dzien_wpisu",
    label: "Data wpisu",
    wartosc_domyslna: new Date(new Date().setHours(new Date().getHours() + czasLetni_Zimowy)).toISOString().slice(0, -8),
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
    dataMap: [
      { id: 1, wartosc: "Różne", nazwa: "kategoria" },
      { id: 2, wartosc: "Dom", nazwa: "kategoria" },
      { id: 3, wartosc: "Podróż", nazwa: "kategoria" },
      { id: 4, wartosc: "Jedzenie", nazwa: "kategoria" },
      { id: 5, wartosc: "Wyjście na miasto", nazwa: "kategoria" },
      { id: 6, wartosc: "Rozrywka", nazwa: "kategoria" },
      { id: 7, wartosc: "Inwestycje", nazwa: "kategoria" },
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
    dataMap: [
      { id: 1, wartosc: "Jednorazowo", nazwa: "okres_wpisu" },
      { id: 2, wartosc: "Dzienny", nazwa: "okres_wpisu" },
      { id: 3, wartosc: "Tygodniowo", nazwa: "okres_wpisu" },
      { id: 4, wartosc: "Miesięcznie", nazwa: "okres_wpisu" },
      { id: 5, wartosc: "Kwartalnie", nazwa: "okres_wpisu" },
      { id: 6, wartosc: "Pół rocznie", nazwa: "okres_wpisu" },
      { id: 7, wartosc: "Rocznie", nazwa: "okres_wpisu" },
    ],
  },
  {
    name: "oplacony",
    id: "oplacony",
    label: "Opłacony?",
    type:"check_box"
  }
];

const stanZero = Object.fromEntries(pola.map((pole) => [pole.name, ""]));
const ustawStanZero = () => ({
  ...stanZero,
  id_wpisu: crypto.randomUUID(),
  dzien_wpisu: new Date(new Date().setHours(new Date().getHours() + czasLetni_Zimowy)).toISOString().slice(0, -8),
  oplacony:true
});

export function useWydatek() {
  const [wydatek, setWydatek] = useState(ustawStanZero());

  const handlujZmiane = (e) => {
    // console.log(e);
    // tutaj dodać obsługę typu danych
    var { name = "", value = "" } = e?.target || {};

    if (name === "" || name === "") {
      const { id = "", wartosc = "", nazwa = "" } = e || {};
      value = wartosc;
      name = nazwa;
    }

    setWydatek((poprzedni_wpis) => ({
      ...poprzedni_wpis,
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
      [name]: value,
    }));
  };

  const zerujFormularz = () => {
    setWydatek((poprzedni_wpis) => ({
      ...poprzedni_wpis,      
      id_wpisu: crypto.randomUUID(),
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
