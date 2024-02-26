import { useEffect, useState } from "react";


import RecipeDetails from '../components/RecipeDetails'
const Home = () => {

    const [recipes, setRecipes] = useState(null);

    useEffect(() =>{
        const fetchRecipes =  async()=>{
            const response = await fetch('/api/recipes')
            const json = await response.json()

            if (response.ok){
                setRecipes(json)
            }
        }

        fetchRecipes()
    },[])
    return (
        <div className="text-3xl font-bold">
            <div>
                {recipes && recipes.map((recipe) => (
                    <RecipeDetails key={recipe._id} recipe={recipe}/>
                ))}
            </div>

        </div>
    )
}

export default Home;