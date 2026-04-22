import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/App_Context";
import { Link, useLocation } from "react-router-dom";

const FetchRecipeById = ({ id }) => {
  const location = useLocation();
  const { getRecipeById } = useContext(AppContext);

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchRecipe = async () => {
      const result = await getRecipeById(id);

      if (isMounted) {
        setRecipe(result.data.recipe);
      }
    };

    fetchRecipe();

    return () => {
      isMounted = false; // prevent re-renders causing infinite loop
    };
  }, [id]);

  if (!recipe) return <h3 className="text-light">Loading...</h3>;

  return (
    <div className="recipe-card text-center h-100 d-flex flex-column">
      <div className="p-3">
        <div className="recipe-img-container mb-3">
          <img
            src={recipe.imgurl}
            alt={recipe.title}
            className="recipe-img w-100"
            style={{
              height: "200px",
              borderRadius: "12px",
            }}
          />
        </div>
        <h5 className="fw-bold">{recipe.title}</h5>
      </div>

      {location.pathname !== "/saved" && (
        <div className="card-body pt-0">
          <div className="glass-card p-4 mt-3 text-start">
            <h6 className="text-primary fw-bold text-uppercase small mb-3">Ingredients</h6>
            <ul className="list-unstyled mb-4">
              {[1, 2, 3, 4].map((num) => (
                recipe[`ing${num}`] && (
                  <li key={num} className="mb-1 d-flex justify-content-between">
                    <span>{recipe[`ing${num}`]}</span>
                    <span className="text-muted">{recipe[`qty${num}`]}</span>
                  </li>
                )
              ))}
            </ul>
            
            <h6 className="text-primary fw-bold text-uppercase small mb-2">Instructions</h6>
            <p className="small text-muted">{recipe.ist}</p>
          </div>
          <Link to="/" className="btn btn-outline-primary mt-4 w-100">Back to Home</Link>
        </div>
      )}
    </div>
  );
};

export default FetchRecipeById;
