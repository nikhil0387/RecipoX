import React, { useContext } from "react";
import { AppContext } from "../context/App_Context";

const Profile = () => {
  const { user, userRecipe } = useContext(AppContext);

  return (
    <>
      <div className="container py-5 text-center">
        <div className="glass-card p-4 d-inline-block px-5 mb-5">
          <h1 className="fw-bold mb-1">Welcome, {user?.name}</h1>
          <p className="text-muted">{user?.gmail}</p>
        </div>

        <h3 className="text-start mb-4 fw-bold">Your Recipes</h3>
        <div className="row g-4 justify-content-center">
          {userRecipe?.map((data) => (
            <div key={data._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card glass-card recipe-card text-light h-100">
                <div className="recipe-img-container p-3">
                  <img
                    src={data.imgurl}
                    className="card-img-top recipe-img"
                    alt={data.title}
                    style={{
                      height: "200px",
                      borderRadius: "12px",
                    }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{data.title}</h5>
                </div>
              </div>
            </div>
          ))}
          {userRecipe?.length === 0 && (
            <div className="col-12 text-center py-5">
              <p className="text-muted">You haven't added any recipes yet.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
