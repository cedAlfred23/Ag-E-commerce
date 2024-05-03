function Footer() {
  return (
    <>
      {/* <!-- Footer container --> */}
      <footer className="bg-gray-50 w-[100%]">
        <div className=" p-10 max-w-screen-2xl w-[100%] lg:w-[90%] block md:grid-cols-2 md:justify-between lg:flex md:m-auto justify-left">
          <div className="justify-start block mb-12 lg:items-start">
            {/* <!--logo--> */}
            {/* <div className=""> */}
              <h2 className="uppercase text-[#4CBB17] text-base lg:text-xl">
                Ag E-Commerce
              </h2>
            {/* </div> */}

            <div className="mt-4 text-sm text-left ">
              <span>Get connected with us on social networks:</span>
            </div>

            {/* <!-- Social network icons container --> */}
            <div className="flex mt-4 text-left text-[18px]">
              <a href="#!" className="me-6   hover:text-[#4CBB17]">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#!" className="me-6 hover:text-[#4CBB17]">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#!" className="me-6 hover:text-[#4CBB17]">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#!" className="me-6 hover:text-[#4CBB17]">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="block m-auto md:grid md:grid-cols-3 w-[100%] text-sm">
            {/* <!-- Customer care --> */}
            <div className=" md:m-auto">
              <h6 className="flex justify-center mb-4 md:justify-start">
                Customer care
              </h6>
              <p className="mb-4 text-center md:text-left">
                <a href="#!">Privacy policy</a>
              </p>
              <p className="mb-4 text-center md:text-left">
                <a href="#!">Terms & Conditions</a>
              </p>
              <p className="mb-4 text-center md:text-left">
                <a href="#!">Products Return</a>
              </p>
            </div>
            {/* <!-- Useful links section --> */}
            <div className="mb-10 md:m-auto">
              <h6 className="flex justify-center mb-4 md:justify-start">
                Useful links
              </h6>
              <p className="mb-4 text-center md:text-left">
                <a href="#!">Pricing</a>
              </p>
              <p className="mb-4 text-center md:text-left">
                <a href="#!">Settings</a>
              </p>
              <p className="mb-4 text-center md:text-left">
                <a href="#!">Orders</a>
              </p>
            </div>
            {/* <!-- Company --> */}
            <div className="md:m-auto">
              <h6 className="flex justify-center mb-4 md:justify-start">
                Company
              </h6>
              <p className="mb-4 text-center md:text-left">
                <a href="#!">Menu Items</a>
              </p>
              <p className="mb-4 text-center md:text-left">
                <a href="#!">Help Center</a>
              </p>
              <p className="mb-4 text-center md:text-left">
                <a href="#!">Address Store</a>
              </p>
            </div>
          </div>
        </div>
        {/* <!--Copyright section--> */}
        <div className="p-6 text-sm text-center">
          <p>
            <span className="">© 2024 Copyright:</span> By{" "}
            <span className="text-[#55419d]">coco</span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
