import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./route/home/Home";
import About from "./route/about/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Books from "./route/book/Book";
import SingleBook from "./route/book/SingleBook";
import CreateBook from "./route/book/CreateBook";
import Editbook from "./route/book/Editbook";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Books />} />
          <Route path="/books/:slug" element={<SingleBook />} />
          <Route path="/createbook" element={<CreateBook />} />
          <Route path="/editbook/:slug" element={<Editbook />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
