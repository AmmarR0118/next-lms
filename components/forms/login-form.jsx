import Button from "../ui/button";
import FormHeading from "./form-ui/form-heading";
import SocialBtn from "./form-ui/social-btn";
import Input from "./form-ui/input";
import Separator from "./form-ui/separator";

const LoginForm = () => {
  return (
    <section className="h-screen relative">
      <div className="container w-full max-w-sm absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4">
        <div className="rounded-lg bg-white shadow-md pt-3 pb-2 sm:pt-4 sm:pb-3">
          <FormHeading>Welcome Back!</FormHeading>

          <form className="px-2 sm:px-4">
            <SocialBtn type="button" social="google">
              Sign in with Google
            </SocialBtn>
            <Separator>or login with email</Separator>

            <Input
              type="email"
              label="Email"
              name="email"
              placeholder="example@example.com"
              required={true}
            />
            <Input
              type="password"
              label="Password"
              showForgot={true}
              name="password"
              placeholder="Your Password"
              required={true}
            />

            <Button>Login</Button>
            <Separator link="/admin/signup">or create an account</Separator>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
