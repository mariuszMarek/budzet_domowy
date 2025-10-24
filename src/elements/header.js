import { useLocation } from "react-router-dom";
export default function Naglowek() {  
  const productName = useLocation().pathname.replace("/"," ").replace("_"," ");
  const productName2 = productName.charAt(1).toUpperCase() + productName.slice(2).toLowerCase()  
  const aktualnaStrona = productName2 !=="" ? productName2: "Strona główna"
  return <h1 className="text-center text-4xl font-semibold m-2 p-2">{aktualnaStrona}</h1>;
  
}
