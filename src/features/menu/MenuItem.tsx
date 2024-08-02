import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem,  increaseItemQuantity, decreaseItemQuantity } from "../../features/cart/cartSlice";

type Cart = {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
};

type MenuItemProps = {
  pizza: Cart;
};

function MenuItem({ pizza }: MenuItemProps) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const itemQuantityById = useSelector((state) => state.cart.cart.find((item) => item.id === id)?.quantity)
  const cart = useSelector((state) => state.cart.cart);
  const itemById = cart.find((item) => item.id === id);

  const dispatch = useDispatch();

  const handleAddItem = () => {
    const newItem = {
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
        <div className="mt-auto flex items-center h-12 justify-between">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {cart.includes(itemById) ? (
            <div className="  w-auto flex gap-2 mr-2 items-center ">
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
