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
    <div className="text-center">
      <div className="text-center" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <div className="d-flex justify-content-center align-items-center p-3">
          <img
            src={recipe.imgurl}
            alt="recipe"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "10px",
              border: "2px solid yellow",
            }}
          />
        </div>
        <h3>{recipe.title}</h3>
      </div>

      {location.pathname !== "/saved" && (
        <>
          <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem" }}>
            <div>
              <h4>{recipe.ing1} - {recipe.qty1}</h4>
              <h4>{recipe.ing2} - {recipe.qty2}</h4>
              <h4>{recipe.ing3} - {recipe.qty3}</h4>
              <h4>{recipe.ing4} - {recipe.qty4}</h4>
            </div>
            <div style={{ maxWidth: "500px" }}>
              {recipe.ist}
            </div>
          </div>
          <Link to="/" className="btn btn-warning my-5">Back to Home</Link>
        </>
      )}
    </div>
  );
};

export default FetchRecipeById;
