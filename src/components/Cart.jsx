import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty, clearCart } from "../redux/slice";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Your Cart</h1>

      {items.length === 0 && <p>No items in cart.</p>}

      {items.map((item) => (
        <div key={item.id} className="flex justify-between px-4 py-3 bg-gray-100 mb-2">
          <span>{item.name}</span>

          <div className="flex items-center gap-2">
            <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          </div>

          <button className="text-red-600" onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}

      {items.length > 0 && (
        <button
          className="mt-4 bg-red-600 text-white p-2"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
