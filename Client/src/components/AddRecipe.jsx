// import React, { useContext,useState } from "react";
// import { AppContext } from "../context/App_Context";
//  import { ToastContainer, toast,Bounce } from 'react-toastify';
//  import 'react-toastify/dist/ReactToastify.css';
//  import { useNavigate } from "react-router-dom";

// const AddRecipe = () => {
//   const navigate = useNavigate();
//     const {addRecipe} = useContext(AppContext);

//     const [formData, setformData] = useState({
//       title:"",
//       ist:"",
//       ing1:"",
//       ing2:"",
//       ing3:"",
//       ing4:"",
//       qty1:"",
//       qty2:"",
//       qty3:"",
//       qty4:"", 
//       imgurl:"",
//     });
     
//        const onChangeHandler = (e)=>{
//         const {name,value} = e.target;
//         setformData({
//           ...formData,
//           [name]:value,
//         });
//        }

//         const onSubmitHandler = async (e)=>{
//           e.preventDefault();
//           const{ 
//      title,
//        ist, 
//       ing1,
//       ing2,
//       ing3,
//       ing4,
//       qty1,
//       qty2,
//       qty3,
//       qty4, 
//     imgurl,
//           } = formData;
//           const result = await addRecipe(
//      title,
//        ist, 
//       ing1,
//       ing2,
//       ing3,
//       ing4,
//       qty1,
//       qty2,
//       qty3,
//       qty4, 
//     imgurl,
//           );
//    console.log(result)
//         }
//   return (
//     <>
//       <div className="container my-5 p-5" style={{
//         "width":"500px",
//         border:"2px solid yellow",
//         borderRadius:"10px"
//       }}>
//         <h2 className="text-center">Add Recipe</h2>
//         {/* form code is taken from bootstrap */}
//         <form onSubmit={onSubmitHandler}
//          style={{
//             "width":"420px",
//             margin:"auto"
//         }}
//           className="my-3 p-3"
//         >
//              <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">
//             title
//             </label>
//             <input
//             value={formData.title}
//             onChange={onChangeHandler}
//             name="title"
//               type="text"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">
//               instruction
//             </label>
//             <input
//             value={formData.ist}
//             onChange={onChangeHandler}
//              name="ist"
//               type="text"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//              ing1
//             </label>
//             <input
//             value={formData.ing1}
//             onChange={onChangeHandler}
//              name="ing1"
//               type="text"
//               className="form-control"
//               id="exampleInputPassword1"
//             />
//              </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//              ing2
//             </label>
//             <input
//               value={formData.ing2}
//             onChange={onChangeHandler}
//              name="ing2"
//               type="text"
//               className="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//              ing3
//             </label>
//             <input
//               value={formData.ing3}
//             onChange={onChangeHandler}
//             name="ing3"
//               type="text"
//               className="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//              ing4
//             </label>
//             <input
//               value={formData.ing4}
//             onChange={onChangeHandler}
//             name="ing4"
//               type="text"
//               className="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>
//             <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//              qty1
//             </label>
//             <input
//               value={formData.qty1}
//             onChange={onChangeHandler}
//             name="qty1"
//               type="text"
//               className="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>
//             <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//              qty2
//             </label>
//             <input
//              value={formData.qty2}
//             onChange={onChangeHandler}
//             name="qty2"
//               type="text"
//               className="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>
//             <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//              qty3
//             </label>
//             <input
//              value={formData.qty3}
//             onChange={onChangeHandler}
//             name="qty3"
//               type="text"
//               className="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>
//             <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//              qty4
//             </label>
//             <input
//              value={formData.qty4}
//             onChange={onChangeHandler}
//             name="qty4"
//               type="text"
//               className="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>
//            <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//              imgUrl
//             </label>
//             <input
//              value={formData.imgurl}
//             onChange={onChangeHandler} 
//             name="imgurl"
//               type="text"
//               className="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>
//           <div className="container d-grid col-6">
//            <button type="submit" className="btn btn-primary mt-3">
//               Add Recipe
//           </button>
//           </div>
          
//         </form>
//       </div>
//     </>
//   );
// };

// export default AddRecipe;


import React, { useContext, useState } from "react";
import { AppContext } from "../context/App_Context";
import { toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const navigate = useNavigate();
  const { addRecipe } = useContext(AppContext);

  const [formData, setformData] = useState({
    title: "",
    ist: "",
    ing1: "",
    ing2: "",
    ing3: "",
    ing4: "",
    qty1: "",
    qty2: "",
    qty3: "",
    qty4: "",
    imgurl: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const {
      title,
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
    } = formData;

    const result = await addRecipe(
      title,
      ist,
      ing1,
      ing2,
      ing3,
      ing4,
      qty1,
      qty2,
      qty3,
      qty4,
      imgurl
    );
   // console.log( "addrecipe",result);
       toast.success(result.data.message, {
   position: "top-right",
   autoClose: 1000,
   hideProgressBar: false,
   closeOnClick: false,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   theme: "dark",
   transition: Bounce,
   });
     
     //  console.log(result.data);
     setTimeout(() => {
       navigate("/");
     }, 1500);
  };

  return (
    <>
      <div className="container py-5">
        <div 
          className="glass-card p-4 p-md-5 mx-auto"
          style={{ maxWidth: "800px" }}
        >
          <h2 className="text-center fw-bold mb-4">Share Your Recipe</h2>
          <form onSubmit={onSubmitHandler}>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="titleInput" className="form-label">Recipe Title</label>
                <input
                  value={formData.title}
                  onChange={onChangeHandler}
                  name="title"
                  type="text"
                  className="form-control"
                  id="titleInput"
                  placeholder="e.g. Italian Pasta"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="imgurlInput" className="form-label">Image URL</label>
                <input
                  value={formData.imgurl}
                  onChange={onChangeHandler}
                  name="imgurl"
                  type="text"
                  className="form-control"
                  id="imgurlInput"
                  placeholder="https://..."
                  required
                />
              </div>
              <div className="col-12">
                <label htmlFor="instructionInput" className="form-label">Instructions</label>
                <textarea
                  value={formData.ist}
                  onChange={onChangeHandler}
                  name="ist"
                  className="form-control"
                  id="instructionInput"
                  rows="3"
                  placeholder="Steps to prepare..."
                  required
                ></textarea>
              </div>

              {/* Ingredients and Quantities */}
              <div className="col-12 mt-4">
                <h5 className="fw-bold mb-3">Ingredients</h5>
                <div className="row g-3">
                  {[1, 2, 3, 4].map((num) => (
                    <React.Fragment key={num}>
                      <div className="col-md-6">
                        <input
                          value={formData[`ing${num}`]}
                          onChange={onChangeHandler}
                          name={`ing${num}`}
                          type="text"
                          className="form-control"
                          placeholder={`Ingredient ${num}`}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          value={formData[`qty${num}`]}
                          onChange={onChangeHandler}
                          name={`qty${num}`}
                          type="text"
                          className="form-control"
                          placeholder={`Quantity ${num}`}
                        />
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div className="d-grid gap-2 mt-5">
              <button type="submit" className="btn btn-primary btn-lg">
                Add Recipe to Collection
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddRecipe;
