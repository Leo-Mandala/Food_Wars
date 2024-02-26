const express = require('express')
//const Recipe = require( '../models/recipeModel');
const {
  createRecipe,
  getRecipe,
  getRecipes,
  deleteRecipe,
  updateRecipe
} = require('../controllers/recipeController')

const router = express.Router()

// GET all workouts
router.get('/', getRecipes);


// GET a single workout
router.get('/:id', getRecipe)

// POST a new workout
router.post('/', createRecipe)

// DELETE a workout
router.delete('/:id', deleteRecipe)

// UPDATE a workout
router.patch('/:id', updateRecipe)

module.exports = router