import Head from "next/head";
import LoginForm from "../../components/forms/login-form";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login to your account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginForm />
    </div>
  );
}
