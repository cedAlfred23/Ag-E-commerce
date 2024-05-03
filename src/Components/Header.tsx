import { Link } from 'react-router-dom';
function Header() {
  return (
   <> 
   {/* <!--hero or header--> */}
   <header className="relative p-12 overflow-hidden text-center bg-no-repeat bg-cover h-80 md:h-96" style={{backgroundImage: "url('/s7.webp')"}} >
   {/* // style="background-image: url('/s7.webp')" */}
   <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
   {/* // style="background-color: rgba(0, 0, 0, 0.6)"> */}
   <div className="flex items-center justify-center h-full">
     <div className="text-white">
       <h2 className="mb-4 text-2xl font-semibold uppercase md:text-2xl lg:text-5xl">Latest fresh vegetable</h2>
       <h4 className="mb-6 text-base md:text-base lg:text-xl">Elevating Agricultural Excellence</h4>
       <Link to="/cartpage">
       <button className="inline-block md:rounded tracking-wider bg-white px-6 py-2 lg:px-8 lg:py-3 text-sm uppercase text-black transition duration-150 ease-in-out hover:bg-[#4CBB17] hover:text-white">
       {/* <a >Shop now</a> */}
       Shop now
       </button>
       </Link>
     </div>
   </div>
   </div>
   </header>
   </>
  )
}

export default Header