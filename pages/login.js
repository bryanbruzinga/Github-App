import { signIn, signOut, useSession } from "next-auth/client";

export default function Login() {
  const [session, loading] = useSession();

  return (
    <div>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn("github", { callbackUrl: "/" })}>
            Sign in
          </button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
}
