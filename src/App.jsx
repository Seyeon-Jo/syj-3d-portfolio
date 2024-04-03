import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects, Studies } from "./pages";

const App = () => {
  const navbarStyles = {
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  };

  return (
    <main className="bg-slate-300/20">
      <Router>
        <div style={navbarStyles}>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/studies" element={<Studies />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
