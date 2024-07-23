
import Header from "./Header";
import { useState } from "react";

const Login = () => {
    const [isSigninForm, setIsSignInForm] = useState(true);

    const toggleForm =()=>{
        setIsSignInForm(!isSigninForm)

    }
    return (
        <div >
            <Header />
            <div className="absolute" >
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_small.jpg" />

            </div>
            <form className="absolute rounded-lg bg-opacity-80 p-12 bg-black w-3/12 my-24 mx-auto right-0 left-0 text-white">
                <h1 className="text-3xl py-4">
                    {isSigninForm ? "Sign In" : "Sign Up"}
                    </h1>
                    {!isSigninForm && (
                         <input
                         type="text"
                         placeholder="Your name"
                         className="p-4 my-4 w-full  bg-gray-700 " />
                    )}
                <input
                    type="text"
                    placeholder="Enter email"
                    className="p-4 my-4 w-full  bg-gray-700 " />
                <input
                    type="password"
                    placeholder="Enter your password"
                    className="p-4 my-4 w-full bg-gray-700" />
                <button
                    className="my-4 p-4 bg-red-700 w-full rounded-lg" >{isSigninForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="p-4 text-gray-400 cursor-pointer" onClick={toggleForm}>
                 {isSigninForm ? "New to Netflix? Sign up now." : "Alredy regestered? Sign in now."}
                    </p>
            </form>

        </div>
    )
}
export default Login;