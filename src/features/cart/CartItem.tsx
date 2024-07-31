import {formatCurrency} from './../../utils/helpers'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux';
import {removeItem} from '../../features/cart/cartSlice'


function CartItem({ item }) {
  const { id, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(id))
  }

  return (
    <li className='py-3 sm:flex sm:items-center sm:justify-between'>
      <p className='mb-1'>
        {quantity}&times; {name}
      </p>
      <div className='flex space-x-2 items-center justify-between'>
        <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>
        <Button onClick={handleRemoveItem} type="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
