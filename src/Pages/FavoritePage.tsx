import { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addToWishlist, getCart, removeFromWishlist } from "../core/_requests";
import { FavoriteProducts } from "../contexts/ProductContext/getFavoritesProducts";

function FavoritePage() {
  const products = useContext(FavoriteProducts);
  useEffect(() => {}, [products]);

  return (
    <div>
      <header
        className="relative p-12 overflow-hidden text-center bg-no-repeat bg-cover h-36 md:h-44"
        style={{ backgroundImage: "url('/shop.jpeg')" }}
      >
        <div
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-white">
              <h2 className="mb-4 text-2xl font-semibold uppercase md:text-2xl lg:text-5xl">
                Favorite
              </h2>
              <Link to="/">
                <span className="mt-3 inline-flex items-center hover:text-[#4CBB17]">
                  Home /
                </span>
              </Link>

              <span className="text-sm font-bold md:text-lg">Favorite</span>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-10 py-8 m-auto mx-8 my-2 mb-12 md:grid-cols-3 lg:grid-cols-4">
        {/* <!-- CARD 1 --> */}
        {products?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden rounded shadow-lg"
          >
            <Link to={`/productdetail/${item.id}`}>
              <div className="relative">
                <a href={item.linkToDetail}>
                  <img className=" w-96 h-60" src={item.product.image} />
                  <div className="absolute top-0 bottom-0 left-0 right-0 transition duration-300 bg-gray-300 opacity-25 hover:bg-transparent"></div>
                </a>
              </div>
              <div className="px-6 py-4 mb-auto">
                <a
                  href="#"
                  className="font-medium text-lg hover:text-[#4CBB17] transition duration-500 ease-in-out inline-block mb-2"
                >
                  {item.product.name}
                </a>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-[#4CBB17] text-sm">{item.price}</p>
              </div>
            </Link>

            <div className="flex flex-row items-center justify-end px-4 py-3 bg-gray-100 it">
              <button
                id="myButton"
                onClick={async () => {
                  toast("Wow so easy!");
                  removeFromWishlist(item.id);
                  console.log("removed from wishlist");
                  const favorite = await getCart();
                  localStorage.setItem("favorites", JSON.stringify(favorite));
                  const fav = await JSON.parse(
                    localStorage.getItem("favorites") || "{}"
                  );
                  console.log("The favorites in local storage is ", fav);
                }}
              >
                {/* <div className="text-xs absolute top-0 right-0 bg-[#4CBB17] px-4 py-2 text-white mt-3 mr-3">
                  <button
                    onClick={() => {
                      removeFromWishlist(item.id);
                    }}
                  > */}
                    <i className="fa-solid fa-xmark hover:text-green-700"></i>
                  {/* </button>
                </div> */}
              </button>
              <button
                id="myButton"
                onClick={async () => {
                  toast("Wow so easy!");
                  addToWishlist(item.id);
                  console.log("added to wishlist");
                  const favorite = await getCart();
                  localStorage.setItem("favorites", JSON.stringify(favorite));
                  const fav = await JSON.parse(
                    localStorage.getItem("favorites") || "{}"
                  );
                  console.log("The favorites in local storage is ", fav);
                }}
              >
                {/* <i
                      id="like"
                      className={`fa fa-heart px-1.5 sm:px-3 text-sm lg:text-lg`}
                      // ${isFavorite(products) ? "text-green-500" : "text-black"}
                    ></i> */}
              </button>
              {/* <!--cart--> */}
              <a
                href={item.linkToDetail}
                className="px-1.5 sm:px-3 text-sm lg:text-lg"
              >
                <i className="fa-solid fa-cart-shopping hover:text-green-700"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="max-w-screen-xl py-8 m-auto my-2 rounded-lg shadow-md bg-stone-50 w- full md:my-6">
        <div className="grid h-full gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="m-auto bg-white w-[90%] rounded-lg shadow-lg">
            <div className="relative h-full">
              <div className="p-8 lg:overflow-auto lg:h-[calc(100vh-60px)]">
                <h2 className="text-2xl font-bold text-[#4CBB17] mb-4">
                  Favorite Products
                </h2>
                <div className="mt-10 space-y-6">
                  <div className="grid items-start grid-cols-2">
                    <div
                      className="items-center justify-center p-12 overflow-hidden bg-cover rounded-md h-28 w-28 sm:h-36 sm:w-36"
                      style={{ backgroundImage: "url('/lemon.webp')" }}
                    ></div>
                    <div className="pt-6 ml-4 ">
                      <h3 className="text-base text-[#4CBB17] font-bold">
                        Product name
                      </h3>
                      <ul className="mt-4 space-y-3 text-xs text-black lg:text-sm">
                        <li className="flex flex-wrap gap-4">
                          Quantity <span className="ml-auto font-bold">2</span>
                        </li>
                        <li className="flex flex-wrap gap-4">
                          Total Price{" "}
                          <span className="ml-auto font-bold">$0.00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid items-start grid-cols-2">
                    <div
                      className="items-center justify-center p-12 overflow-hidden bg-cover rounded-md h-28 w-28 sm:h-36 sm:w-36"
                      style={{ backgroundImage: "url('/lemon.webp')" }}
                    ></div>
                    <div className="pt-6 ml-4 ">
                      <h3 className="text-base text-[#4CBB17] font-bold">
                        Product name
                      </h3>
                      <ul className="mt-4 space-y-3 text-xs text-black lg:text-sm">
                        <li className="flex flex-wrap gap-4">
                          Quantity <span className="ml-auto font-bold">2</span>
                        </li>
                        <li className="flex flex-wrap gap-4">
                          Total Price{" "}
                          <span className="ml-auto font-bold">$0.00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid items-start grid-cols-2">
                    <div
                      className="items-center justify-center p-12 overflow-hidden bg-cover rounded-md h-28 w-28 sm:h-36 sm:w-36"
                      style={{ backgroundImage: "url('/lemon.webp')" }}
                    ></div>
                    <div className="pt-6 ml-4">
                      <h3 className="text-base text-[#4CBB17] font-bold">
                        Product name
                      </h3>
                      <ul className="mt-4 space-y-3 text-xs text-black lg:text-sm">
                        <li className="flex flex-wrap gap-4">
                          Quantity <span className="ml-auto font-bold">2</span>
                        </li>
                        <li className="flex flex-wrap gap-4">
                          Total Price{" "}
                          <span className="ml-auto font-bold">$0.00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid items-start grid-cols-2">
                    <div
                      className="items-center justify-center p-12 overflow-hidden bg-cover rounded-md h-28 w-28 sm:h-36 sm:w-36"
                      style={{ backgroundImage: "url('/lemon.webp')" }}
                    ></div>
                    <div className="pt-6 ml-4">
                      <h3 className="text-base text-[#4CBB17] font-bold">
                        Product name
                      </h3>
                      <ul className="mt-4 space-y-3 text-xs text-black lg:text-sm">
                        <li className="flex flex-wrap gap-4">
                          Quantity <span className="ml-auto font-bold">2</span>
                        </li>
                        <li className="flex flex-wrap gap-4">
                          Total Price{" "}
                          <span className="ml-auto font-bold">$0.00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid items-start grid-cols-2">
                    <div
                      className="items-center justify-center p-12 overflow-hidden bg-cover rounded-md h-28 w-28 sm:h-36 sm:w-36"
                      style={{ backgroundImage: "url('/lemon.webp')" }}
                    ></div>
                    <div className="pt-6 ml-4">
                      <h3 className="text-base text-[#4CBB17] font-bold">
                        Product name
                      </h3>
                      <ul className="mt-4 space-y-3 text-xs text-black lg:text-sm">
                        <li className="flex flex-wrap gap-4">
                          Quantity <span className="ml-auto font-bold">2</span>
                        </li>
                        <li className="flex flex-wrap gap-4">
                          Total Price{" "}
                          <span className="ml-auto font-bold">$0.00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid items-start grid-cols-2">
                    <div
                      className="items-center justify-center p-12 overflow-hidden bg-cover rounded-md h-28 w-28 sm:h-36 sm:w-36"
                      style={{ backgroundImage: "url('/lemon.webp')" }}
                    ></div>
                    <div className="pt-6 ml-4">
                      <h3 className="text-base text-[#4CBB17] font-bold">
                        Product name
                      </h3>
                      <ul className="mt-4 space-y-3 text-xs text-black lg:text-sm">
                        <li className="flex flex-wrap gap-4">
                          Quantity <span className="ml-auto font-bold">2</span>
                        </li>
                        <li className="flex flex-wrap gap-4">
                          Total Price{" "}
                          <span className="ml-auto font-bold">$0.00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 bottom-0 bg-[#4CBB17] w-full p-4">
                <h4 className="flex flex-wrap gap-4 text-base font-semibold text-white">
                  Total <span className="ml-auto">$0.00</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="sticky top-0 p-8 rounded-md xl:col-span-2 h-max">
            <h2 className="text-2xl font-bold text-[#4CBB17]">
              Complete your order
            </h2>
            <form className="mt-10">
              <div>
                <h3 className="text-lg font-bold text-[#333] mb-6">
                  Personal Details
                </h3>
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-4"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="10"
                        cy="7"
                        r="6"
                        data-original="#000000"
                      ></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-4"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="10"
                        cy="7"
                        r="6"
                        data-original="#000000"
                      ></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      type="email"
                      placeholder="Email"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-4"
                      viewBox="0 0 682.667 682.667"
                    >
                      <defs>
                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                          <path
                            d="M0 512h512V0H0Z"
                            data-original="#000000"
                          ></path>
                        </clipPath>
                      </defs>
                      <g
                        clip-path="url(#a)"
                        transform="matrix(1.33 0 0 -1.33 0 682.667)"
                      >
                        <path
                          fill="none"
                          stroke-miterlimit="10"
                          stroke-width="40"
                          d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                          data-original="#000000"
                        ></path>
                        <path
                          d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                          data-original="#000000"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      type="number"
                      placeholder="Phone No."
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                    />
                    <svg
                      fill="#bbb"
                      className="w-[18px] h-[18px] absolute right-4"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-bold text-[#333] mb-6">
                  Shipping Address
                </h3>
                <div className="grid gap-6 lg:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Address Line"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                  />
                </div>
                <div className="flex gap-6 mt-10 max-sm:flex-col">
                  <button
                    type="button"
                    className="rounded-md px-6 py-3 w-full text-sm font-semibold bg-transparent hover:bg-gray-100 border-2 text-[#333]"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="rounded-md px-6 py-3 w-full text-sm font-semibold bg-[#4CBB17] text-white hover:opacity-75"
                  >
                    Complete Purchase
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
}

export default FavoritePage;
