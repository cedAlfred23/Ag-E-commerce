import { useAuth } from "../core/Auth";
import { useState } from "react";
import { useFormik } from "formik";
import { getUserByToken, getWishlist, login } from "../core/_requests";
import * as Yup from "yup";
import clsx from "clsx";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
  email: "test@admin.com",
  password: "1234",
};

const loginSchema = Yup.object().shape({
  email: Yup.string()
    // .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
});

function LoginModal({
  openAnotherModal,
  onClose,
}: {
  openAnotherModal: () => void;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const { saveAuth, setCurrentUser } = useAuth();
  const notify = () => toast("Wow so easy!");

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        console.log("1");
        const loginResponse = await login(values.email, values.password);

       console.log("The loginResponse received on login.tsx is ", loginResponse);
       localStorage.setItem('tokens', JSON.stringify(loginResponse));

        const tokens = await JSON.parse(localStorage.getItem('tokens') || '{}');
        // console.log("The tokens in local storage is ", tokens.access);
        console.log("2 +", tokens.access);

        
        const { data: user } = await getUserByToken(tokens.access);
        console.log("The user received is ", user);
        console.log("3");

        const favorite = await getWishlist();
        localStorage.setItem('favorites', JSON.stringify(favorite));
        const fav = await JSON.parse(localStorage.getItem('favorites') || '{}');
        console.log("The favorites in local storage is ", fav);
        
        localStorage.setItem('user', JSON.stringify(user));
        console.log("4");
        const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
        console.log('The current email in the system is ', currentUser.email)
        console.log("4");
        setLoading(false);
        onClose()
        toast.success('Logged in successfully');
        notify
        window.location.reload();
      } catch (error) {
        console.error(error);
        saveAuth(undefined);
        setStatus("The login details are incorrect");
        setSubmitting(false);
        setLoading(false);
      }
    },
  });

  return (
    <div>
      {/* <!-- Login modal --> */}
      <div className="relative bg-white rounded-lg shadow w-96">
        <div className="flex justify-end p-2">
          <button
            type="button"
            className="text-black bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="authentication-modal"
            onClick={onClose}
          >
            <i className="fa-solid fa-x"></i>
          </button>
        </div>

        <form
          className="px-6 pb-4 space-y-6 form w-100 lg:px-8 sm:pb-6 xl:pb-8"
          // onSubmit={formik.submitForm}
           onSubmit={(event) => {
    event.preventDefault();
    formik.submitForm();
  }}
          noValidate
          id="kt_login_signin_form"
        >
          <h3 className="text-xl font-bold text-green-700">
            Log in to your account
          </h3>
          <div className="text-center mb-11"></div>

          {
            formik.status ? (
              <div className="mb-lg-15 alert alert-danger">
                <div className="alert-text font-weight-bold">
                  {formik.status}
                </div>
              </div>
            ) : null
            // (
            //   <div className='p-8 mb-10 rounded bg-light-info'>
            //     <div className='text-info'>
            //       Use account <strong>admin@demo.com</strong> and password <strong>demo</strong> to
            //       continue.
            //       Login to your system
            //     </div>
            //   </div>
            // )
          }

          {/* begin::Form group */}
          <div className="mb-8 fv-row">
            <label className="block mb-2 text-sm font-medium text-black">
              email
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

          <div className="mb-3 fv-row mb-lg-15">
            <label className="block mb-2 text-sm font-medium text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              {...formik.getFieldProps("password")}
              //   className={clsx('form-control bg-transparent', {'is-invalid': formik.touched.password && formik.errors.password, }, {'is-valid': formik.touched.password && !formik.errors.password,})}

              className="border sm:text-sm rounded-lg focus:ring-[#4CBB17] focus:border-[#4CBB17] block w-full p-2.5 border-gray-500 dark:placeholder-gray-400 text-black"
              required
            />
            {formik.touched.password && formik.errors.password && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                   <span role='alert'>{formik.errors.password}</span> 
                </div>
              </div>
            )}
          </div>
          {/* end::Form group */}

          {/* begin::Wrapper */}
          <div className="flex-wrap gap-3 mb-8 d-flex flex-stack fs-base fw-semibold">
            {/* begin::Link */}
            {/* <Link to='/auth/forgot-password' className='link-primary'>
        Forgot Password ?
      </Link>  */}
            {/* end::Link */}
          </div>
          {/* end::Wrapper */}

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
                  Login to your account
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

          {/* end::Action */}

          <div className="text-center text-gray-500 fw-semibold fs-6">
            <div className="text-sm font-medium text-black">
              Not registered?{" "}
              <a
                href="#"
                className="font-bold text-green-700 hover:underline"
                data-modal-toggle="registration-modal"
                onClick={openAnotherModal}
              >
                Create account
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
