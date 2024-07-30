import {formatCurrency} from  '../../utils/helpers'
import Button from '../../ui/Button'

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className='flex gap-3 mt-2 border border-b-stone-300 pb-2 pr-2  shadow-sm '>
      <img src={imageUrl} alt={name} className={`h-28 ${soldOut ? 'opacity-70 grayscale' : ''}`} />
      <div className='flex flex-col grow'>
        <p className='font-medium'>{name}</p>
        <p className='italic capitalize text-sm text-stone-700'>{ingredients.join(', ')}</p>
        <div className='mt-auto flex justify-between items-center'>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p className='text-sm font-medium uppercase text-stone-500'>Sold out</p>}
        <Button type='small'>add to car</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
