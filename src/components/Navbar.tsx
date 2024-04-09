import Link from "next/link";
import { FaInfoCircle, FaUserAlt } from "react-icons/fa";
import { FaLocationDot, FaCartArrowDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-3 bg-white text-gray-800 shadow-sm">
        <div className="flex items-center ">
          <Link href="/">
            <h1 className="text-4xl text-white  bg-red-500 font-bold">
              REDWOLF
            </h1>
          </Link>
        </div>
        <ul className="flex space-x-10">
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/shop/men"
              className="text-gray-600 hover:text-gray-800"
            >
              Men
            </Link>
          </li>
          <li>
            <Link
              href="/shop/women"
              className="text-gray-600 hover:text-gray-800"
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              href="/shop/accessories"
              className="text-gray-600 hover:text-gray-800"
            >
              Accessories
            </Link>
          </li>
          <li>
            <Link
              href="/characters"
              className="text-gray-600 hover:text-gray-800"
            >
              Characters
            </Link>
          </li>
          <li>
            <Link
              href="/artist-merch"
              className="text-gray-600 hover:text-gray-800"
            >
              Artist Merch
            </Link>
          </li>
          <form action="/search" method="GET">
            <input
              type="text"
              name="query"
              placeholder="Search..."
              className="border border-gray-400 rounded-full mr-2  px-1 py-1"
            />
            <button
              type="submit"
              className="border border-gray-300 rounded-full text-white  hover:text-gray-800 font-semibold bg-red-500 p-1"
            >
              Search
            </button>
          </form>
          <li>
            <FaInfoCircle className="border-0 w-8 h-8 fill-red-500" />
          </li>
          <li>
            <FaLocationDot className="border-0 w-8 h-8 fill-red-500" />
          </li>
          <li>
            <FaUserAlt className="border-0 w-8 h-8 fill-red-500" />
          </li>
          <li>
            <FaCartArrowDown className="border-0 w-8 h-8 fill-red-500" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
