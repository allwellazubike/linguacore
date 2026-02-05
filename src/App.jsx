import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="bg-[#FAFAF9] min-h-screen font-sans text-stone-900 selection:bg-stone-900 selection:text-white flex flex-col">
        <Navbar />
        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
