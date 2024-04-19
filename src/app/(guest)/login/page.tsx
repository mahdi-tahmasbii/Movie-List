"use client";
import Link from "next/link";
import * as Yup from "yup";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useAuth } from "@/hooks/auth";
import ApplicationLogo from "@/components/ApplicationLogo";
import AuthCard from "@/components/AuthCard";
import { useEffect, useState } from "react";
import AuthSessionStatus from "@/components/AuthSessionStatus";

interface Values {
  email: string;
  password: string;
  remember: boolean;
}

const LoginPage = () => {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<string>("");

  const { login } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  useEffect(() => {
    const resetToken = searchParams.get("reset");
    setStatus(resetToken ? atob(resetToken) : "");
  }, [searchParams]);

  const submitForm = async (
    values: Values,
    { setSubmitting, setErrors }: FormikHelpers<Values>
  ): Promise<void> => {
    try {
      await login(values);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 422) {
        setErrors(error.response?.data?.errors);
      }
    } finally {
      setSubmitting(false);
      setStatus("");
    }
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("The email field is required."),
    password: Yup.string().required("The password field is required."),
  });

  return (
    <AuthCard
      logo={
        <Link href="/">
          <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
        </Link>
      }
    >
      <AuthSessionStatus className="mb-4" status={status} />

      <Formik
        onSubmit={submitForm}
        validationSchema={LoginSchema}
        initialValues={{ email: "", password: "", remember: false }}
      >
        <Form className="space-y-4">
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

          <div className="flex items-center justify-between">
            <label htmlFor="remember" className="inline-flex items-center">
              <Field
                type="checkbox"
                name="remember"
                className="rounded border-[#99A6AE] text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />

              <span className="ml-2 text-sm font-medium leading-[150%] tracking-[-0.4px] text-[#252729]">
                Remember me
              </span>
            </label>
          </div>

          <div className="mt-4 flex items-center justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-gray-600 underline hover:text-gray-900"
            >
              Forgot your password?
            </Link>

            <button
              type="submit"
              className="ml-3 inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 focus:border-gray-900 focus:outline-none focus:ring active:bg-gray-900 disabled:opacity-25"
            >
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </AuthCard>
  );
};

export default LoginPage;
