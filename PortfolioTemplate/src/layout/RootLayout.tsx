import {Outlet, useLocation } from "react-router-dom";
import Link from "./components/Link";
import useTheme from "../providers/useTheme";


export default function RootLayout(){
    const location = useLocation();
    // const navigate = useNavigate();
    const {darkMode, toggleTheme} = useTheme();

    return (
        <div className={`${darkMode ? "dark" : ""} m-auto min-h-screen bg-lightColor-background text-lightColors-primary dark:bg-darkColors-background dark:text-darkColors-primary `}>
            <div className="sticky top-0 py-2 px-0 text-center z-50 bg-lightColors-second dark:bg-darkColors-second">
                <Link
                    to="/"
                    state={{from: location.pathname}}
                    >
                        Home
                </Link>
                <Link
                    to="/aboutMe"
                    state={{from: location.pathname}}
                >
                    About Me
                </Link>
                <Link
                    to="/projects"
                    state={{from: location.pathname}}
                >
                    Projects
                </Link>
                {/* <button onClick={() => navigate(location.state.from ?? "/")} className="cursor-pointer py-2 px-4 transition duration-300 ease-in-out rounded-lg text-lightColors-background bg-lightColors-primary dark:text-darkColors-fourth hover:bg-lightColors-third dark:bg-darkColors-third dark:hover:bg-darkColors-fifth">Back</button> */}
                <button onClick={toggleTheme} className="cursor-pointer py-2 px-4 transition duration-300 ease-in-out rounded-lg text-lightColors-background bg-lightColors-primary dark:text-darkColors-fourth hover:bg-lightColors-third dark:bg-darkColors-third dark:hover:bg-darkColors-fifth">
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>

            </div>
            <main className="m-auto mt-3 py-10  text-lightColors-primary dark:bg-darkColors-background dark:text-darkColors-primary bg-lightColors-background">
                <Outlet/>
            </main>
        </div>
    );
}