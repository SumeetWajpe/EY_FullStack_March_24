"use client";
import React from "react";
import { useForm } from "react-hook-form";

function NewProductForm_ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  return (
    <div>
      <form
        onSubmit={handleSubmit(formData => {
          console.log(formData);
          // POST (server action)
        })}
      >
        <div className="col-md-4">
          <div className="row">
            <label htmlFor="txtProductId">Id :</label>
            <input
              type="number"
              id="txtProductId"
              {...register("id", { required: true })}
            />

            {errors.id && (
              <p className="text-danger">The Product Id is required !</p>
            )}
          </div>
          <div className="row">
            <label htmlFor="txtProductTitle">Title :</label>
            <input type="text" id="txtProductTitle" {...register("title")} />
          </div>

          <div className="row">
            <label htmlFor="txtProductPrice">Price :</label>
            <input type="number" id="txtProductPrice" {...register("price")} />
          </div>
          <div className="row">
            <label htmlFor="txtProductRating">Rating :</label>
            <input
              type="number"
              id="txtProductRating"
              {...register("rating")}
            />
          </div>
          <div className="row">
            <label htmlFor="txtProductLikes">Likes :</label>
            <input type="number" id="txtProductLikes" {...register("likes")} />
          </div>
          <div className="row">
            <label htmlFor="txtProductImageUrl">Image Url :</label>
            <input
              type="text"
              id="txtProductImageUrl"
              {...register("imageUrl")}
            />
          </div>
          <div className="row">
            <label htmlFor="txtProductImageUrl">Description :</label>
            <textarea id="txtProductImageUrl" {...register("description")} />
          </div>
          <button className="btn btn-success">Add New Product</button>
        </div>
      </form>
    </div>
  );
}

export default NewProductForm_ReactHookForm;
