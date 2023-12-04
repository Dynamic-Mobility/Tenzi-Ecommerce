import React, { useState } from "react";
import { BsUnlockFill } from "react-icons/bs";
import * as Yup from "yup";
import { registerUser } from "@/Redux/Features/Auth";
import { Formik, ErrorMessage, Form, Field } from "formik";
import { authRequest } from "@/Redux/Services/Auth";
import Router from "next/router";
import { useDispatch } from "react-redux";
import NextLink from "next/link";

const register = () => {

  const dispatch = useDispatch();
  const initialValues = {
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string()
      .required("This field is required")
      .min(8, "Must contain 8 characters")
      .matches(/^(?=.*[A-Z])/, "Must Contain One Uppercase Character")
      .matches(/^(?=.*[0-9])/, "Must Contain One Number Character")
      .matches(/^(?=.*[!@#\$%\^&\*])/,"Must Contain  One Special Case Character"),
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    confirmPassword: Yup.string()
      .required("Confirm pass is required")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
  });

  const handleRegister = async (formValue, helpers) => {
    try {
      await dispatch(registerUser(formValue));
      Router.push("/", { replace: true });
      console.log("Registration Successfull");
      helpers.resetForm();
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="flex flex-col items-center bg-gray h-screen justify-center">
        <div className="md:w-5/12 mt-4 w-full bg-white border border-gray shadow-2xl p-8 rounded">
          <h1 className="font-regular text-2xl text-center mb-4">SignUp</h1>
          <p className="text-center font-thin text-sm mb-8">
            Sign up to secure and auto backup your data.
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
            <Form className="gap-8 space-y-4">
              <div className="space-y-4">
                <section className="flex items-center gap-4">
                  <div className="w-1/2">
                    <Field
                      name="firstName"
                      className="border block outline-none rounded border-gray text-sm px-2 py-3 w-full"
                      placeholder="First Name..."
                      type="text"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red text-sm"
                    />
                  </div>
                  <div className="w-1/2">
                    <Field
                      name="lastName"
                      className="border block outline-none rounded border-gray text-sm px-2 py-3 w-full"
                      placeholder="Last Name..."
                      type="text"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red text-sm"
                    />
                  </div>
                </section>
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
                </section>
              </div>
              <div className="space-y-4">
                <div>
                  <Field
                    name="confirmPassword"
                    className="border block outline-none rounded border-gray text-sm px-2 py-3 w-full"
                    placeholder="Confirm Password..."
                    type="password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-black rounded px-4 py-3"
                >
                  Register
                </button>
              </div>
            </Form>
          </Formik>
          <button className="w-full my-4 text-white bg-green1 rounded px-4 py-3">
            Checkout as guest
          </button>
          <NextLink
            href={`/login`}
            passHref
            style={{ textDecoration: "underline" }}
          >
            <p className="text-center font-thin text-sm mb-8">
              Already have an account? Sign In instead
            </p>
          </NextLink>
        </div>
      </div>
    </section>
  );
};

export default register;
