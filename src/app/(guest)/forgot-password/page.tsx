"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import Link from "next/link";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";

import { useAuth } from "@/hooks/auth";
import AuthCard from "@/components/AuthCard";
import ApplicationLogo from "@/components/ApplicationLogo";
import AuthSessionStatus from "@/components/AuthSessionStatus";

interface FormValues {
  email: string;
}

const ForgotPasswordPage = () => {
  const [status, setStatus] = useState<string>("");

  const { forgotPassword } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("The email field is required."),
  });

  const submitForm = async (
    values: FormValues,
    { setSubmitting, setErrors }: FormikHelpers<FormValues>
  ): Promise<void> => {
    try {
      const response = await forgotPassword(values);

      setStatus(response.data.status);
    } catch (error) {
      setStatus("");
      if (axios.isAxiosError(error) && error.response?.status === 422) {
        setErrors(error.response?.data?.errors);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthCard
      logo={
        <Link href="/">
          <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
        </Link>
      }
    >
      <div className="mb-4 text-sm text-gray-600">
        Forgot your password? No problem. Just let us know your email address
        and we will email you a password reset link that will allow you to
        choose a new one.
      </div>

      <AuthSessionStatus className="mb-4" status={status} />

      <Formik
        onSubmit={submitForm}
        validationSchema={ForgotPasswordSchema}
        initialValues={{ email: "" }}
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

          <div className="mt-4 flex items-center justify-end">
            <button
              type="submit"
              className="ml-3 inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 focus:border-gray-900 focus:outline-none focus:ring active:bg-gray-900 disabled:opacity-25"
            >
              Email Password Reset Link
            </button>
          </div>
        </Form>
      </Formik>
    </AuthCard>
  );
};

export default ForgotPasswordPage;
