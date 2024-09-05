import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../contexts/ProductContext/getProductsContext";
import {
  addToCart,
  addToWishlist,
  getCart,
  getProductById,
} from "../core/_requests";
import { toast } from "react-toastify";
import Modal from "./Modal";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

function Shop() {
  const products = useContext(ProductsContext);
  const [favoriteItem, setFavoriteItem] = useState<Product[]>([]);
  const user = localStorage.getItem("user");

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isProfilOpen, setIsProfilOpen] = useState(false);

  const handleProfil = () => {
    console.log("profile clicked");
    setIsProfilOpen(!isProfilOpen);
  };

  const handleOpenRegister = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const handleClose = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  const handleOpenRegisterAgain = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const handleOpenLoginAgain = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  function addToCart() {
    console.log("Added to cart");
  }

  useEffect(() => {
    const fetchFavorite = async () => {
      try {
        console.log("Executing Favorite function");

        // Fetch favorite items from localStorage
        const fav = JSON.parse(localStorage.getItem("favorites") || "[]");
        console.log("The favorites in local storage are: ", fav);

        // Set the favorite items in state
        setFavoriteItem(fav);

        console.log("The item in the favorite local storage", favoriteItem);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };

    fetchFavorite();
  }, [products]);

  // const isFavorite = (product: ) => favoriteItem.some((fav) => fav.id === product.id);
  // console.log('The favoritesssss', isFavorite);

  return (
    <div>
      {/* <!--Shop--> */}
      <section>
        <div className="max-w-screen-xl px-2 py-4 mx-auto sm:py-4 lg:px-6">
          <h2 className="mb-10 text-lg font-bold text-center uppercase lg:text-2xl">
            Shop
          </h2>

          {/* <!--Best-sellers--> */}

          {/* <!--Best-sellers--> */}
          <div className="flex justify-between px-4 mb-5 text-sm border-b">
            <div className="text-[#4CBB17] flex items-center pb-2 pr-2 border-b-2 border-[#4CBB17] uppercase">
              <a href="#" className="inline-block font-semibold">
                Best sellers
              </a>
            </div>
            <Link to="/product">
              <span className="hover:text-[#4CBB17]">See all</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 mb-12 md:grid-cols-3 lg:grid-cols-4">
            {/* <!-- CARD 1 --> */}
            {products?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded shadow-lg"
              >
                {!user ? (
                    <a
                      href="#"
                      className="nav-user"
                      type="button"
                      onClick={handleOpenRegister}
                    >

                      <div className="relative">
                          <img className=" w-96 h-60" src={item.image} />
                          <div className="absolute top-0 bottom-0 left-0 right-0 transition duration-300 bg-gray-300 opacity-25 hover:bg-transparent"></div>
                        {/* <a href="product.html">
                    <div className="text-xs absolute top-0 right-0 bg-[#4CBB17] px-4 py-2 text-white mt-3 mr-3">
                      {item.category}
                    </div>
                  </a> */}
                      </div>
                      <div className="px-6 py-4 mb-auto">
                        <a
                          href="#"
                          className="font-medium text-lg hover:text-[#4CBB17] transition duration-500 ease-in-out inline-block mb-2"
                        >
                          {item.name}
                        </a>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                        <p className="text-[#4CBB17] text-sm">{item.price}</p>
                      </div>
                    </a>
                ) : (
                  <Link to={`/productdetail/${item.id}`}>
                    <div className="relative">
                      <a href={item.linkToDetail}>
                        <img className=" w-96 h-60" src={item.image} />
                        <div className="absolute top-0 bottom-0 left-0 right-0 transition duration-300 bg-gray-300 opacity-25 hover:bg-transparent"></div>
                      </a>
                      {/* <a href="product.html">
                    <div className="text-xs absolute top-0 right-0 bg-[#4CBB17] px-4 py-2 text-white mt-3 mr-3">
                      {item.category}
                    </div>
                  </a> */}
                    </div>
                    <div className="px-6 py-4 mb-auto">
                      <a
                        href="#"
                        className="font-medium text-lg hover:text-[#4CBB17] transition duration-500 ease-in-out inline-block mb-2"
                      >
                        {item.name}
                      </a>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                      <p className="text-[#4CBB17] text-sm">{item.price}</p>
                    </div>
                  </Link>
                )}

                <div className="flex flex-row items-center justify-end px-4 py-3 bg-gray-100 it">
                  {!user ? (
                    <a
                      href="#"
                      className="nav-user"
                      type="button"
                      onClick={handleOpenRegister}
                    >
                      <i className="fa-regular fa-heart"></i>
                    </a>
                  ) : (
                    <button
                      id="myButton"
                      onClick={async () => {
                        toast("Added to wishlist");
                        addToWishlist(item.id);
                        console.log("added to wishlist");
                        const favorite = await getCart();
                        localStorage.setItem(
                          "favorites",
                          JSON.stringify(favorite)
                        );
                        const fav = await JSON.parse(
                          localStorage.getItem("favorites") || "{}"
                        );
                        console.log("The favorites in local storage is ", fav);
                      }}
                    >
                      <i
                        id="like"
                        className={`fa fa-heart px-1.5 sm:px-3 text-sm lg:text-lg`}
                        // ${isFavorite(products) ? "text-green-500" : "text-black"}
                      ></i>
                    </button>
                  )}

                  {!user ? (
                    <a
                      href="#"
                      className="pl-6 nav-user"
                      type="button"
                      onClick={handleOpenRegister}
                    >
                      <i className="fa-solid fa-cart-shopping"></i>
                    </a>
                  ) : (
                    <a
                      href={"item.linkToDetail"}
                      className="px-1.5 sm:px-3 text-sm lg:text-lg"
                    >
                      <i className="fa-solid fa-cart-shopping hover:text-green-700"></i>
                    </a>
                    //   <button
                    //   id="myButton"
                    //   onClick={async () => {
                    //     toast("Wow so easy!");
                    //     addToWishlist(item.id);
                    //     console.log("added to wishlist");
                    //     const favorite = await getCart();
                    //     localStorage.setItem(
                    //       "favorites",
                    //       JSON.stringify(favorite)
                    //     );
                    //     const fav = await JSON.parse(
                    //       localStorage.getItem("favorites") || "{}"
                    //     );
                    //     console.log("The favorites in local storage is ", fav);
                    //   }}
                    // >
                    //   <i
                    //     id="like"
                    //     className={`fa fa-heart px-1.5 sm:px-3 text-sm lg:text-lg`}

                    //   ></i>
                    // </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* <!--Must try--> */}
          {/* <div className="flex justify-between px-4 mb-5 text-sm border-b">
            <div className="text-[#4CBB17] flex items-center pb-2 pr-2 border-b-2 border-[#4CBB17] uppercase">
              <a href="#" className="inline-block font-semibold">
                Must try
              </a>
            </div>
            <Link to="/product">
              <span className="hover:text-[#4CBB17]">See all</span>
            </Link>
          </div> */}

          {/* <div className="grid grid-cols-2 gap-10 mb-12 md:grid-cols-3 lg:grid-cols-4">
            {products?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded shadow-lg"
              >
                <Link to={`/productdetail/${item.id}`}>
                  <div className="relative">
                    <a href={item.linkToDetail}>
                      <img className=" w-96 h-60" src={item.image} />
                      <div className="absolute top-0 bottom-0 left-0 right-0 transition duration-300 bg-gray-300 opacity-25 hover:bg-transparent"></div>
                    </a>
                    <a href="product.html">
                    <div className="text-xs absolute top-0 right-0 bg-[#4CBB17] px-4 py-2 text-white mt-3 mr-3">
                      {item.category}
                    </div>
                  </a>
                  </div>
                  <div className="px-6 py-4 mb-auto">
                    <a
                      href="#"
                      className="font-medium text-lg hover:text-[#4CBB17] transition duration-500 ease-in-out inline-block mb-2"
                    >
                      {item.name}
                    </a>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <p className="text-[#4CBB17] text-sm">{item.price}</p>
                  </div>
                </Link>
                <div className="flex flex-row items-center justify-end px-4 py-3 bg-gray-100 it">

                  <button id="myButton">
                    <i
                      id="like"
                      className="fa fa-heart px-1.5 sm:px-3 text-sm lg:text-lg"
                    ></i>
                  </button>

                  <a
                    href={item.linkToDetail}
                    className="px-1.5 sm:px-3 text-sm lg:text-lg"
                  >
                    <i className="fa-solid fa-cart-shopping hover:text-green-700"></i>
                  </a>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>
      <Modal isOpen={isLoginOpen}>
        <LoginModal
          openAnotherModal={handleOpenRegisterAgain}
          onClose={handleClose}
        />
      </Modal>

      <Modal isOpen={isRegisterOpen}>
        <RegisterModal
          openAnotherModal={handleOpenLoginAgain}
          onClose={handleClose}
        />
      </Modal>
    </div>
  );
}

export default Shop;
