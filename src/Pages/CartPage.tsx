import { Link } from "react-router-dom"
import Footer from "../Components/Footer"
import GetUpdate from "../Components/GetUpdate"

function CartPage() {
    const user  =  localStorage.getItem('user')
   console.log('The current username in the system is ', user)
  return (
    <>
        {/* <!--hero or header--> */}
    <header className="relative p-12 overflow-hidden text-center bg-no-repeat bg-cover h-36 md:h-44" style={{backgroundImage: "url('/shop.jpeg')"}}>
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
            <div className="flex items-center justify-center h-full">
            <div className="text-white">
                <h2 className="mb-4 text-2xl font-semibold uppercase md:text-2xl lg:text-5xl">Cart</h2>
                   <Link to="/">
                    
                    <span className="mt-3 inline-flex items-center hover:text-[#4CBB17]">Home /</span> 
                    </Link>

                <span className="text-sm font-bold md:text-lg">Cart</span>
            </div> 
            </div>
        </div>
    </header>


 
    {/* <!--cart--> */}
    <div className="max-w-screen-xl py-8 m-auto my-10 bg-gray-50 w- full">
        <div className="container px-4 mx-auto">
            <h1 className="text-2xl mb-4 text-[#4CBB17] font-bold">Shopping Cart</h1>
            <div className="flex flex-col gap-4 md:flex-row">
                <div className="md:w-3/4">
                    <div className="p-6 mb-4 ">
                        <table className="w-full m-auto">
                            <thead>    
                                <tr className="items-center justify-between px-5 m-auto">
                                    <th className="font-semibold text-left w-36 lg:w-60">Product</th>
                                    <th className="w-24 font-semibold text-left lg:w-36">Price</th>
                                    <th className="font-semibold text-left">Quantity</th>
                                    <th className="font-semibold text-left">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-gray-300">
                                    <td className="py-4">
                                        <div className="items-center block lg:flex">
                                            <img className="w-16 h-16 mb-4 md:mr-4" src="https://via.placeholder.com/150" alt="Product image" />
                                            <span className="font-semibold">Product name</span>
                                        </div>
                                    </td>
                                    <td className="py-4">$0.00</td>
                                    <td className="py-4">
                                        <div className="flex items-center">
                                            <input className=" w-[50px] h-[40px] md:w-[70px] md:h-[45px] bg-gray-100 text-center rounded outline-none" type="number" min="1" value="1" />
                                        </div>
                                    </td>
                                    <td className="py-4">$0.00</td>
                                </tr>
                                {/* <!-- More product rows --> */}
                                <tr className="border-t border-gray-300">
                                    <td className="py-4">
                                        <div className="items-center block lg:flex">
                                            <img className="w-16 h-16 mb-4 md:mr-4" src="https://via.placeholder.com/150" alt="Product image" />
                                            <span className="font-semibold">Product name</span>
                                        </div>
                                    </td>
                                    <td className="py-4">$0.00</td>
                                    <td className="py-4">
                                        <div className="flex items-center">
                                            <input className=" w-[50px] h-[40px] md:w-[70px] md:h-[45px] bg-gray-100 text-center rounded outline-none" type="number" min="1" value="1" />
                                        </div>
                                    </td>
                                    <td className="py-4">$0.00</td>
                                </tr>

                                <tr className="border-t border-gray-300">
                                    <td className="py-4">
                                        <div className="items-center block lg:flex">
                                            <img className="w-16 h-16 mb-4 md:mr-4" src="https://via.placeholder.com/150" alt="Product image" />
                                            <span className="font-semibold">Product name</span>
                                        </div>
                                    </td>
                                    <td className="py-4">$0.00</td>
                                    <td className="py-4">
                                        <div className="flex items-center">
                                            <input className=" w-[50px] h-[40px] md:w-[70px] md:h-[45px] bg-gray-100 text-center rounded outline-none" type="number" min="1" value="1" />
                                        </div>
                                    </td>
                                    <td className="py-4">$0.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="md:w-1/4">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-lg font-bold mb-4 text-[#4CBB17]">Summary</h2>
                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>$0.009</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Taxes</span>
                            <span>$0.00</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Shipping</span>
                            <span>$0.00</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">Total</span>
                            <span className="font-semibold">$0.00</span>
                        </div>
                        <Link to="/checkout"  >
                        <button className="bg-[#4CBB17] text-white py-2 px-4 rounded-lg mt-4 w-full">
                            Checkout
                            </button>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

<GetUpdate />
<Footer />
    </>
  )
}

export default CartPage