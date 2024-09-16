import { useState } from "react";
import "./App.css";
import Navbar from "./components/NAvbar";
import Manager from "./components/Manager";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <Navbar />
          <Manager />
        <Footer />
      </div>
      
    </>
  );
}

export default App;
