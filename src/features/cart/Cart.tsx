import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import Button from '../../ui/Button'
import {  useSelector } from 'react-redux';



function Cart() {
  const userName = useSelector(state => state.user.userName)
  const cart = useSelector((state) => state.cart.cart);
 

  

  return (
    <div className='p-3'>
      <Link className='text-sm text-blue-500 hover:underline' to="/menu">&larr; Back to menu</Link>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, {userName}</h2>

      <ul className='divide-y divide-stone-200'>
        {cart.map(item => <CartItem item={item} key={item.id} />)}
      </ul>

      <div className='mt-4 space-x-2'>
        <Link className='bg-yellow-400 rounded-full w-32 h-12 p-3 text-sm uppercase text-stone-800 hover:bg-yellow-300 transition-all' to="/order/new">Order pizzas</Link>
        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
