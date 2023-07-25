import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./route/home/Home";
import About from "./route/about/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Books from "./route/book/Book";
import SingleBook from "./route/book/SingleBook";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:slug" element={<SingleBook />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
