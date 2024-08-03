import {auth} from "../utils/firebase";
import {signOut } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")

            // Sign-out successful.

        }).catch((error) => {
            navigate("/error")
        });
    }
    return (
        <div className="absolute w-full px-8 py-4 bg-gradient-to-b from-black to-transparent z-10 flex justify-between items-center">
            <img
                className="w-32 md:w-44"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="Netflix Logo"
            />

            {user && (
            <div className="flex items-center space-x-4">
                <img
                    className="w-8 h-8 rounded-full object-cover"
                    alt="User Icon"
                    src={user?.photoURL}
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
