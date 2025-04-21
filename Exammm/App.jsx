import { CartProvider } from "./CartContext";
import ProductList from "./ProductList";
import Cart from "./Cart";
import './App.css';

export default function App() {
  return (
    <CartProvider>
      <div style={{ display: "flex", gap: "50px" }}>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}
