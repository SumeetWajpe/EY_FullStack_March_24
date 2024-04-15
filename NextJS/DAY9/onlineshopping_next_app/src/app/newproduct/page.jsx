// import React from "react";
// import { redirect } from "next/navigation";
// async function addNewProductDataToServer(newProduct) {
//   const res = await fetch("http://localhost:3100/products/new", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newProduct),
//   });
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// function NewProduct() {
//   async function addNewProduct(formData) {
//     // Define a server action
//     "use server";
//     // Get User Input
//     const id = formData.get("pid");
//     const title = formData.get("ptitle");
//     const price = formData.get("pprice");
//     const likes = formData.get("plikes");
//     const rating = formData.get("prating");
//     const imageUrl = formData.get("pimageurl");

//     let newProduct = { id, title, price, likes, rating, imageUrl };

//     // Add New Product (fetch)
//     let message = await addNewProductDataToServer(newProduct);
//     if (message.msg) {
//       console.log(message.msg); // update a label
//       redirect("/products");
//     }
//     // Redirect to /products
//   }
//   return (
//     <div>
//       <form action={addNewProduct}>
//         <div className="col-md-4">
//           <div className="row">
//             <label htmlFor="txtProductId">Id :</label>
//             <input type="number" id="txtProductId" name="pid" />
//           </div>
//           <div className="row">
//             <label htmlFor="txtProductTitle">Title :</label>
//             <input type="text" id="txtProductTitle" name="ptitle" />
//           </div>
          // <div className="row">
          //   <label htmlFor="txtProductPrice">Price :</label>
          //   <input type="number" id="txtProductPrice" name="pprice" />
          // </div>
          // <div className="row">
          //   <label htmlFor="txtProductRating">Rating :</label>
          //   <input type="number" id="txtProductRating" name="prating" />
          // </div>
          // <div className="row">
          //   <label htmlFor="txtProductLikes">Likes :</label>
          //   <input type="number" id="txtProductLikes" name="plikes" />
          // </div>
          // <div className="row">
          //   <label htmlFor="txtProductImageUrl">Image Url :</label>
          //   <input type="text" id="txtProductImageUrl" name="pimageurl" />
          // </div>
//         </div>
//         <button className="btn btn-success">Add New Product</button>
//       </form>
//     </div>
//   );
// }

// export default NewProduct;


import NewProductForm_ReactHookForm from '@/components/client/newproductform'
import React from 'react'

function NewProductUsingReactHookForm() {
  return (
    <div>
      <NewProductForm_ReactHookForm />
    </div>
  )
}

export default NewProductUsingReactHookForm
