const Recipe = require( '../models/recipeModel');
const mongoose = require ('mongoose')

//get all recipe
const getRecipes = async (req, res) => {
    const recipes = await Recipe.find({}).sort({createdAt: -1}); //-1 for descending order and 1 for ascending order

    res.status(200).json(recipes);
}


//get a recip
const getRecipe = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'no such recipe'})
    }

    const recipe = await Recipe.findById(id);  

     if(!recipe){
         return res.status(404).json({error: "Recipe not found"});
}

res.status(200).json(recipe);
}

//create
const createRecipe = async (req, res) => {
    const {title, ingredients, difficulty, comments} = req.body
    //Add to dn
    try {
      const recipe = await Recipe.create({ title, ingredients, difficulty, comments })
      res.status(200).json(recipe)
    } catch(error) {
      res.status(500).json({error: 'Failed to create new recipe.'});
    }
}



//delete 

const deleteRecipe = async  (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'no such recipe'})
      }

      const recipe = await  Recipe.findOneAndDelete({_id: id})

      if  (!recipe) {
        return res.status(404).json({ error: 'No such recipe was found!' });
      }

      res.status(200).json(recipe)
  }
//update a recipes
const updateRecipe = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'no such recipe'})
    }

    const recipe = await  Recipe.findOneAndUpdate({_id: id}, {
      ...req.body
    })

    if  (!recipe) {
      return res.status(404).json({ error: 'No such recipe was found!' });
    }

    res.status(200).json(recipe)

}

module.exports = {
    getRecipe,
    getRecipes,
    createRecipe,
    deleteRecipe,
    updateRecipe
}