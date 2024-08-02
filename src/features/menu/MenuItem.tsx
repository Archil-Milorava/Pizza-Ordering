import { formatCurrency } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../cart/cartSlice";
import { RootState, Pizza, CartItemType } from "../../types/types";
import Button from "../../ui/Button";

interface MenuItemProps {
  pizza: Pizza;
}

function MenuItem({ pizza }: MenuItemProps) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const itemQuantityById = useSelector(
    (state: RootState) => state.cart.cart.find((item) => item.id === id)?.quantity
  );
  const cart = useSelector((state: RootState) => state.cart.cart);
  const itemById = cart.find((item) => item.id === id);

  const dispatch = useDispatch();

  const handleAddItem = () => {
    const newItem: CartItemType = {
      id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  };

  return (
    <li className="mt-2 flex gap-3 border border-b-stone-300 pb-2 pr-2 shadow-sm">
      <img
        src={imageUrl}
        alt={name}
        className={`h-28 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-700">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex h-12 items-center justify-between">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {itemById ? (
            <div className="mr-2 flex w-auto items-center gap-2">
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
          ) : (
            !soldOut && (
              <Button onClick={handleAddItem} type="small">
                add to cart
              </Button>
            )
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
