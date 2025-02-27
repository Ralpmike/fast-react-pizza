/* eslint-disable react/prop-types */

import { formatCurrency } from '../../utilities/helpers';
import Deleteitem from './Deleteitem';
import UpadteItemQuantity from './UpadteItemQuantity';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpadteItemQuantity pizzaId={pizzaId} quantity={quantity} />
        <Deleteitem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
