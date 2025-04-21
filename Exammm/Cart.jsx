import { useCart } from "./CartContext";

export default function Cart() {
  
  const { state, dispatch } = useCart();
  const cont = {
    backgroundColor: "#f5f5f5", 
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    maxWidth: "400px",
    margin: "0 auto",
    marginTop: "30px"
  }
  const total = state.items.reduce((sum, item) => sum + item.price, 0);
  

  return (
    <div style={cont}>
      <h2>Cart</h2>
      {state.items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {state.items.map((item, index) => (
            <li key={index}>
              {item.name} — ${item.price}
              <button
                onClick={() => dispatch({ type: "REMOVE_ITEM", payload: index })}
                style={{ marginLeft: "10px", background:"red", color:"white", borderRadius:"12px" }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {state.items.length > 0 && (
        <div>
          <p>Total: ${total}</p>
          <button onClick={() => dispatch({ type: "CLEAR_CART" })}
          style={{ marginLeft: "10px", background:"darkviolet", color:"white", height:"50px", width:"380px",padding:"10px" , borderRadius:"14px" }}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
