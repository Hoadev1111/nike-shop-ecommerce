import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartItem,
  selectCartState,
  setCloseCart,
  setEmptyItem,
} from '../app/CartSlice.js';
import CartCount from './Cart/CartCount.jsx';
import CartEmpty from './Cart/CartEmpty.jsx';
import CartItem from './Cart/CartItem';

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItem);
  const total = cartItems.reduce((result, cur) => {
    return result + Number(cur.price) * cur.cartQuantity;
  }, 0);
  const numberItem = cartItems.length;

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      }),
    );
  };

  const onClearCartItem = () => {
    dispatch(setEmptyItem());
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen
        opacity-100 z-[250] ${
          ifCartState
            ? 'opacity-100 visible translate-x-0'
            : 'opacity-0 invisible translate-x-8'
        }`}
        onClick={onCartToggle}
      >
        <div
          className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}
          onClick={(event) => event.stopPropagation()}
        >
          <CartCount
            onCartToggle={onCartToggle}
            onClearCartItem={onClearCartItem}
            numberItem={numberItem}
          />
          {cartItems?.length === 0 ? (
            <CartEmpty onCartToggle={onCartToggle} />
          ) : (
            <div>
              <div
                className="flex flex-col justify-start gap-y-7 
              overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3"
              >
                {cartItems?.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>
              <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold text-base uppercase">
                    Subtitle
                  </h1>
                  <h1 className="text-sm rounded bg-theme-cart text-white px-1 py-0.5">
                    ${total}
                  </h1>
                </div>
                <div className="grid items-center gap-2">
                  <p className="text-sm font-medium text-center">
                    Taxes and Shipping will calculator at Shipping
                  </p>
                  <button
                    type="button"
                    className="button-theme bg-theme-cart text-white"
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
