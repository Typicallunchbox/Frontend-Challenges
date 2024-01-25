import './style.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Invalid from "./pages/invalid";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Invalid />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;