import Technology from "./components/sections/Technology";
import Navbar from './components/ui/Navbar';
import Home from "./components/sections/Home";

import { useState } from "react";
import { LoadingScreen } from "./components/ui/LoadingScreen";
import Projects from "./components/sections/Projects";
import Footer from "./components/ui/Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);


  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-gray-900 text-gray-100`}
      >
          <Navbar />
          <Home />
          <hr className="bg-gray-900 opacity-20" />
          <Technology />
          <hr className="bg-gray-900 opacity-20" />
          <Projects />
          <Footer />
      </div>
    </>
  )
}

export default App
