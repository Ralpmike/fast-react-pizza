/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from 'react-router';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-4">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  // if (!data) {
  //   throw new Response("", {
  //     status: 500,
  //     statusText: "No data available",
  //   });
  // }
  return menu;
}

export default Menu;
