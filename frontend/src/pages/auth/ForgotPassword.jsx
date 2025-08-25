import { Card1 } from "../../components/Card";
import { TextField1 } from "../../components/TextField";
import { PrimaryButton } from "../../components/Buttons";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/react.svg";

export default function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card1 style={"max-w-sm w-full m-4 p-8 border"}>
        <img
          src={Logo}
          alt="sampleLogo"
          className="w-20 h-20 mx-auto mb-4 rounded-full"
        />
        <div className="mb-10">
          <p className="text-2xl text-left text-[var(--primary-color)] font-semibold">
            Forgot your password?
          </p>
          <p className="text-gray-500 text-sm">Please enter your email address</p>
        </div>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="email_address">Email address</label>
            <TextField1
              name={"email_address"}
              type="text"
              placeholder={"Type your email address"}
              style={"text-sm py-3"}
            />
          </div>
          <PrimaryButton label={"Reset Password"} />
          <div className="text-center text-sm text-[var(--primary-color)] hover:underline">
            <NavLink to="/login">Back to login</NavLink>
          </div>
        </form>
      </Card1>
    </div>
  );
}
