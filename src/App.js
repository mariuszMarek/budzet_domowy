import GlownaAplikacja from "./pages/glowna_aplikacja";
import { BrowserRouter} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <GlownaAplikacja />
    </BrowserRouter>
  );
}
