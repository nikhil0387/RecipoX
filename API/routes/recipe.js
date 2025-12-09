import express from 'express'
import { add, getAllRecipe, getRecipeById, getRecipebyUserId } from '../Controllers/recipe.js';
import { SavedRecipeById, getSavedRecipes } from '../Controllers/recipe.js';
import { Authenticate } from '../middlewares/auth.js';

const router = express.Router();

// Create recipe
router.post('/add', Authenticate, add);

// Get all recipes
router.get('/', getAllRecipe);

// Get saved recipes
router.get('/saved', getSavedRecipes);

// Get recipe by user id
router.get('/user/:id', getRecipebyUserId);

// Save recipe by ID
router.post('/save/:id', Authenticate, SavedRecipeById);

// THIS MUST BE LAST
router.get('/:id', getRecipeById);

export default router;
