import { useEffect, useState } from "react";
import { useRecipesContext } from "../hooks/useRecipesContext";

import RecipeDetails from '../components/RecipeDetails'
import RecipeForm from "../components/RecipeForm";
const Home = () => {
    const {recipes, dispatch} = useRecipesContext()

    //const [recipes, setRecipes] = useState(null);

    useEffect(() =>{
        const fetchRecipes =  async()=>{
            const response = await fetch('/api/recipes')
            const json = await response.json()

            if (response.ok){
                dispatch({type: 'SET_RECIPES', payload: json})
            }
        }

        fetchRecipes()
    },[])
    return (
        <div>
            <div className="">
                {recipes && recipes.map((recipe) => (
                    <RecipeDetails key={recipe._id} recipe={recipe} />
                ))}
            </div>
            <RecipeForm />
        </div>
    )
}

export default Home;