import Image from "next/image";

import {
  MenuAlt1Icon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Header() {
  const session = useSession();
  const router = useRouter();

  return (
    <header>
      {/* top nav  */}
      <div className=" flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className=" cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex bg-yellow-400 hover:bg-yellow-500 h-10 items-center rounded-md flex-grow">
          <input
            className="p-2 h-full w-6 flex-grow outline-none flex-shrink rounded-l-md px-4"
            type="text"
          />
          <SearchIcon className="h-14 p-4" />
        </div>
        <div className="text-white flex ml-6 text-xs space-x-6 items-center whitespace-nowrap">
          <div
            onClick={session.status === "unauthenticated" ? signIn : signOut}
            className=" cursor-pointer link"
          >
            <p>
              {session.data !== null
                ? `Hello, ${
                    session.data?.user.name === undefined
                      ? ""
                      : session.data?.user.name
                  }`
                : "Sign In"}{" "}
            </p>
            <p className=" font-extrabold  md:text-sm">Acconut & Lists</p>
          </div>
          <div className=" link">
            <p>Returns</p>
            <p className=" font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className=" relative flex items-center link">
            <span className="absolute top-0 right-0 md:right-10 w-4 h-4 bg-yellow-400 hover:bg-yellow-500 text-center text-black rounded-full font-bold ">
              5
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* bottom nav  */}
      <div className="flex items-center space-x-3 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline">Electronics</p>
      </div>
    </header>
  );
}

export default Header;
