import { useState } from "react"

const RecipeForm = () => {
    const [title, setTitle] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const recipe = { title, ingredients, difficulty }

        const response = await fetch('/api/recipes', {
            method: 'POST',
            body: JSON.stringify(recipe),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if(response.ok){
            setTitle('')
            setIngredients('')
            setDifficulty('')
            setError(null)
            console.log('Recipe submitted successfully')
        }
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <h3>Ajoute une recette chef</h3>

            <label>Titre de la recette</label>
            <input
            type="text"
            onChange={(e) =>  setTitle(e.target.value)}
            value={title}
            />

            <label>ingredients de la recette</label>
            <input
            type="text"
            onChange={(e) =>  setIngredients(e.target.value)}
            value={ingredients}
            />

            <label>difficulté de la recette</label>
            <input
            type="text"
            onChange={(e) =>  setDifficulty(e.target.value)}
            value={difficulty}
            />

            <button>
                Ajouter cette recette
            </button>
            {error && <div>{error}</div>}
        </form>
    )
}

export default RecipeForm