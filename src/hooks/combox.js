import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

import { useState } from "react";

export default function CustomCombobox({
  daneDoListowania,
  aktualneValue,
  gdyZmiana,
}) {
  const [zapytanie, setZapytanie] = useState("");
  const [wybranyElement, setWybranyElement] = useState(daneDoListowania[0]);
  const { id, wartosc, nazwa } = aktualneValue;
  const odfiltrowanaLista =
    zapytanie === ""
      ? daneDoListowania
      : daneDoListowania.filter((element) => {
          return element.wartosc
            .toLowerCase()
            .includes(zapytanie.toLowerCase());
        });
  return (
    <div className="">
      <Combobox
        value={wartosc}
        onChange={gdyZmiana}
        onClose={() => setZapytanie("")}
      >
        <div className="relative">
          <ComboboxButton as="div" className="w-full">
            <ComboboxInput
              className={clsx(
                "w-full rounded-md border-none bg-white shadow-md py-1.5 pr-8 pl-3 text-sm/6 text-black",
                "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
              )}
              displayValue={(comboBoxWybranyElement) =>
                comboBoxWybranyElement?.wartosc
              }
              onChange={(event) => setZapytanie(event.target.value)}
            />
            <ComboboxButton className="group absolute inset-y-0 right-0 px-3.5">
              <ChevronDownIcon className="size-6 fill-black/60 group-data-hover:fill-black" />
            </ComboboxButton>
          </ComboboxButton>
        </div>
        <ComboboxOptions
          anchor="bottom start"
          transition
          className={clsx(
            "w-(--input-width) rounded-xl border border-black/5 bg-white p-1 [--anchor-gap:--spacing(1)] empty:invisible text-black",
            "transition duration-100 ease-in data-leave:data-closed:opacity-0 mt-2"
          )}
        >
          {odfiltrowanaLista.map((element) => (
            <ComboboxOption
              key={element.id}
              value={element}
              className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none hover:bg-emerald-500/50"
            >
              <div className="text-sm/6 text-black/50">{element.wartosc}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}
