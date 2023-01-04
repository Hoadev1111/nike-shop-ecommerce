import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setRemoveItemFromCart,
  setIncreaseItem,
  setDecreaseItem,
} from '../../app/CartSlice';

const CartItem = ({
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) => {
  const dispatch = useDispatch();
  // remove item when click trash
  const removeItem = () => {
    dispatch(
      setRemoveItemFromCart({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      }),
    );
  };
  // remove item when click icon minus
  const decreaseItem = () => {
    dispatch(
      setDecreaseItem({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      }),
    );
  };
  // add item when click icon plus
  const increaseItem = () => {
    dispatch(
      setIncreaseItem({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      }),
    );
  };
  return (
    <>
      <div className="flex items-center justify-between px-5">
        {/* left div */}
        <div className="flex items-center gap-5">
          <div
            className={`bg-gradient-to-b ${color} ${shadow}
          relative rounded p-3 hover:scale-105 transition-all 
          duration-300 ease-in-out grid items-center`}
          >
            <img
              src={img}
              alt={`img-cart-item/${id}`}
              className="w-36 h-auto object-fill lg:w-28 lg:h-auto"
            />
            <div className="absolute top-[10px] right-[10px] border rounded flex items-center justify-center bg-white">
              ${price}
            </div>
          </div>
          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h1 className="font-medium text-lg text-slate-900 lg:text-sm">
                {title}
              </h1>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </div>
            <div className="flex items-center justify-around w-full">
              <button
                type="button"
                className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
                onClick={decreaseItem}
              >
                <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
              <div className="bg-theme-cart rounded text-white font-medium lg:text-sm w-7 h-6 lg:w-6 lg:h-5 flex items-center justify-center">
                {cartQuantity}
              </div>
              <button
                type="button"
                className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
                onClick={increaseItem}
              >
                <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
        {/* right div */}
        <div className="grid items-center gap-5">
          <div className="grid items-center justify-center">
            <h1 className="text-lg lg:text-base text-slate-900 font-medium">
              ${price * cartQuantity}
            </h1>
          </div>
          <div className="grid items-center justify-center">
            <button
              type="button"
              className="bg-theme-cart rounded w-6 h-6 flex items-center justify-center active:scale-90"
              onClick={removeItem}
            >
              <TrashIcon className="w-5 h-5 text-white " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
