import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../core/ProductContext/getProductsContext";

// // export interface Product {
// //   category: string;
// //   image: string;
// //   name: string;
// //   description: string;
// //   price: string;
// //   linkToDetail: string;
// // }

// // interface ShopProps {
// //   productData: Product[];
// // }

// const Shop = () => {
//   const products = useContext(ProductsContext);

//   return (
//     <>

//       {/* <!--Shop--> */}
//       <section>
//         <div className="max-w-screen-xl px-2 py-4 mx-auto sm:py-4 lg:px-6">
//           <h2 className="mb-10 text-lg font-bold text-center uppercase lg:text-2xl">
//             Shop
//           </h2>

//           {/* <!--Best-sellers--> */}

//           {/* <!--Best-sellers--> */}
//           <div className="flex justify-between px-4 mb-5 text-sm border-b">
//             <div className="text-[#4CBB17] flex items-center pb-2 pr-2 border-b-2 border-[#4CBB17] uppercase">
//               <a href="#" className="inline-block font-semibold">
//                 Best sellers
//               </a>
//             </div>
//               <Link to="/product"><span className="hover:text-[#4CBB17]">See all</span></Link>
//           </div>

//           <div className="grid grid-cols-2 gap-10 mb-12 md:grid-cols-3 lg:grid-cols-4">
//             {/* <!-- CARD 1 --> */}
//             {products?.map((item, index) => (
//                 <div key={index} className="flex flex-col overflow-hidden rounded shadow-lg">
//                   <Link to="/productdetail">
//                 <div className="relative">
//                   <a href={"item.linkToDetail"}>
//                     <img className="w-full" src={item.image} />
//                     <div className="absolute top-0 bottom-0 left-0 right-0 transition duration-300 bg-gray-300 opacity-25 hover:bg-transparent"></div>
//                   </a>
//                   <a href="product.html">
//                     <div className="text-xs absolute top-0 right-0 bg-[#4CBB17] px-4 py-2 text-white mt-3 mr-3">
//                       {item.category}
//                     </div>
//                   </a>
//                 </div>
//                 <div className="px-6 py-4 mb-auto">
//                   <a
//                     href="#"
//                     className="font-medium text-lg hover:text-[#4CBB17] transition duration-500 ease-in-out inline-block mb-2"
//                   >
//                     {item.name}
//                   </a>
//                   <p className="text-sm text-gray-500">{item.description}</p>
//                   <p className="text-[#4CBB17] text-sm">{item.price}</p>
//                 </div>
//                 <div className="flex flex-row items-center justify-end px-4 py-3 bg-gray-100 it">
//                   {/* <!--like button--> */}
//                   <button id="myButton">
//                     <i
//                       id="like"
//                       className="fa fa-heart px-1.5 sm:px-3 text-sm lg:text-lg"
//                     ></i>
//                   </button>
//                   {/* <!--cart--> */}
//                   <a href={"item.linkToDetail"} className="px-1.5 sm:px-3 text-sm lg:text-lg">
//                     <i className="fa-solid fa-cart-shopping hover:text-green-700"></i>
//                   </a>
//                 </div>
//                 </Link>
//               </div>
//             ))}
//           </div>

//           {/* <!--Must try--> */}
//           <div className="flex justify-between px-4 mb-5 text-sm border-b">
//             <div className="text-[#4CBB17] flex items-center pb-2 pr-2 border-b-2 border-[#4CBB17] uppercase">
//               <a href="#" className="inline-block font-semibold">
//                 Must try
//               </a>
//             </div>
//             <Link to="/product"><span className="hover:text-[#4CBB17]">See all</span></Link>
//           </div>

//           <div className="grid grid-cols-2 gap-10 mb-12 md:grid-cols-3 lg:grid-cols-4">
//             {/* <!-- CARD 1 --> */}
//             {products?.map((item, index) => (
//                <div key={index} className="flex flex-col overflow-hidden rounded shadow-lg">
//                <Link to="/productdetail">
//              <div className="relative">
//                <a href={item.linkToDetail}>
//                  <img className="w-full" src={item.image} />
//                  <div className="absolute top-0 bottom-0 left-0 right-0 transition duration-300 bg-gray-300 opacity-25 hover:bg-transparent"></div>
//                </a>
//                <a href="product.html">
//                  <div className="text-xs absolute top-0 right-0 bg-[#4CBB17] px-4 py-2 text-white mt-3 mr-3">
//                    {item.category}
//                  </div>
//                </a>
//              </div>
//              <div className="px-6 py-4 mb-auto">
//                <a
//                  href="#"
//                  className="font-medium text-lg hover:text-[#4CBB17] transition duration-500 ease-in-out inline-block mb-2"
//                >
//                  {item.name}
//                </a>
//                <p className="text-sm text-gray-500">{item.description}</p>
//                <p className="text-[#4CBB17] text-sm">{item.price}</p>
//              </div>
//              <div className="flex flex-row items-center justify-end px-4 py-3 bg-gray-100 it">
//                {/* <!--like button--> */}
//                <button id="myButton">
//                  <i
//                    id="like"
//                    className="fa fa-heart px-1.5 sm:px-3 text-sm lg:text-lg"
//                  ></i>
//                </button>
//                {/* <!--cart--> */}
//                <a href={item.linkToDetail} className="px-1.5 sm:px-3 text-sm lg:text-lg">
//                  <i className="fa-solid fa-cart-shopping hover:text-green-700"></i>
//                </a>
//              </div>
//              </Link>
//            </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Shop




function Shop() {
  const products = useContext(ProductsContext);
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
              <Link to="/product"><span className="hover:text-[#4CBB17]">See all</span></Link>
          </div>

          <div className="grid grid-cols-2 gap-10 mb-12 md:grid-cols-3 lg:grid-cols-4">
            {/* <!-- CARD 1 --> */}
            {products?.map((item, index) => (
                <div key={index} className="flex flex-col overflow-hidden rounded shadow-lg">
                  <Link to="/productdetail">
                <div className="relative">
                  <a href={"item.linkToDetail"}>
                    <img className="w-full" src={item.image} />
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
                <div className="flex flex-row items-center justify-end px-4 py-3 bg-gray-100 it">
                  {/* <!--like button--> */}
                  <button id="myButton">
                    <i
                      id="like"
                      className="fa fa-heart px-1.5 sm:px-3 text-sm lg:text-lg"
                    ></i>
                  </button>
                  {/* <!--cart--> */}
                  <a href={"item.linkToDetail"} className="px-1.5 sm:px-3 text-sm lg:text-lg">
                    <i className="fa-solid fa-cart-shopping hover:text-green-700"></i>
                  </a>
                </div>
                </Link>
              </div>
            ))}
          </div>

          {/* <!--Must try--> */}
          <div className="flex justify-between px-4 mb-5 text-sm border-b">
            <div className="text-[#4CBB17] flex items-center pb-2 pr-2 border-b-2 border-[#4CBB17] uppercase">
              <a href="#" className="inline-block font-semibold">
                Must try
              </a>
            </div>
            <Link to="/product"><span className="hover:text-[#4CBB17]">See all</span></Link>
          </div>

          <div className="grid grid-cols-2 gap-10 mb-12 md:grid-cols-3 lg:grid-cols-4">
            {/* <!-- CARD 1 --> */}
            {products?.map((item, index) => (
               <div key={index} className="flex flex-col overflow-hidden rounded shadow-lg">
               <Link to="/productdetail">
             <div className="relative">
               <a href={item.linkToDetail}>
                 <img className="w-full" src={item.image} />
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
             <div className="flex flex-row items-center justify-end px-4 py-3 bg-gray-100 it">
               {/* <!--like button--> */}
               <button id="myButton">
                 <i
                   id="like"
                   className="fa fa-heart px-1.5 sm:px-3 text-sm lg:text-lg"
                 ></i>
               </button>
               {/* <!--cart--> */}
               <a href={item.linkToDetail} className="px-1.5 sm:px-3 text-sm lg:text-lg">
                 <i className="fa-solid fa-cart-shopping hover:text-green-700"></i>
               </a>
             </div>
             </Link>
           </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shop