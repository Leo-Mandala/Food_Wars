const RecipeDetails = ({  recipe }) => {
    return(
        <div>
            <h4>{recipe.title}</h4>
            <h1>{recipe.ingredients}</h1>
            <p>{recipe.difficulty}</p>
        </div>
    )
}

export default  RecipeDetails;