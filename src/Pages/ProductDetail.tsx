import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { addToWishlist, getProductById } from "../core/_requests";

function ProductDetail() {
  const {productId} = useParams();
  // const [isDone, setIsDone] = useState(false);
  const [productDetails, setProductDetails] = useState(null);
  
  useEffect(() => {
    console.log("Product ID from URL:", productId);
    const fetchProductDetails = async () => {
      try {
        console.log("Retrieving details 1", productId)
        const details = await getProductById(productId||'');
        // const wish = await addToWishlist(productId||'');
        // console.log("The response for products wish is ", wish);
        setProductDetails(details);
        console.log("Retrieving details 2")
        console.log("The product details are ", details);
      } catch (error) {
        console.error('Failed to fetch product details:', error);
      }
    };

    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />

      {/* <!--product detail--> */}
      <section className="py-8">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <a
            href="index.html"
            className="inline-flex items-center mt-3 mb-4 text-sm md:mb-0 md:text-lg"
          >
            Home
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <a href="#" className="text-[#4CBB17] font-bold text-sm md:text-lg">
          {productDetails['name']}
          </a>
          <div className="flex flex-col items-center justify-center -mx-4 md:flex-row">
            <div className="px-4 md:flex-1">
              <div className="h-[350px] mb-4">
                <img
                  className="object-cover object-center w-full h-full cursor-pointer"
                  src={productDetails['image']}
                />
              </div>
              <div className="flex mb-4 -mx-2">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-[#4CBB17] text-white py-2 px-4 rounded-full font-bold hover:opacity-75">
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded-full hover:opacity-75">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
            <div className="px-4 md:flex-1">
              <h2 className="text-lg lg:text-4xl text-[#4CBB17] font-bold mb-2">
              {productDetails['name']}
              </h2>
              <p className="mb-4 text-sm text-black lg:text-base">
              {productDetails['description']}
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold">Price:</span>
                  <span className="text-[#4CBB17] font-bold"> $ {productDetails['price']}</span>
                </div>
                <div>
                  <span className="font-bold">Availability:</span>
                  <span className="text-[#4CBB17] font-bold">{productDetails['stock']} In Stock</span>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-black">Select Size:</span>
                <div className="flex items-center mt-2">
                  <button className="bg-gray-100 text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-[#4CBB17] hover:text-white">
                    500G
                  </button>
                  <button className="bg-gray-100 text-black py-2 px-4 rounded-full font-bold mr-2 hover:bg-[#4CBB17] hover:text-white">
                    1KG
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-black">Quantity</span>
                <div className="flex items-center mt-2">
                  <input
                    className="w-[70px] h-[45px] bg-gray-200 text-center rounded outline-none"
                    type="number"
                    defaultValue="1"
                  />
                </div>
              </div>
              <div>
                <span className="font-bold text-[#4CBB17]">
                  Product Description
                </span>
                <p className="mt-2 text-sm text-black lg:text-base">
                {productDetails['description']}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProductDetail;
