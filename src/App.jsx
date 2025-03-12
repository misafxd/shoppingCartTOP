import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <>
      <Navbar />
      <Outlet context={[cartProducts, setCartProducts]} />
      <Footer />
    </>
  );
}

export default App;
