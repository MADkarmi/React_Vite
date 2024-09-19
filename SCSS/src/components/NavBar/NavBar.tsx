import "./NavBar.scss";

interface NavBarProps{
    toggleTheme: () => void;
    darkMode: boolean;
}

export default function NavBar({toggleTheme, darkMode}: NavBarProps){
    return(
        <div className="navbar">
        <a href="#header">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#team">Team</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
        <button onClick={toggleTheme} className="theme-toggle-button">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    );
}