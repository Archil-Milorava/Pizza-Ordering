import { useDispatch, useSelector } from "react-redux";
import { increaseItemQuantity, decreaseItemQuantity } from "./cartSlice";
import { CartItemType } from "../../types/types";
import { RootState } from "../../types/types";
import Button from "../../ui/Button";

interface CartItemProps {
  item: CartItemType;
}

function CartItem({ item }: CartItemProps) {
  const { id, name, quantity, totalPrice } = item;

  const itemQuantityById = useSelector((state: RootState) => state.cart.cart.find((item) => item.id === id)?.quantity,
  );

  const dispatch = useDispatch();

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between space-x-2">
        <p className="text-sm font-bold">${totalPrice}</p>
        <Button
          type="plusMinus"
          onClick={() => dispatch(decreaseItemQuantity(id))}
        >
          -
        </Button>
        <span>{itemQuantityById}</span>
        <Button
          type="plusMinus"
          onClick={() => dispatch(increaseItemQuantity(id))}
        >
          +
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
