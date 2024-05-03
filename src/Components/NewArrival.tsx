import { Link } from "react-router-dom";

function NewArrival() {
    const newArrival = [
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
      {/* <!--New arrivals--> */}
      <section>
        <div className="max-w-screen-xl px-2 py-4 mx-auto sm:py-4 lg:px-6">
          <h2 className="mb-10 text-lg font-bold text-center uppercase lg:text-2xl">
            New arrivals
          </h2>

          <div className="grid grid-cols-2 gap-10 mb-12 md:grid-cols-3 lg:grid-cols-4">
            {/* <!-- CARD 1 --> */}
            {newArrival.map((item, index) => (
                <div key={index} className="flex flex-col overflow-hidden rounded shadow-lg">
                  <Link to="/productdetail/">
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

export default NewArrival