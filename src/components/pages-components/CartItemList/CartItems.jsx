import PropTypes from "prop-types";
import CartItem from "./CartItem";

const CartItems = ({ cartItems, removeFromCart, addToCart }) => {
  return (
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
          <CartItem
            key={item._id}
            item={item}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
          />
        ))}
      </tbody>
    </table>
  );
};

CartItems.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default CartItems;
