import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewArrival from "../components/NewArrival";
import { CartContext } from "../contexts/ProductContext/getCartContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import { checkout } from "../core/_requests";
import { toast } from "react-toastify";

const checkoutSchema = Yup.object().shape({
  address_line1: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
    address_line2: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
    city: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
    state: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
    country: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
    postal_code: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
});

const initialValues = {
  email: "test@admin.com",
  password: "1234",
};

function CheckoutPage() {
  const cartProducts = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema: checkoutSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        console.log("1");
        const loginResponse = await checkout( values.password);
  
       console.log("The loginResponse received on login.tsx is ", loginResponse);
       localStorage.setItem('tokens', JSON.stringify(loginResponse));
        
        toast.success('Logged in successfully');
  
        window.location.reload();
      } catch (error) {
        console.error(error);
        setStatus("The login details are incorrect");
        setSubmitting(false);
        setLoading(false);
      }
    },
  });

   useEffect(() => {
    const fetchCartItem = async () => {
      try {

        console.log("Hello Executing Favorite function",);

        // const fav = JSON.parse(localStorage.getItem("favorites") || "[]");
        // console.log("The favorites in local storage are: ", fav);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };

    fetchCartItem();
  }, [cartProducts]);
  return (
    <>
      <Header />

      {/* <!--main--> */}
      <div className="max-w-screen-xl py-8 m-auto my-2 rounded-lg shadow-md bg-stone-50 w- full md:my-6">
        <div className="grid h-full gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="m-auto bg-white w-[90%] rounded-lg shadow-lg">
            <div className="relative h-full">
              <div className="p-8 lg:overflow-auto lg:h-[calc(100vh-60px)]">
                <h2 className="text-2xl font-bold text-[#4CBB17] mb-4">
                  Order Summary
                </h2>
                <div className="mt-10 space-y-6">

                {cartProducts?.map(order => (
                  <div className="grid items-start grid-cols-2">
                  <div
                    className="items-center justify-center p-12 overflow-hidden bg-cover rounded-md h-28 w-28 sm:h-36 sm:w-36"
                    style={{ backgroundImage: `url(${order.product.image})` }}
                  ></div>
                  <div className="pt-6 ml-4">
                    <h3 className="text-base text-[#4CBB17] font-bold">
                      {order.product.name}
                    </h3>
                    <ul className="mt-4 space-y-3 text-xs text-black lg:text-sm">
                      <li className="flex flex-wrap gap-4">
                        Quantity <span className="ml-auto font-bold">${order.product.price}</span>
                      </li>
                      <li className="flex flex-wrap gap-4">
                        Total Price{" "}
                        <span className="ml-auto font-bold">$0.00</span>
                      </li>
                    </ul>
                  </div>
                </div>
                ))}

                  


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
              {/* <div>
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
              </div> */}
              <div className="mt-6">
                <h3 className="text-lg font-bold text-[#333] mb-6">
                  Shipping Address
                </h3>
                <div className="grid gap-6 lg:grid-cols-2">
                 
                <div className="mb-8 fv-row">
            <label className="block mb-2 text-sm font-medium text-black">
            Shipping Address
            </label>
            <input
              placeholder="email"
              {...formik.getFieldProps("email")}
              className={clsx(
                'form-control bg-transparent border sm:text-sm rounded-lg focus:ring-[#4CBB17] focus:border-[#4CBB17] block w-full p-2.5 border-gray-500 dark:placeholder-gray-400 text-black',
                {'is-invalid': formik.touched.email && formik.errors.email},
                {
                  'is-valid': formik.touched.email && !formik.errors.email,
                }
              )}
              required
              type="email"
              autoComplete="off"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="fv-plugins-message-container">
                <span role='alert'>{formik.errors.email}</span>
              </div>
            )}
          </div>
                 
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
      </div>

      <NewArrival />
      <Footer />
    </>
  );
}

export default CheckoutPage;
