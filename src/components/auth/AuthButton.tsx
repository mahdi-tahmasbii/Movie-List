import { useUser } from "@clerk/clerk-react";
import { useClerk } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import { SignInButton } from "@clerk/nextjs";

const AuthButton = () => {
  const { isSignedIn } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
  return (
    <>
      {isSignedIn ? (
        <div className="md:hidden">
          <button onClick={() => signOut(() => router.push("/"))}>
            Sign out
          </button>
        </div>
      ) : (
        <div className="font-bold text-white">
          <SignInButton />
        </div>
      )}
    </>
  );
};

export default AuthButton;
