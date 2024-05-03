import { useState } from "react";
import { useFormik } from "formik";
import { register } from "../core/_requests";
import * as Yup from "yup";
import clsx from "clsx";

const initialValues = {
  username: "cedAlfred23",
  email: "test@gmail.com",
  password: "test",
  password_confirm: "test"
};

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
    username: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Username is required"),
  password: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
    password_confirm: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required")
    .oneOf([Yup.ref('password')], 'Passwords must match')
});

function RegisterModal({openAnotherModal, onClose} : {openAnotherModal: () => void, onClose: () => void}) {
    const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        console.log(values.username,values.email, values.password)
        const  response = await register( values.username, values.email, values.password);
        console.log("The auth data on register.tsx is " + response.data['username']);
        setLoading(false);
        openAnotherModal()
      } catch (error) {
        console.error(error);
        setStatus("The login details are incorrect");
        setSubmitting(false);
        setLoading(false);
      }
    },
  });
  return (
    <div>

      {/* <!-- Registration modal --> */}
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow w-96">
              <div className="flex justify-end p-2">
                <button
                  type="button"
                  className="text-black bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                  data-modal-toggle="registration-modal"
                  onClick={onClose}
                >
                  <i className="fa-solid fa-x"></i>
                </button>
              </div>

              <form
              onSubmit={(event)=>{
                event.preventDefault();
    formik.submitForm();
              }}
                className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
                action="#"
              >
              
                <h3 className="text-xl font-bold text-green-700">
                  Create an account
                </h3>
                {
            formik.status ? (
              <div className="mb-lg-15 alert alert-danger">
                <div className="alert-text font-weight-bold">
                  {formik.status}
                </div>
              </div>
            ) : null}
                <div className="mb-8 fv-row">
            <label className="block mb-2 text-sm font-medium text-black">
              Username
            </label>
            <input
              placeholder="Username"
              {...formik.getFieldProps("username")}
              className={clsx(
                'form-control bg-transparent border sm:text-sm rounded-lg focus:ring-[#4CBB17] focus:border-[#4CBB17] block w-full p-2.5 border-gray-500 dark:placeholder-gray-400 text-black',
                {'is-invalid': formik.touched.username && formik.errors.username},
                {
                  'is-valid': formik.touched.username && !formik.errors.username,
                }
              )}
              type="username"
              autoComplete="off"
            />
            {formik.touched.username && formik.errors.username && (
              <div className="fv-plugins-message-container">
                <span role='alert'>{formik.errors.username}</span>
              </div>
            )}
          </div>
                <div className="mb-8 fv-row">
            <label className="block mb-2 text-sm font-medium text-black">
              Email
            </label>
            <input
              placeholder="Email"
              {...formik.getFieldProps("email")}
              className={clsx(
                'form-control bg-transparent border sm:text-sm rounded-lg focus:ring-[#4CBB17] focus:border-[#4CBB17] block w-full p-2.5 border-gray-500 dark:placeholder-gray-400 text-black',
                {'is-invalid': formik.touched.email && formik.errors.email},
                {
                  'is-valid': formik.touched.email && !formik.errors.email,
                }
              )}
              type="email"
              autoComplete="off"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="fv-plugins-message-container">
                <span role='alert'>{formik.errors.email}</span>
              </div>
            )}
          </div>

<div className="mb-3 fv-row mb-lg-15">
            <label className="block mb-2 text-sm font-medium text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              {...formik.getFieldProps("password")}
                className={clsx('form-control bg-transparent border sm:text-sm rounded-lg focus:ring-[#4CBB17] focus:border-[#4CBB17] block w-full p-2.5 border-gray-500 dark:placeholder-gray-400 text-black', {'is-invalid': formik.touched.password && formik.errors.password, }, {'is-valid': formik.touched.password && !formik.errors.password,})}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  <span role='alert'>{formik.errors.password}</span>
                </div>
              </div>
            )}
          </div>

          <div className="mb-3 fv-row mb-lg-15">
            <label className="block mb-2 text-sm font-medium text-black">
            Password Confirmation
            </label>
            <input
              type="password"
              id="password_confirm"
              placeholder="••••••••"
              {...formik.getFieldProps("password_confirm")}
              className={clsx('form-control bg-transparent border sm:text-sm rounded-lg focus:ring-[#4CBB17] focus:border-[#4CBB17] block w-full p-2.5 border-gray-500 dark:placeholder-gray-400 text-black', {'is-invalid': formik.touched.password_confirm && formik.errors.password_confirm, }, {'is-valid': formik.touched.password_confirm && !formik.errors.password_confirm,})} 
              // className={clsx('form-control bg-transparent border sm:text-sm rounded-lg focus:ring-[#4CBB17] focus:border-[#4CBB17] block w-full p-2.5 border-gray-500 dark:placeholder-gray-400 text-black', {'is-invalid': formik.touched.password_confirm && formik.errors.password_confirm, }, {'is-valid': formik.touched.password_confirm && !formik.errors.password_confirm,})}
            />
            {formik.touched.password_confirm && formik.errors.password_confirm && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  <span role='alert'>{formik.errors.password_confirm}</span>
                </div>
              </div>
            )}
          </div>
              
          {/* begin::Action */}
          <div className="w-full mb-10 text-center d-grid">
            <button
              type="submit"
              id="kt_sign_in_submit"
              className="btn btn-primary"
              disabled={formik.isSubmitting || !formik.isValid}
            >
              {!loading && (
                <button
                  type="submit"
                  className="w-80 text-white bg-[#4CBB17] focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create an Account
                </button>

                  // <span className='indicator-label'>Continue</span>
              )}
              {loading && (
                <span
                  className="indicator-progress"
                  style={{ display: "block" }}
                >
                  Please wait...
                  <span className="align-middle spinner-border spinner-border-sm ms-2"></span>
                </span>
              )}
            </button>
          </div>
                <div className="text-sm font-medium text-center text-black">
                  Already registered?{" "} 
                  <a
                    href="#"
                    className="font-bold text-green-700 hover:underline"
                    data-modal-toggle="registration-modal"
                    onClick={openAnotherModal}
                  >
                    Log in
                  </a>
                </div>
              </form>
            </div>
    </div>
  )
}

export default RegisterModal