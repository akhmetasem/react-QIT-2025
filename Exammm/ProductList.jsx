import { useCart } from "./CartContext";

const products = [
  { id: 1, name: "Book", price: 2000 },
  { id: 2, name: "Laptop", price: 1500000 },
  { id: 3, name: "Headphones", price: 12000 },
];

export default function ProductList() {
  const { dispatch } = useCart();

  const cards = {
     width:"380px",
    backgroundColor: "#f5f5f5",
    padding: "6px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "16px"
  };

  const buttons = {
    marginLeft: "10px",
    padding: "6px 12px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#1890ff",
    color: "white",
    
  };

  const container = {
    backgroundColor: "#f5f5f5", 
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    maxWidth: "400px",
    margin: "0 auto",
    marginTop: "30px"
  };

  return (
    <div style={container}>
      <h1>Cart Manager</h1>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} style={cards}>
          <div style={{ fontSize: "18px", fontWeight: "500" }}>
            {product.name} — ${product.price}
          </div>
          <button
            onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
            style={buttons}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
