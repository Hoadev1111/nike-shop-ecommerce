import React from 'react';
import emptybag from '../../assets/emptybag.png';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const CartEmpty = ({ onCartToggle }) => {
  return (
    <>
      <div className="flex items-center justify-center flex-col h-screen px-11 text-center gap-7">
        <img
          src={emptybag}
          alt=""
          className="w-[120px] lg:w-[96px] h-auto object-full
          transition-all duration-300 hover:scale-110"
        />
        <button
          type="button"
          className="button-theme bg-gradient-to-b from-amber-500 to-orange-500
           flex items-center justify-center text-slate-900 py-2 px-5 text-sm
           active:scale-110 gap-3"
          onClick={onCartToggle}
        >
          <ArrowLeftIcon className="w-4 h-4 text-slate-900" />
          <span className="">Back To Nike Store</span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
