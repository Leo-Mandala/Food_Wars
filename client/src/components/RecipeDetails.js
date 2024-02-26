const RecipeDetails = ({  recipe }) => {
    return(
        <div className="border-2 m-5">
            <h4>{recipe.title}</h4>
            <h1>{recipe.ingredients}</h1>
            <p>{recipe.difficulty}</p>
        </div>
    )
}

export default  RecipeDetails;