import { useLoaderData } from 'react-router-dom';
import {getMenu} from '../../services/apiRestaurant'
import MenuItem from './MenuItem';


type Menu = {
id: number,
imageUrl: string,
ingredients: string[],
name: string,
soldOut: boolean,
unitPrice: number
}

function Menu() {
const menu = useLoaderData() as Menu[];





  return <ul className='px-1'>
    {menu.map((pizza) => <MenuItem pizza={pizza} key={pizza.id}/>)}
  </ul>;
}

export default Menu;


export async function menuLoader() {
const menu = await getMenu()
return menu;
}
