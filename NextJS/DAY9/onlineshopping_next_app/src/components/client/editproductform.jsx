"use client";

import { useState } from "react";
import { EditProductOnServer } from "@/actions";
function EditProductForm({ theProduct }) {
  let [editedProduct, setEditedProduct] = useState({ ...theProduct });

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          // console.log(editedProduct);
          EditProductOnServer(editedProduct);
        }}
      >
        <div className="col-md-4">
          <div className="row">
            <label htmlFor="txtProductId">Id :</label>
            <input
              type="number"
              id="txtProductId"
              name="pid"
              disabled
              value={editedProduct.id}
              onChange={e =>
                setEditedProduct({ ...editedProduct, id: +e.target.value })
              }
            />
          </div>
          <div className="row">
            <label htmlFor="txtProductTitle">Title :</label>
            <input
              type="text"
              id="txtProductTitle"
              name="ptitle"
              value={editedProduct.title}
              onChange={e =>
                setEditedProduct({ ...editedProduct, title: e.target.value })
              }
            />
          </div>
          <div className="row">
            <label htmlFor="txtProductPrice">Price :</label>
            <input
              type="number"
              id="txtProductPrice"
              name="pprice"
              value={editedProduct.price}
              onChange={e =>
                setEditedProduct({ ...editedProduct, price: +e.target.value })
              }
            />
          </div>
          <div className="row">
            <label htmlFor="txtProductRating">Rating :</label>
            <input
              type="number"
              id="txtProductRating"
              name="prating"
              value={editedProduct.rating}
              onChange={e =>
                setEditedProduct({ ...editedProduct, rating: +e.target.value })
              }
            />
          </div>
          <div className="row">
            <label htmlFor="txtProductLikes">Likes :</label>
            <input
              type="number"
              id="txtProductLikes"
              name="plikes"
              value={editedProduct.likes}
              onChange={e =>
                setEditedProduct({ ...editedProduct, likes: +e.target.value })
              }
            />
          </div>
          <div className="row">
            <label htmlFor="txtProductImageUrl">Image Url :</label>
            <input
              type="text"
              id="txtProductImageUrl"
              name="pimageurl"
              value={editedProduct.imageUrl}
              onChange={e =>
                setEditedProduct({ ...editedProduct, imageUrl: e.target.value })
              }
            />
          </div>
          <div className="row">
            <label htmlFor="txtProductDescription">Image Url :</label>
            <textarea
              id="txtProductDescription"
              name="pdesc"
              value={editedProduct.description}
              onChange={e =>
                setEditedProduct({
                  ...editedProduct,
                  description: e.target.value,
                })
              }
            />
          </div>
        </div>
        <button className="btn btn-success">Update Product</button>
      </form>
    </div>
  );
}

export default EditProductForm;
