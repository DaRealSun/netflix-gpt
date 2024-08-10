import Header from "./Header";
import {useRef, useState} from "react";
import {checkValidData} from "../utils/validate";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import {useDispatch} from "react-redux";
import {addUser} from "../utils/userSlice";
import {AVATAR, Netflix_Logo} from "../utils/constants";


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errMesage, setErrMessage] = useState(null);
    const dispatch = useDispatch();


    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);


    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
        setErrMessage(null);  // Clear error message when toggling forms
    };
    const handleButtonClick = () => {
        // Validate the form data
        const message = isSignInForm
            ? checkValidData(null, email.current.value, password.current.value)
            : checkValidData(name.current.value, email.current.value, password.current.value);

        setErrMessage(message);
        if(message) return;

        //Sign In Sign Up Logic
        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: AVATAR,
                    }).then(() => {
                        // Profile updated!
                        // ...
                        const { uid, email, displayName, photoURL} = auth.currentUser;

                        dispatch(
                            addUser({
                                uid: uid,
                                email:email,
                                displayName: displayName,
                                photoURL: photoURL,
                            })
                        )
                    }).catch((error) => {
                        // An error occurred
                        // ...
                        setErrMessage(error.message)
                    });

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMessage(errorMessage + " " + errorCode)
                    // ..
                });
        } else {
            //Sign In logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMessage(errorMessage + " " + errorCode)

                });

        }
    };

    return (
        <div className="relative h-screen">
            <Header />
            <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 flex justify-center items-center">
                <img
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    src={Netflix_Logo}
                    alt="background"
                />
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="relative w-3/12 p-12 bg-black bg-opacity-80 rounded-md">
                    <h1 className="text-3xl text-white mb-6">{isSignInForm ? "Sign In" : "Sign up"}</h1>
                    {!isSignInForm && (
                        <input
                            ref={name}
                            type="text" placeholder="Full Name"
                            className="w-full p-4 mb-4 bg-gray-700 text-white rounded outline-none focus:bg-gray-600"/>
                        )}

                    <input
                        ref={email}
                        type="email"
                        placeholder="Email or phone number"
                        className="w-full p-4 mb-4 bg-gray-700 text-white rounded outline-none focus:bg-gray-600"/>
                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="w-full p-4 mb-4 bg-gray-700 text-white rounded outline-none focus:bg-gray-600"/>

                    <p className="text-red-500 text-lg py-2">{errMesage}</p>
                    <button
                        className="w-full p-4 mb-4 bg-red-600 text-white font-semibold rounded hover:bg-red-700" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign up"}</button>
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
