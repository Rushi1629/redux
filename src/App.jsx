import { useSelector } from "react-redux";
import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  const cartValue = useSelector((s) => s.cart.value);
  console.log("Redux value:", cartValue);

  return (
    <>
      <Header />
      <Product />
    </>
  );
}

export default App;
