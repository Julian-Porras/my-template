import { Card1 } from "../../components/Card";
import { TextField1 } from "../../components/TextField";
import { PrimaryButton } from "../../components/Buttons";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/react.svg";

export default function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <Card1 style={"max-w-sm w-full m-4 p-8 border"}>
        <img
          src={Logo}
          alt="sampleLogo"
          className="w-20 h-20 mx-auto mb-4 rounded-full"
        />
        <div className="mb-8">
          <p className="text-2xl text-left text-[var(--primary-color)] font-semibold">
            Login to your account
          </p>
          <p className="text-gray-500 text-sm">Please enter your details</p>
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
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <TextField1
              name={"password"}
              type="password"
              placeholder={"Type your password"}
              style={"text-sm py-3"}
            />
          </div>
          <div className="text-right text-sm text-[var(--primary-color)] hover:underline">
            <a href="#">Forgot Password?</a>
          </div>
          <PrimaryButton onClick={handleLogin} label={"Login"} />
        </form>
      </Card1>
    </div>
  );
}
