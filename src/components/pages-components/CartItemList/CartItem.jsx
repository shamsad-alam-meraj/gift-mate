import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

const CartItem = ({ item, removeFromCart, addToCart }) => {
  const dispatch = useDispatch();
  return (
    <tr key={item._id}>
      <td className="p-4">{item.title}</td>
      <td className="p-4">${item.price.toFixed(2)}</td>
      <td className="p-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() =>
              dispatch(removeFromCart({ _id: item._id, fullRemove: false }))
            }
            className="px-3 py-1 rounded shadow-md border text-red-500 font-bold"
          >
            -
          </button>
          <span className="font-medium">{item.quantity}</span>
          <button
            onClick={() => dispatch(addToCart(item))}
            className="px-3 py-1 rounded shadow-md border text-green-500 font-bold"
          >
            +
          </button>
        </div>
      </td>
      <td className="p-4">${(item.price * item.quantity).toFixed(2)}</td>
      <td className="p-4">
        <button
          onClick={() =>
            dispatch(removeFromCart({ _id: item._id, fullRemove: true }))
          }
          className="px-3 py-1 rounded shadow-md border text-red-400 font-bold"
        >
          x
        </button>
      </td>
    </tr>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default CartItem;
