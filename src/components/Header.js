import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {AVATAR, LOGO} from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {})
            .catch((error) => {
                navigate("/error");
            });
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        // Unsiubscribe when component unmounts
        return () => unsubscribe();
    }, []);

    return (
        <div className="absolute w-full px-8 py-4 bg-gradient-to-b from-black to-transparent z-10 flex justify-between items-center">
            <img
                className="w-32 md:w-44"
                src={LOGO}
                alt="Netflix Logo"
            />

            {user && (
            <div className="flex items-center space-x-4">
                <img
                    className="w-8 h-8 rounded-full object-cover"
                    alt="User Icon"
                    src={user?.photoURL || AVATAR  }
                />
                <button onClick={handleSignOut} className="text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition">
                    Sign Out
                </button>
            </div>
            )}
        </div>
    );
};

export default Header;
