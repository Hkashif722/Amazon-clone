import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { itemCounter, removeFromBasket } from "../slices/basketSlice";
function CheckOutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  ratings,
  hasPrime,
  itemCount,
}) {
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  const counter = (event, id) => {
    dispatch(itemCounter({ event, id }));
  };
  //   const increaseCount = () => {};

  return (
    <div className="grid grid-cols-5">
      <div>
        <Image src={image} height={200} width={200} objectFit="contain" />
      </div>
      <div className=" col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(ratings)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-2">{description}</p>
        <Currency quantity={price} currency="INR" />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              className=" w-14"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">Free Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className=" flex flex-col space-y-2 my-auto">
        <button onClick={removeItemFromBasket} className="button">
          Remove From Basket
        </button>
        <div className="flex space-x-2 items-center">
          <button
            onClick={() => counter("decreaseCounter", id)}
            className="button border px-3"
          >
            -
          </button>
          <p className="border px-2 py-1">{itemCount}</p>
          <button
            onClick={() => counter("increaseCounter", id)}
            className="button border px-3"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckOutProduct;
