
import { useState } from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Products from "./components/Product";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Header />

      <div className="p-6">
        <button
          className="bg-indigo-600 text-white px-4 py-2 mb-4"
          onClick={() => setShowCart(!showCart)}
        >
          {showCart ? "Hide Cart" : "Show Cart"}
        </button>

        {showCart ? <Cart /> : <Products />}
      </div>
    </>
  );
}

export default App;
