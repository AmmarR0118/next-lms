import Head from "next/head";
import SignUpForm from "../../components/forms/signup-form";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="create an account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignUpForm />
    </div>
  );
}
