import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  clearCart,
} from "@/redux/reducers/cartSlice";

export default function CartItemList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total price
  const calculateTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-semibold mb-6">Cart Items</h1>

      {/* Cart Items List */}
      {cartItems.length > 0 ? (
        <>
          <table className="w-full text-left border-collapse border border-gray-200">
            <thead>
              <tr className="bg-inherit">
                <th className="p-4 border border-gray-200">Item</th>
                <th className="p-4 border border-gray-200">Price</th>
                <th className="p-4 border border-gray-200">Quantity</th>
                <th className="p-4 border border-gray-200">Total</th>
                <th className="p-4 border border-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id} className="border-t">
                  <td className="p-4">{item.title}</td>
                  <td className="p-4">${item?.price?.toFixed(2)}</td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      {/* Decrease Quantity */}
                      <button
                        onClick={() =>
                          dispatch(removeFromCart({ id: item._id }))
                        }
                        className="px-3 py-1 rounded shadow-md border text-red-500 font-bold"
                      >
                        -
                      </button>
                      <span className="font-medium">{item.quantity}</span>
                      {/* Increase Quantity */}
                      <button
                        onClick={() => dispatch(addToCart({ id: item._id }))}
                        className="px-3 py-1 rounded shadow-md border text-green-500 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-4">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() =>
                        dispatch(
                          removeFromCart({ id: item._id, fullRemove: true })
                        )
                      }
                      className="px-3 py-1 rounded shadow-md border text-red-400 font-bold"
                    >
                      x
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Actions */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-6">
            <button
              onClick={() => dispatch(clearCart())}
              className="px-3 py-1 rounded shadow-md border bg-red-500 text-white font-bold"
            >
              Clear Cart
            </button>
            <div className="flex flex-col md:flex-row items-center gap-6 mt-4 md:mt-0">
              <h2 className="text-xl font-medium">
                Total: ${calculateTotal().toFixed(2)}
              </h2>
              <button className="px-3 py-1 rounded shadow-md border bg-primary text-white font-bold">
                Place Order
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-screen w-full flex justify-center items-center">
          <p className="text-center text-yellow-500 font-semibold italic">
            Your cart is empty.
          </p>
        </div>
      )}
    </div>
  );
}
