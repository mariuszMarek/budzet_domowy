import { Link } from "react-router-dom";

export default function LeftSideBar(props) {
  const kondHtml = (
    <>
      <ul className='flex flex-col bg-gray-100 border border-gray-200 p-6 pr-8 justify-start shadow-md w-max'>
        {props.elementyDoWypisania.map((elementy) => (
          <li className='text-center rounded-lg  text-gray-700 font-medium pb-1 pt-1' key={elementy.id}>
            <Link
              to={elementy.sciezka}
              className='flex hover:bg-emerald-500 rounded-lg transition-colors font-medium px-6 py-6 w-full duration-400'
            >
              {elementy.nazwa_do_paska}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );

  return kondHtml;
}
