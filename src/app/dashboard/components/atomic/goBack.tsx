"use client"

import { RiArrowGoBackFill } from 'react-icons/ri';
import { handleGoBack } from '@/app/utils/goBack';

export default function GoBack() {


  return (
    <div onClick={handleGoBack}  className="flex flex-col justify-center items-center text-white bg-black p-1 rounded-md hover:bg-violet-500 cursor-pointer duration-200">
      <RiArrowGoBackFill />
      <p>volver</p>
    </div>
  );
}