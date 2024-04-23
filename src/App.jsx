import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Contact from "./Components/contact/Contact";
import About from "./Components/about/About";
import Error_Page from "./Components/Home/Error_Page";
import Mainheader from "./Components/Home/Mainheader";

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
