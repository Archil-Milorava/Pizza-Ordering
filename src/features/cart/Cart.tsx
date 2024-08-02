import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { clearCart } from "./cartSlice";
import { RootState } from "../../types/types";
import Button from "../../ui/Button";

function Cart() {
  
  const userName = useSelector((state: RootState) => state.user.userName);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  if (cart.length === 0)
    return (
      <div className="h-full w-full  ">
        <Link className="text-sm text-blue-500 pl-2  mt-4 absolute hover:underline" to="/menu">
          &larr; Back to menu
        </Link>
        <h1 className="text-center pt-28  text-4xl font-extrabold text-stone-700/50">Cart is empty</h1>
      </div>
    );

  return (
    <div className="p-3">
      <Link className="text-sm text-blue-500 hover:underline" to="/menu">
        &larr; Back to menu
      </Link>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="divide-y divide-stone-200">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="mt-4 space-x-2">
        <Link
          className="h-12 w-32 rounded-full bg-yellow-400 p-3 text-sm uppercase text-stone-800 transition-all hover:bg-yellow-300"
          to="/order/new"
        >
          Order pizzas
        </Link>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
