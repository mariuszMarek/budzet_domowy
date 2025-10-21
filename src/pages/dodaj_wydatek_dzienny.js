import { useWydatek } from "../hooks/formularze";
export default function WydatekDzienny({ onSubmit }) {
  const { wydatek, setWydatek, handlujZmiane, zerujFormularz } = useWydatek();

  const dodajWpis = (e) => {
    e.preventDefault();
    onSubmit(wydatek);
    zerujFormularz();
  };

  const kodHTML = (
    <div>
      <form onSubmit={dodajWpis}>
        {Object.entries(wydatek).map(([pole, wartosc]) =>
          pole !== "id_wpisu" ? (
            <input
              name={pole}
              key={pole}
              value={wartosc}
              onChange={handlujZmiane}
            />
          ) : null
        )}
        <input type="submit" />
      </form>
    </div>
  );

  return kodHTML;
}
