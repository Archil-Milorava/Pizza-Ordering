import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import {addItem} from '../../features/cart/cartSlice'

type Cart = {
  id: number,
  name: string,
  unitPrice: number,
  ingredients: string[],
  soldOut: boolean,
  imageUrl: string
}

type MenuItemProps = {
  pizza: Cart;
};

function MenuItem({ pizza }: MenuItemProps) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();

  const handleAddItem = () => {
    const newItem = {
      id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1
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
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut && <Button onClick={handleAddItem} type="small">
            add to cart
          </Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
