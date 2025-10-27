import { tab } from "@testing-library/user-event/dist/tab";

export default function Naglowek({ tablicaKolumn }) {
  return (
    <thead>
      <tr className='text-left'>
        {tablicaKolumn.map((wpis) => {
          return(<th className='py-2 px-1.5' key={wpis.klucz}>{wpis.napis}</th>);
        })}
      </tr>
    </thead>
  );
}
