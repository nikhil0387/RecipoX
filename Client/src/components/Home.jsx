import React, { useContext } from "react";
import { AppContext } from "../context/App_Context";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  const navigate = useNavigate()
  const { recipe, savedRecipeById } = useContext(AppContext);

  const saved = async (id) =>{
   const result = await savedRecipeById(id);
     toast.success(result.data.message, {
       position: "top-right",
       autoClose: 1000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "dark",
       transition: Bounce,
     });

  }
  return (
    <>
      <ToastContainer />
      
      {/* Hero Section */}
      <div className="hero-section text-center py-5 mb-5" style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('file:///C:/Users/nikhil/.gemini/antigravity/brain/baa49fa9-3f34-4ef9-8254-d801e366afc7/recipox_hero_bg_1776873913111.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '0 0 40px 40px',
        margin: '0 1rem'
      }}>
        <h1 className="display-3 fw-bold text-light mb-3" style={{ letterSpacing: '-2px' }}>
          Discover & Share <br />
          <span className="text-primary">Masterpiece</span> Recipes
        </h1>
        <p className="lead mb-4" style={{ maxWidth: '600px', color: '#cbd5e1' }}>
          Join our community of food lovers. Find the perfect dish for any occasion 
          or share your own culinary creations with the world.
        </p>
        <div className="d-flex gap-3 mb-5">
          <button className="btn btn-primary btn-lg px-5">Explore Recipes</button>
        </div>

        {/* Moving Recipes Section */}
        <div className="w-100 overflow-hidden py-3" style={{ background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(5px)' }}>
          <div className="marquee-container d-flex">
            <div className="marquee-content d-flex gap-4 py-2">
              {[...recipe, ...recipe].map((data, index) => (
                <img 
                  key={index} 
                  src={data.imgurl || 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&q=80&w=800'} 
                  alt="Recipe"
                  style={{ width: '200px', height: '120px', objectFit: 'cover', borderRadius: '12px', opacity: '0.8' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="fw-bold mb-4 px-3">Latest Recipes</h2>
        <div className="row g-4 justify-content-center">
          {recipe.map((data) => (
            <div key={data._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card glass-card recipe-card text-light h-100">
                <div className="recipe-img-container p-3">
                  <img
                    src={data.imgurl || 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&q=80&w=800'}
                    className="card-img-top recipe-img"
                    alt={data.title}
                    style={{
                      height: "220px",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold mb-3">{data.title}</h5>
                  <div className="mt-auto d-flex gap-2">
                    <button 
                      className="btn btn-outline-primary flex-grow-1" 
                      onClick={() => saved(data._id)}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-primary flex-grow-1"
                      onClick={() => navigate(`/${data._id}`)}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;