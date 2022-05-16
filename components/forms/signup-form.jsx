import Button from "../ui/button";
import FormHeading from "./form-ui/form-heading";
import SocialBtn from "./form-ui/social-btn";
import Input from "./form-ui/input";
import Separator from "./form-ui/separator";

const SignUpForm = () => {
  return (
    <section className="h-max overflow-hidden sm:overflow-auto">
      <div className="container w-full max-w-md my-3 sm:my-4">
        <div className="rounded-lg bg-white shadow-md pt-3 pb-2 sm:pt-4 sm:pb-3">
          <FormHeading>Let's Connect</FormHeading>

          <form className="px-4">
            <SocialBtn type="button" social="google">
              Sign up with Google
            </SocialBtn>
            <Separator>or use your email</Separator>

            <div className="sm:flex sm:gap-4">
              <Input
                type="text"
                label="First Name"
                name="firstname"
                placeholder="e.g. Ammar"
                required={true}
              />
              <Input
                type="text"
                label="Last Name"
                name="lastname"
                placeholder="e.g. Iqbal"
                required={true}
              />
            </div>

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
              name="password"
              placeholder="Your Password"
              required={true}
            />

            <Button>Login</Button>
            <Separator link="/admin/login">or login to account</Separator>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
