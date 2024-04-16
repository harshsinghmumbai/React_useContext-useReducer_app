import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Error_Page from "./Components/Error_Page";
import Mainheader from "./Components/Mainheader";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainheader />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Error_Page />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
