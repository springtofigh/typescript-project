import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Router";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Pages/>
      </BrowserRouter>
    </>
  )
}

export default App;