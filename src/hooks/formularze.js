import { useEffect, useState } from "react";

export const pola = [
  {
    name: "id_wpisu",
    id: "id_wpisu",
    key: "id_wpisu",
    value: crypto.randomUUID(),
    type: "hidden",
  },
  {
    name: "dzien_wpisu",
    id: "dzien_wpisu",
    key: "dzien_wpisu",
    placeholder: "Data wpisu",
    value: new Date().toISOString().slice(0, -8),
    type: "datetime-local",
    step: 60,
    required: true,
  },
  {
    name: "kwota_wpisu",
    id: "kwota_wpisu",
    key: "kwota_wpisu",
    value: 0.0,
    type: "number",
    step: 0.01,
    min: 0.0,
    placeholder: "Kwota którą chcesz zapisać",
    required: true,
  },
  {
    name: "opis_wpisu",
    id: "opis_wpisu",
    key: "opis_wpisu",
    value: "",
    type: "text",
    minLength: 4,
    maxLength: 50,
    placeholder: "Krótki opis danego wydatku",
    required: true,
  },
  {
    name: "kategoria",
    id: "kategoria",
    key: "kategoria",
    value: "",
    type: "list",
    placeholder: "Kategoria wpisu",
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
    key: "okres_wpisu",
    value: "",
    type: "list",
    minLength: 4,
    maxlength: 50,
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
  pola.map((pole) => [pole.value, pole.name])
);
const ustawStanZero = () => ({
  ...stanZero,
  id_wpisu: crypto.randomUUID(),
  dzien_wpisu: new Date().toISOString().slice(0, -8),
});

export function useWydatek() {
  const [wydatek, setWydatek] = useState(ustawStanZero());

  const handlujZmiane = (e) => {
    const { name, value } = e.target;
    setWydatek((poprzedni_wpis) => ({
      ...poprzedni_wpis,
      [name]: value,
    }));
  };

  const zerujFormularz = () => {
    setWydatek(ustawStanZero());
  };

  return {
    wydatek,
    setWydatek,
    handlujZmiane,
    zerujFormularz,
  };
}
