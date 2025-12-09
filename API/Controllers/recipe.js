import { Recipe } from "../Models/Recipe.js";
import{SavedRecipe} from '../Models/SavedRecipe';
export const add =async (req,res)=>{

const { title ,ist,ing1,ing2,ing3,ing4,
     qty1,qty2,qty3,qty4,imgurl} = req.body;

     try {
        const recipe =await Recipe.create({
            title ,
            ist,
            ing1,
            ing2,
            ing3,
            ing4,
            qty1,
            qty2,
            qty3,
            qty4,
            imgurl,
            user:req.user,
        });
        res.json({message:"Recipe Creted Succesfully...!",recipe})
     } catch (error){
     res.json({message:error})
     }
}

export const getAllRecipe =async (req,res)=>{
    const recipe = await Recipe.find();
    res.json({recipe})
}

export const getRecipeById = async (req, res) => {
  try {
    const id = req.params.id;
    const recipe = await Recipe.findById(id);

    if (!recipe) {
      return res.json({ message: "Recipe not exist" });
    }

    return res.json({ recipe });   
  } 
  catch (error) {
    return res.json({ message: error.message });
  }
};



export const getRecipebyUserId = async (req,res)=>{
       const userId = req.params.id;
    try {
        let recipe = await Recipe.find({user:userId});

        if(!recipe) res.json({message:"Recipe not exist"})
        
            res.json({message:"Recipe by userId",recipe})
}
catch(error) {
    res.json({message:error})
}
}


export const SavedRecipeById = async (req,res)=>{
    const id=req.params.id;

    let recipe= await SavedRecipe.findOne({recipe:id})
    
    if(recipe) return res.json({message:"Recipe already saved"})
recipe= await SavedRecipe.create({recipe:id})

res.json({message:"Recipe saved succesfully",recipe})

}

export const getSavedRecipes = async (req,res)=>{
    const recipe = await SavedRecipe.find()
    res.json({recipe})
}