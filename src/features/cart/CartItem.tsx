import { useDispatch, useSelector } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity } from '../../features/cart/cartSlice';
import { formatCurrency } from './../../utils/helpers';


function CartItem({ item }) {
  const { id, name, quantity, totalPrice } = item;
  const itemId = useSelector((state) => state.cart.cart.find((item) => item.id === id))
  const itemQuantityById = itemId.quantity
  console.log(itemQuantityById);
  
  const dispatch = useDispatch();

  

  return (
    <li className='py-3 sm:flex sm:items-center sm:justify-between'>
      <p className='mb-1'>
        {quantity}&times; {name}
      </p>
      <div className='flex space-x-2 items-center justify-between'>
        <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>
        <button onClick={() => dispatch(decreaseItemQuantity(id))}>-</button>
        <span>{itemQuantityById}</span>
        <button onClick={() => dispatch(increaseItemQuantity(id))}>+</button>
      </div>
    </li>
  );
}

export default CartItem;


//<Button onClick={handleRemoveItem} type="small">Delete</Button>
