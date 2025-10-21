import { useEffect, useState } from "react";

export function TrzymajWpisy({ wpis }) {
  const [wpisy, setWpisy] = useState([]);
  useEffect(() => {
    if (wpis?.length) {
      setWpisy((poprzednieWpisy) => [...poprzednieWpisy, wpis]);
    }
  }, [wpis]);
  return wpisy;
}
export function useWydatek() {
  const [wydatek, setWydatek] = useState({
    id_wpisu: crypto.randomUUID(),
    dzien_wpisu: new Date().toISOString().split("T")[0],
    kwota_wpisu: 0.0,
    opis_wpisu: "",
    katagoria: "",
  });

  const handlujZmiane = (e) => {
    const { name, value } = e.target;
    setWydatek((poprzedni_wpis) => ({
      ...poprzedni_wpis,
      [name]: value,
    }));
  };

  const zerujFormularz = () => {
    setWydatek({
      id_wpisu: crypto.randomUUID(),
      dzien_wpisu: new Date().toISOString().split("T")[0],
      kwota_wpisu: 0.0,
      opis_wpisu: "",
      katagoria: "",
    });
  };

  return {
    wydatek,
    setWydatek,
    handlujZmiane,
    zerujFormularz
  };
}
