import './style.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Invalid from "./pages/Invalid";
import { Navbar } from './components';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Invalid />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;