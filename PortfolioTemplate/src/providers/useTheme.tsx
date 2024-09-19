import { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"

export default function useTheme() {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error("useRecipe must be used within an RecipeProvider");
    }

    return context;
}