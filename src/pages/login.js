import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import NextLink from "next/link";
import { useDispatch,useSelector } from "react-redux";
import { authRequest } from "@/Redux/Services/Auth";
import { loginUser, logoutUser } from "@/Redux/Features/Auth";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const notifySuccess = () => toast.success("Login Successful")
  const notifyError = () => toast.error("Login Failed")
  const { user } = useSelector(({ auth }) => auth)

  console.log(user)

  const initialValues = {
    password: "",
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string().required("This field is required")
      .min(8, "Must contain 8 characters")
      .matches(/^(?=.*[A-Z])/, "Must Contain One Uppercase Character")
      .matches(/^(?=.*[0-9])/, "Must Contain One Number Character")
      .matches(/^(?=.*[!@#\$%\^&\*])/,"Must Contain  One Special Case Character"),
  });

  const handleLogin = async (formValue, helpers) => {
    try {
      await dispatch(loginUser(formValue));
      notifySuccess()
      const returnUrl = router.query.returnUrl || "/";
      router.push(returnUrl)
      setLoading(false);
      
    } catch (e) {
      setLoading(false);
      notifyError()
    }
  };

  return (
    <>
      <section>
        <div className="flex flex-col items-center h-screen bg-gray justify-center">
        <ToastContainer position="top-right" />
          <div className="md:w-5/12 mt-4 w-full bg-white border border-gray shadow-2xl p-8 rounded">
            <h1 className="font-regular text-2xl text-center mb-4">Login</h1>
            <p className="text-center font-thin text-sm mb-8">
              Login to continue your session.
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              <Form className="gap-8 space-y-4">
                <div className="space-y-4">
                  <section className="space-y-4">
                    <div>
                      <Field
                        name="email"
                        className="border block outline-none rounded border-gray text-sm px-2 py-3 w-full"
                        placeholder="Email..."
                        type="email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red text-sm"
                      />
                    </div>
                    <div>
                      <Field
                        name="password"
                        className="border block outline-none rounded border-gray text-sm px-2 py-3 w-full"
                        placeholder="Password..."
                        type="password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red text-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-black rounded px-4 py-3"
                    >
                      Log In
                    </button>
                    
                    <NextLink
                      href={`/register`}
                      passHref
                      style={{ textDecoration: "underline" }}
                    >
                      <p className="text-center font-thin text-sm mb-8 mt-4">
                        No account yet? Register Now
                      </p>
                    </NextLink>
                  </section>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
