import Link from "./Link/Link";

interface NavBarProps{
    toggleTheme: () => void;
    darkMode: boolean;
}

export default function NavBar({toggleTheme, darkMode}: NavBarProps){
    return(
        <div className="sticky top-0 py-2 px-0 text-center z-50 bg-lightColors-second dark:bg-darkColors-second">
        <Link href="#header">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#services">Services</Link>
        <Link href="#team">Team</Link>
        <Link href="#blog">Blog</Link>
        <Link href="#contact">Contact</Link>
        <button onClick={toggleTheme} className="cursor-pointer py-2 px-4 transition duration-300 ease-in-out rounded-lg text-lightColors-background bg-lightColors-primary dark:text-darkColors-fourth hover:bg-lightColors-third dark:bg-darkColors-third dark:hover:bg-darkColors-fifth">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    );
}