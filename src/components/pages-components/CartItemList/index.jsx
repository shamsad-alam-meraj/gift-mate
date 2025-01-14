import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  clearCart,
} from "@/redux/reducers/cartSlice";
import CartItems from "./CartItems";

export default function CartItemList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-semibold mb-6">Cart Items</h1>

      {cartItems.length > 0 ? (
        <>
          <CartItems
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
          />
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => dispatch(clearCart())}
              className="px-3 py-1 rounded shadow-md border bg-red-500 text-white font-bold"
            >
              Clear Cart
            </button>
            <div className="flex items-center">
              <h2 className="text-xl font-medium mr-6">
                Total: ${calculateTotal().toFixed(2)}
              </h2>
              <button className="px-3 py-1 rounded shadow-md border bg-primary text-white font-bold">
                Place Order
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center show_middle_with_navbar">
          <p className="text-center text-yellow-500 font-semibold italic">
            Your cart is empty.
          </p>
        </div>
      )}
    </div>
  );
}
