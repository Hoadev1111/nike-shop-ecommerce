import { StarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setAddItemsToCart, setOpenCart } from '../../app/CartSlice';

const Item = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  const dispatch = useDispatch();
  const onAddToCart = () => {
    const item = { id, title, text, img, color, shadow, price };
    dispatch(setAddItemsToCart(item));
  };

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      }),
    );
  };
  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid
         w-full items-center ${
           ifExists ? 'justify-items-start' : 'justify-items-center'
         } rounded-xl py-4 px-5
         transition-all ease-in-out hover:scale-101`}
      >
        {/* information about items */}
        <div
          className={`grid items-center ${
            ifExists ? 'justify-items-start' : 'justify-items-center'
          }`}
        >
          <h1 className="text-xl font-medium text-slate-200 drop-shadow filter lg:text-lg md:text-base">
            {title}
          </h1>
          <p className="text-base font-normal text-slate-200 drop-shadow filter md:text-sm">
            {text}
          </p>
          <div className="itmes-center mt-2 flex w-28 justify-between">
            <div className="blur-effect-theme flex items-center rounded bg-white/80 px-1">
              <h1 className="text-sm font-medium text-black">${price}</h1>
            </div>
            <div className="flex items-center gap-[2px]">
              <StarIcon className="icon-style h-5 w-5 text-yellow-300 md:h-4 md:w-4" />
              <h1 className="text-sm font-bold text-slate-200">{rating}</h1>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-center gap-3">
            <button
              type="button"
              className="blur-effect-theme button-theme bg-white/90 p-0.5 shadow shadow-sky-200"
              onClick={() => onAddToCart()}
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="blur-effect-theme button-theme bg-white/90 p-1 text-sm shadow shadow-sky-200"
              onClick={() => {
                onAddToCart();
                onCartToggle();
              }}
            >
              {btn}
            </button>
          </div>
        </div>
        {/* img popular sales */}
        <div
          className={`flex items-center ${
            ifExists ? 'absolute top-5 right-1' : 'justify-center'
          }`}
        >
          <img
            src={img}
            alt={`img/item-img/${id}`}
            className={`transitions-theme hover:-rotate-12 ${
              ifExists
                ? 'h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]'
                : 'h-36 w-64'
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Item;
