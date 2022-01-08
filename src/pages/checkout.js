import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, totalItemPrice } from "../slices/basketSlice";
import CheckOutProduct from "../components/CheckOutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(totalItemPrice);

  const session = useSession();
  console.log(session);
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
        <div className="flex flex-col bg-white p-8 shadow-lg ">
          {items.length > 0 && (
            <>
              <h2 className=" whitespace-nowrap">
                Subtotal ({items.length} items):
                <span className=" ml-2 font-bold">
                  <Currency quantity={total} />
                </span>
              </h2>
              <button
                disabled={session.status === "unauthenticated"}
                className={`button mt-2 ${
                  session.status === "unauthenticated" &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed focus:ring-gray-300 "
                }`}
              >
                {session.status === "unauthenticated"
                  ? "Sign in to checkout"
                  : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
