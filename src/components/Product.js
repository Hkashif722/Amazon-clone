import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";

const MAX = 5;
const MIN = 1;

function Product({ id, title, price, description, category, image, rating }) {
  const [ratings] = useState(Math.floor(Math.random() * (MAX - MIN + 1)) + MIN);
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 ">
      <p className=" absolute top-5 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4>{title}</h4>
      <div className="flex">
        {Array(ratings)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2 ">{description}</p>
      <div className="">
        <Currency quantity={`${price + 1000}`} currency="INR" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 ">
          <img className="w-14" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">Free Next-day Delivery</p>
        </div>
      )}
      <button className=" mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;
