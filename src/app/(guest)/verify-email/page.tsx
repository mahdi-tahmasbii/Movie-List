"use client";
import Link from "next/link";
import React, { useState } from "react";

import { useAuth } from "@/hooks/auth";
import AuthCard from "@/components/AuthCard";
import ApplicationLogo from "@/components/ApplicationLogo";

const VerifyEmailPage = () => {
  const [status, setStatus] = useState<string>("");

  const { logout, resendEmailVerification } = useAuth({
    middleware: "auth",
    redirectIfAuthenticated: "/dashboard",
  });

  const onClickResend = () => {
    resendEmailVerification().then((response) =>
      setStatus(response.data.status)
    );
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
        Thanks for signing up! Before getting started, could you verify your
        email address by clicking on the link we just emailed to you? If you
        didn&apos;t receive the email, we will gladly send you another.
      </div>

      {status === "verification-link-sent" && (
        <div className="mb-4 text-sm font-medium text-green-600">
          A new verification link has been sent to the email address you
          provided during registration.
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <button
          className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 focus:border-gray-900 focus:outline-none focus:ring active:bg-gray-900 disabled:opacity-25"
          onClick={onClickResend}
        >
          Resend Verification Email
        </button>

        <button
          type="button"
          className="text-sm text-gray-600 underline hover:text-gray-900"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </AuthCard>
  );
};

export default VerifyEmailPage;
