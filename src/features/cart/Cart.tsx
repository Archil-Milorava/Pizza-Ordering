import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import Button from '../../ui/Button'

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className='p-3'>
      <Link className='text-sm text-blue-500 hover:underline' to="/menu">&larr; Back to menu</Link>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, achi</h2>

      <ul className='divide-y divide-stone-200'>
        {cart.map(item => <CartItem item={item} key={item.key} />)}
      </ul>

      <div className='mt-4 space-x-2'>
        <Link className='bg-yellow-400 rounded-full w-32 h-12 p-3 text-sm uppercase text-stone-800 hover:bg-yellow-300 transition-all' to="/order/new">Order pizzas</Link>
        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
