import React, { useState, useEffect } from 'react';
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import logo from '../assets/logo.png';
import { setOpenCart, selectCartItem } from '../app/CartSlice';
import { useSelector } from 'react-redux';

const Narbar = () => {
  const [navState, setNavState] = useState(false);
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItem);
  const selectedItems = cartItem.length;

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      }),
    );
  };

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onNavScroll);
    return () => window.removeEventListener('scroll', onNavScroll);
  }, []);

  return (
    <>
      <header
        className={
          !navState
            ? 'absolute top-7 left-0 right-0 opacity-100 z-50'
            : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
        }
      >
        <nav className="flex items-center justify-between nike-container">
          {/* logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo/img"
              className={`w-16 h-auto ${navState && 'filter brightness-0'}`}
            />
          </div>
          {/* icon cart */}
          <ul className="flex items-center justify-center gap-2">
            <li className="grid items-center">
              <MagnifyingGlassIcon
                className={`icon-style ${
                  navState && 'text-slate-900 transition-all duration-300'
                }`}
              />
            </li>
            <li className="grid items-center">
              <HeartIcon
                className={`icon-style ${
                  navState && 'text-slate-900 transition-all duration-300'
                }`}
              />
            </li>
            <li className="grid items-center">
              <button
                type="button"
                className="border-none outline-none active:scale-100 transition-all
                duration-300 relative"
                onClick={onCartToggle}
              >
                <ShoppingCartIcon
                  className={`icon-style transition-all duration-300 ${
                    !navState ? 'text-slate-100' : 'text-slate-900'
                  }`}
                />
                <div
                  className={`absolute top-[10px]  right-[-5px] shado w-4 h-4 text-[0.65rem]
                leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110  transition-all duration-300
                ${
                  navState
                    ? 'bg-slate-900 text-white shadow-slate-900'
                    : 'bg-slate-100 text-slate-900 shadow-slate-100'
                }`}
                >
                  {selectedItems}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Narbar;
