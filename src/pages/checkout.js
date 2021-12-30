import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckOutProduct from "../components/CheckOutProduct";

function Checkout() {
  const items = useSelector(selectItems);
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="http://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className=" text-3xl border-b pb-4 ">
              {items.length === 0
                ? "Your Amazon basket is empty"
                : "Shopping Basket"}
            </h1>
            {items.map(
              (
                {
                  id,
                  title,
                  price,
                  description,
                  hasPrime,
                  category,
                  image,
                  ratings,
                  itemCount,
                  initialPrice,
                },
                i
              ) => (
                <CheckOutProduct
                  key={i}
                  id={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                  ratings={ratings}
                  hasPrime={hasPrime}
                  itemCount={itemCount}
                  initialPrice={initialPrice}
                />
              )
            )}
          </div>
        </div>
        <div>{/* right  */}</div>
      </main>
    </div>
  );
}

export default Checkout;
