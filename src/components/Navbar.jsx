import React, { useContext, useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";
import productData from "../assets/static/product";
import { authContext } from "../context/authContext";

const Navbar = () => {
  const [user, setUser] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const { cartItems } = useContext(authContext);

  const items = cartItems.length;
  const products = productData.map((item) => item.productName);

  const handleSearch = (e) => {
    const { value } = e.target;

    // Find the product by its name, ensuring case-insensitive and space-trimmed matching
    const sortedSearch = products.filter((product) =>
      product.toLowerCase().includes(value.toLowerCase().trim())
    );

    setSearchList(sortedSearch);
  };

  return (
    <>
      <div
        onMouseDown={() => setSearchList([])}
        className="navbar bg-base-100 px-6"
      >
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-2xl">
            <span className="text-primary text-2xl -mr-[8px]">O</span>Shop
          </Link>
        </div>
        <div className="w-full relative md:block hidden">
          <label className="w-full input input-bordered flex items-center gap-2">
            <input
              onChange={handleSearch}
              name="search"
              type="text"
              className="grow"
              placeholder="Search Here..."
            />
            <FaMagnifyingGlass />
          </label>
          <div
            className={`overflow-y-auto customScroll w-full max-h-56 absolute top-[50px] z-10 bg-white`}
          >
            <ul className="">
              {searchList.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 border-b-2 border-zinc-100 text-zinc-500 hover:text-black cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          {/* Cart UI design */}
          <Link to="/cart" className="dropdown dropdown-end mr-3">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <MdOutlineShoppingCart className="text-2xl" />
                <span className="badge badge-sm indicator-item">{items}</span>
              </div>
            </div>
          </Link>
          {/* Right buttons of navbar */}
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary">
              Login
              <IoLogIn className="text-2xl" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
