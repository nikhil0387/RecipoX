import React, { useContext } from "react";
import { AppContext } from "../context/App_Context";
import FetchRecipeById from "./FetchRecipeById";

const Saved = () => {
  const { savedRecipe } = useContext(AppContext);
  console.log(savedRecipe);
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Saved Recipes</h2>
      <div className="row g-4">
        {savedRecipe?.map((data) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={data.recipe}>
            <div className="glass-card h-100">
              <FetchRecipeById id={data.recipe} />
            </div>
          </div>
        ))}
        {(!savedRecipe || savedRecipe.length === 0) && (
          <div className="col-12 text-center py-5">
            <p className="text-muted">No recipes saved yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Saved;