import ProductList from "./components/products/ProductsList";
import {products, categories} from "./helper/data"
import "./App.scss";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div>
      {/* <Header categories={categories} products={products} /> */}
      <ProductList products={products} categories={categories} />
    </div>
  );
}

export default App;
