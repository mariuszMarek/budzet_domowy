import { Link } from "react-router-dom";

export default function LeftSideBar(props) {
// bg-white border-r border-gray-200 p-4 flex flex-col justify-between shadow-sm
  const kondHtml = (
    // <div className="row-start-2 bg-white m-3">
    <div className="flex col-start-1 row-start-2 m-2 mt-4">      
        <ul className="bg-gray-100 border border-gray-200 p-6 pr-8 justify-between shadow-sm">
          {/* block px-3 py-2 rounded-lg hover:bg-indigo-50 text-gray-700 font-medium transition */}
          {props.elementyDoWypisania.map((elementy) => (
            // <li className="text-center flex-auto m-4" key={elementy.id}>
            // <li className="text-center block rounded-lg hover:bg-green-500 text-gray-700 font-medium transition p-4" key={elementy.id}>
            <li className="text-center rounded-lg  text-gray-700 font-medium pb-1 pt-1 flex items-center" key={elementy.id}>
              <Link to={elementy.sciezka} className="hover:bg-green-500 rounded-lg transition-colors font-medium px-6 py-6 w-full duration-400 flex">
                {elementy.nazwa_do_paska}
              </Link>
            </li>
          ))}
        </ul>
        
    </div>
  );

  return kondHtml;
}
