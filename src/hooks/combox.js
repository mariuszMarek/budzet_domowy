import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

import { useState } from "react";

export default function CustomCombobox({ daneDoListowania }) {
  const [zapytanie, setZapytanie] = useState("");
  console.log(daneDoListowania);
  const [wybranyElement, setWybranyElement] = useState(daneDoListowania[0]);

  const odfiltrowanaLista =
    zapytanie === ""
      ? daneDoListowania
      : daneDoListowania.map((element) => {
          return element.wartosc.toLowerCase().includes(zapytanie.toLowerCase());
        });

  return (
    <div className=''>
      <Combobox value={wybranyElement} onChange={setWybranyElement} onClose={() => setZapytanie("")}>
        <div className='relative'>
          <ComboboxInput
            className={clsx(
              "w-full rounded-md border-none bg-white shadow-md py-1.5 pr-8 pl-3 text-sm/6 text-black",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-black/25"
            )}
            displayValue={(comboBoxWybranyElement) => comboBoxWybranyElement?.wartosc}
            onChange={(event) => setZapytanie(event.target.value)}
          />
          <ComboboxButton className='group absolute inset-y-0 right-0 px-3.5'>
            <ChevronDownIcon className='size-4 fill-black/60 group-data-hover:fill-black' />
          </ComboboxButton>
        </div>
        <ComboboxOptions
          anchor='bottom start'
          transition
          className={clsx(
            "w-(--input-width) rounded-xl border border-black/5 bg-black p-1 [--anchor-gap:--spacing(1)] empty:invisible",
            "transition duration-100 ease-in data-leave:data-closed:opacity-0"
          )}
        >
          {odfiltrowanaLista.map((element) => (
            <ComboboxOption
              key={element.id}
              value={element}
              className='group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-black/10'
            >
              <div className='text-sm/6 text-white/60'>{element.wartosc}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}
