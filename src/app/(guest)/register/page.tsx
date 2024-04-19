"use client";
import Link from "next/link";
import * as Yup from "yup";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useAuth } from "@/hooks/auth";
import ApplicationLogo from "@/components/ApplicationLogo";
import AuthCard from "@/components/AuthCard";

interface Values {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const RegisterPage = () => {
  const { register } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  const submitForm = async (
    values: Values,
    { setSubmitting, setErrors }: FormikHelpers<Values>
  ): Promise<void> => {
    try {
      await register(values);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 422) {
        setErrors(error.response?.data?.errors);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("The name field is required."),
    email: Yup.string()
      .email("Invalid email")
      .required("The email field is required."),
    password: Yup.string().required("The password field is required."),
    password_confirmation: Yup.string()
      .required("Please confirm password.")
      .oneOf([Yup.ref("password")], "Your passwords do not match."),
  });

  return (
    <AuthCard
      logo={
        <Link href="/">
          <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
        </Link>
      }
    >
      <Formik
        onSubmit={submitForm}
        validationSchema={RegisterSchema}
        initialValues={{
          name: "",
          email: "",
          password: "",
          password_confirmation: "",
        }}
      >
        <Form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="undefined block text-sm font-medium text-gray-700"
            >
              Name
            </label>

            <Field
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />

            <ErrorMessage
              name="name"
              component="span"
              className="text-xs text-red-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="undefined block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <Field
              id="email"
              name="email"
              type="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />

            <ErrorMessage
              name="email"
              component="span"
              className="text-xs text-red-500"
            />
          </div>

          <div className="">
            <label
              htmlFor="password"
              className="undefined block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <Field
              id="password"
              name="password"
              type="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />

            <ErrorMessage
              name="password"
              component="span"
              className="text-xs text-red-500"
            />
          </div>

          <div className="">
            <label
              htmlFor="password"
              className="undefined block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>

            <Field
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />

            <ErrorMessage
              name="password_confirmation"
              component="span"
              className="text-xs text-red-500"
            />
          </div>

          <div className="mt-4 flex items-center justify-end">
            <Link
              href="/login"
              className="text-sm text-gray-600 underline hover:text-gray-900"
            >
              Already registered?
            </Link>

            <button
              type="submit"
              className="ml-4 inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 focus:border-gray-900 focus:outline-none focus:ring active:bg-gray-900 disabled:opacity-25"
            >
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </AuthCard>
  );
};

export default RegisterPage;
