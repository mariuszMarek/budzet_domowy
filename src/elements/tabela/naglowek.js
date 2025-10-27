import { tab } from "@testing-library/user-event/dist/tab";

export default function Naglowek({ tablicaKolumn }) {
  console.log("jestem w naglowko");
  return (
    <thead>
      <tr className='text-left'>
        {tablicaKolumn.map((wpis) => {
        //   {
        //     console.log(wpis.napis);
        //   }
          <th className='py-2 px-1.5' key={wpis.klucz}>{wpis.napis}</th>;
        })}
      </tr>
    </thead>
  );
}
