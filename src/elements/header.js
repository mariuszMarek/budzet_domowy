import { useLocation } from "react-router-dom";
export default function Naglowek() {  
  const productName = useLocation().pathname.replace("/"," ").replace("_"," ");
  const productName2 = productName.charAt(1).toUpperCase() + productName.slice(2).toLowerCase()  
  const aktualnaStrona = productName2 !=="" ? productName2: "Strona główna"
  return <h1 className="text-center text-3xl tm-10 m-3 p-3">{aktualnaStrona}</h1>;
  
}
