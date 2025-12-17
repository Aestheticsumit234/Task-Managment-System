import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const user = "";
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const submitHandler = async (data) => {
    setIsLoading(true);
    try {
      console.log("Logging in with:", data);

      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#f3f4f6] p-4 md:p-6 lg:p-12">
      <div className="w-full max-w-360 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        <div className=" lg:flex flex-col items-start justify-center lg:w-1/2 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 text-blue-700 border border-blue-200 text-sm font-semibold shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </span>
            Manage all your tasks in one place
          </div>

          <div className="hidden lg:block space-y-2">
            <h1 className="text-6xl xl:text-8xl text-blue-700 font-black leading-tight tracking-tight">
              Cloud Based <br />
              <span className="text-gray-800">Task Manager</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Streamline your workflow and increase productivity with our
              intuitive cloud-based platform. Secure, fast, and reliable.
            </p>
          </div>
        </div>

        <div className="w-full sm:max-w-md lg:w-112.5 flex flex-col items-center">
          <div className="lg:hidden text-center mb-8">
            <h2 className="text-3xl font-black text-blue-700">
              {" "}
              Cloud Based Task Manager
            </h2>
          </div>

          <form
            onSubmit={handleSubmit(submitHandler)}
            className="w-full flex flex-col gap-y-6 bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(8,112,184,0.07)] border border-gray-100"
          >
            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold  text-blue-700">
                Welcome Back!
              </h3>
              <p className="text-sm md:text-base text-gray-500">
                Please enter your details to sign in.
              </p>
            </div>

            <div className="flex flex-col gap-y-5">
              <TextInput
                placeholder="email@example.com"
                type="email"
                name="email"
                label="Email Address"
                className="w-full rounded-xl!"
                register={register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
                error={errors.email ? errors.email.message : ""}
              />

              <div className="relative">
                <TextInput
                  placeholder="********"
                  type="password"
                  name="password"
                  label="Password"
                  className="w-full rounded-xl!"
                  register={register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  error={errors.password ? errors.password.message : ""}
                />
                <button
                  type="button"
                  className="absolute right-0 top-0 text-sm cursor-pointer text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Forgot?
                </button>
              </div>
            </div>

            <Button
              type="submit"
              label={isLoading ? "Signing in..." : "Login"}
              disabled={isLoading}
              className={`w-full h-12 rounded-xl font-bold transition-all duration-200 cursor-pointer ${
                isLoading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-700 hover:bg-blue-800 active:scale-[0.98] shadow-lg shadow-blue-200"
              } text-white`}
            />

            <div className="flex items-center justify-center gap-2 pt-2">
              <span className="text-sm text-gray-500">New here?</span>
              <button
                type="button"
                className="text-sm text-blue-600 cursor-pointer font-bold hover:underline decoration-2 underline-offset-4"
                onClick={() => navigate("/signup")}
              >
                Create an account
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs text-gray-400 text-center">
            &copy; 2024 TaskManager. All rights reserved.{" "}
            <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
