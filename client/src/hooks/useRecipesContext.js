import { RecipesContext } from "../context/RecipeContext";
import { useContext } from "react";

export const useRecipesContext = () => {
    const context = useContext(RecipesContext);

    if (!context) {
        throw new Error("useRecipeContext must be used within a RecipesProvider");
    }

    return context
}