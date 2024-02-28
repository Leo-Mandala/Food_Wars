import { useRecipesContext } from "../hooks/useRecipesContext"


const RecipeDetails = ({  recipe }) => {

    const { dispatch } = useRecipesContext()

    const handleClick = async () =>{
        const response = await fetch('/api/recipes/' + recipe._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok) {
            dispatch({ type: 'DELETE_RECIPE', payload: json})
        }
    }
    return(
        <div className="border-2 m-5">
            <h4>{recipe.title}</h4>
            <h1>{recipe.ingredients}</h1>
            <p>{recipe.difficulty}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default  RecipeDetails;