import { Link } from "react-router-dom";

export default function SideBar(props) {

  const kondHtml = (
    <div className="row-start-2 bg-blue-500 m-3">
      
        <ul className="flex flex-col mt-4">
          {props.elementyDoWypisania.map((elementy) => (
            <li className="text-center flex-auto m-4" key={elementy.id}>
              <Link to={elementy.sciezka}>
                {elementy.nazwa_wyswietlana}
              </Link>
            </li>
          ))}
        </ul>
        
    </div>
  );

  return kondHtml;
}
