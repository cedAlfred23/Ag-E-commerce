import { Link } from "react-router-dom"
import Footer from "../components/Footer"

function ProductPage() {
    const sellerData = [
        {
            category: "fruit",
            image: "/lemon.webp",
            name: "Lemon",
            description: "Description",
            price: "0$",
            linkToDetail: "#"
        },
        {
            category: "fruit",
            image: "/tomato.webp",
            name: "tomato",
            description: "Description",
            price: "0$",
            linkToDetail: "#"
        },
        {
            category: "fruit",
            image: "/lettuce.webp",
            name: "Lettuce",
            description: "Description",
            price: "0$",
            linkToDetail: "#"
        },
        {
            category: "fruit",
            image: "/potato.webp",
            name: "Potato",
            description: "Description",
            price: "0$",
            linkToDetail: "#"
        }
    ];
  return (
    <div>
         {/* <!--hero or header--> */}
    <header className="relative p-12 overflow-hidden text-center bg-no-repeat bg-cover h-80 md:h-96" style={{backgroundImage: " url('/shop.jpg')"}}>
  <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
    <div className="flex items-center justify-center h-full">
      <div className="text-white">
        <h2 className="mb-4 text-2xl md:text-2xl lg:text-5xl font-semibold uppercase hover:-[#4CBB17]">Products</h2>
        <Link to="/" className="inline-flex items-center mt-3">Home
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
      </Link>
      </div>
    </div>
  </div>
</header>


{/* <!--filter--> */}
<section>
  <div className="max-w-screen-xl px-2 py-4 mx-auto my-20 sm:py-4 lg:px-6">
    {/* <!--filter-list--> */}
  <div className="m-auto mb-10 filter-list">
    <ul className="flex items-center justify-center list-none flew-wrap">
        <li className="filter-list active bg-[#4CBB17] text-white py-2 px-8 rounded my-[15px] font-bold cursor-pointer text-sm md:text-lg" data-filter="all">All</li>
        <li className="filter-list py-2 px-8 rounded my-[15px] text-black font-bold cursor-pointer text-sm md:text-lg" data-filter="vegetable">Vegetable</li>
        <li className="filter-list py-2 px-8 rounded my-[15px] text-black font-bold cursor-pointer text-sm md:text-lg" data-filter="fruit">Fruit</li>
    </ul>
</div>
      <div className="grid gap-10 mb-12 ">
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
            {sellerData.map((item, index) => (
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
            {sellerData.map((item, index) => (
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

      {/* <!--pagination--> */}
  <nav aria-label="Page navigation" className="items-center justify-center m-auto">
    <ul className="flex items-center h-10 text-base">
      <li className="mx-1">
        <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 text-gray-400 bg-white border border-gray-300 hover:bg-[#4CBB17] hover:text-white">
          <span className="sr-only">Previous</span>
          <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
          </svg>
        </a>
      </li>
      <li className="mx-1">
        <a href="#" className="flex items-center justify-center px-4 h-10 text-gray-400 bg-white border border-gray-300 hover:bg-[#4CBB17] hover:text-white">1</a>
      </li>
      <li className="mx-1">
        <a href="#" className="flex items-center justify-center px-4 h-10 text-gray-400 bg-white border border-gray-300 hover:bg-[#4CBB17] hover:text-white">2</a>
      </li>
      <li className="mx-1">
        <a href="#" className="flex items-center justify-center px-4 h-10 text-gray-500 bg-white border border-gray-300 hover:bg-[#4CBB17] hover:text-white">
          <span className="sr-only">Next</span>
          <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
  
  </div>
</section>

<Footer />


    </div>
  )
}

export default ProductPage