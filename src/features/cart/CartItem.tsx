import { useDispatch, useSelector } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity } from '../../features/cart/cartSlice';
import { formatCurrency } from './../../utils/helpers';
import Button from "../../ui/Button"


function CartItem({ item }) {
  const { id, name, quantity, totalPrice } = item;
  const itemQuantityById = useSelector((state) => state.cart.cart.find((item) => item.id === id)?.quantity)
  
  const dispatch = useDispatch();

  

  return (
    <li className='py-3 sm:flex sm:items-center sm:justify-between'>
      <p className='mb-1'>
        {quantity}&times; {name}
      </p>
      <div className='flex space-x-2 items-center justify-between'>
        <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>
        <Button type='plusMinus' onClick={() => dispatch(decreaseItemQuantity(id))}>-</Button>
        <span>{itemQuantityById}</span>
        <Button type="plusMinus" onClick={() => dispatch(increaseItemQuantity(id))}>+</Button>
      </div>
    </li>
  );
}

export default CartItem;


//<Button onClick={handleRemoveItem} type="small">Delete</Button>
