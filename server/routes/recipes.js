const express = require('express')
const Recipe = require( '../models/recipeModel');

const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
  res.json({mssg: 'GET all recipes'})
})

// GET a single workout
router.get('/:id', (req, res) => {
  res.json({mssg: 'GET a single recipe'})
})

// POST a new workout
router.post('/', async (req, res) => {
  const {title, ingredients, difficulty, comments} = req.body
  try {
    const recipe = await Recipe.create({ title, ingredients, difficulty, comments })
    res.status(200).json(recipe)
  } catch(error) {
    res.status(500).json({error: 'Failed to create new recipe.'});
  }

})

// DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a recipe'})
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a recipe'})
})

module.exports = router