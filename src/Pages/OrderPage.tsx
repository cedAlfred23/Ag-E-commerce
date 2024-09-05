import { useContext, useEffect } from 'react'
import { OrderContext } from '../contexts/ProductContext/OrderContext';
import Footer from '../components/Footer';

function OrderPage() {
    const products = useContext(OrderContext);
  useEffect(() => {

  }, [products])
  return (
    <div>
        <header className="relative p-12 overflow-hidden text-center bg-no-repeat bg-cover h-36 md:h-44" style={{backgroundImage: "url('/shop.jpeg')"}}>
            <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
                <div className="flex items-center justify-center h-full">
                <div className="text-white">
                    <h2 className="mb-4 text-2xl font-semibold uppercase md:text-2xl lg:text-5xl">Order</h2>
                    <span className="text-sm font-bold md:text-lg">Order</span>
                </div> 
                </div>
            </div>
        </header>

        <div className="p-4">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Order ID</th>
              <th className="px-4 py-2 border-b">Product Name</th>
              <th className="px-4 py-2 border-b">Quantity</th>
              <th className="px-4 py-2 border-b">Price</th>
              <th className="px-4 py-2 border-b">Order Date</th>
            </tr>
          </thead>
         {
            products?.length == 0 ? (
                <div className='text-center'>Nothing here</div>
            ):(
                <tbody>
                {products?.map(order => (
                  <tr key={order.id}>
                    <td className="px-4 py-2 border-b">{order.id}</td>
                    <td className="px-4 py-2 border-b">{order.product.name}</td>
                    <td className="px-4 py-2 border-b">{order.product.name}</td>
                    <td className="px-4 py-2 border-b">${order.price}</td>
                    {/* <td className="px-4 py-2 border-b">{new Date(order.product.name).toLocaleDateString()}</td> */}
                  </tr>
                ))}
              </tbody>
            )
         }
        </table>
      </div>


        <Footer />
    </div>
  )
}

export default OrderPage