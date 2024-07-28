import Header from "./Header";
import {useState} from "react";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div className="relative h-screen">
            <Header />
            <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 flex justify-center items-center">
                <img
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/e86a75da-ce78-4129-9e7d-c056f1c3363b/US-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_e46f05a7-c909-4aaf-9e3c-c832bbca606c_small.jpg"
                    alt="background"
                />
                <form className="relative w-3/12 p-12 bg-black bg-opacity-80 rounded-md">
                    <h1 className="text-3xl text-white mb-6">{isSignInForm ? "Sign In" : "Sign up"}</h1>
                    {!isSignInForm && (<input type="text" placeholder="Full Name"
                           className="w-full p-4 mb-4 bg-gray-700 text-white rounded outline-none focus:bg-gray-600"/>
                        )}

                    <input type="email" placeholder="Email or phone number"
                           className="w-full p-4 mb-4 bg-gray-700 text-white rounded outline-none focus:bg-gray-600"/>
                    <input type="password" placeholder="Password"
                           className="w-full p-4 mb-4 bg-gray-700 text-white rounded outline-none focus:bg-gray-600"/>
                    <button
                        className="w-full p-4 mb-4 bg-red-600 text-white font-semibold rounded hover:bg-red-700">{isSignInForm ? "Sign In" : "Sign up"}</button>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" className="mr-2"/>
                            <label htmlFor="remember" className="text-gray-400 text-sm">Remember me</label>
                        </div>
                        <a href="#" className="text-gray-400 text-sm hover:underline">Need help?</a>
                    </div>
                    <div className="mt-8 text-gray-400 text-sm flex">
                        {isSignInForm ? "New to Netflix?" : "Already registered"} <p
                        className="ml-2 text-white cursor-pointer"
                        onClick={toggleSignInForm}>{isSignInForm ? "Sign Up Now" : "Sign In Now"}</p>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login;
