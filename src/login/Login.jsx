import React from "react";
import { FaApple, FaFacebookF } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
    return (
        <div className="py-15 lg:py-30 bg-slate-400">
            <div className="container pt-10">
                <div className="bg-white w-full max-w-2xl p-8 lg:p-12 rounded-sm shadow-md mx-auto">

                    <h2 className="text-2xl font-semibold mb-2">Welcome back</h2>
                    <p className=" mb-6">
                        Don’t have an account yet?{" "}
                        <Link to='register' className="text-blue-600 hover:underline">
                            Sign up for free
                        </Link>
                    </p>

                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full rounded-sm px-5 py-3 border outline-0"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border rounded-sm px-5 py-3 outline-0"
                        />
                    </div>

                    <a href="#" className=" text-blue-600 hover:underline">
                        Forgot your password?
                    </a>

                    <button className="w-full bg-blue-600 text-white py-3 rounded-sm mt-4 hover:bg-blue-700 flex items-center gap-1 justify-center cursor-pointer">
                        Sign In <FaArrowRightLong className="-rotate-45" />
                    </button>

                    <div className="text-center my-4  text-gray-500">
                        or sign in with
                    </div>

                    <div className="space-y-3">
                        <button className="w-full border rounded-sm py-3 hover:bg-gray-100 flex items-center gap-1 justify-center cursor-pointer">
                            <FaFacebookF /> Facebook
                        </button>

                        <button className="w-full border border-red-400 text-red-500 rounded-sm py-3 hover:bg-red-50 flex items-center gap-1 justify-center cursor-pointer">
                            <FcGoogle /> Google
                        </button>

                        <button className="w-full border rounded-sm py-3 hover:bg-gray-100 flex items-center gap-1 justify-center cursor-pointer">
                            <FaApple /> Apple
                        </button>
                    </div>

                    <p className="text-center text-gray-500 mt-6">
                        By creating an account, you agree to our Terms of Service and Privacy Statement.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;