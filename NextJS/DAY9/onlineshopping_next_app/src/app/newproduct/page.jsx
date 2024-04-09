import React from "react";

function NewProduct() {
  async function addNewProduct(formData) {
    // Define a server action
    "use server";
    // Get User Input
    const id = formData.get("pid");
    const title = formData.get("ptitle");

    console.log(id, title);
    // Add New Product (fetch)
    // Redirect to /products
  }
  return (
    <div>
      <form action={addNewProduct}>
        <div class="col-md-4">
          <div class="row">
            <label htmlFor="txtProductId">Id :</label>
            <input type="number" id="txtProductId" name="pid" />
          </div>
          <div class="row">
            <label htmlFor="txtProductTitle">Title :</label>
            <input type="text" id="txtProductTitle" name="ptitle" />
          </div>
          <div class="row">
            <label htmlFor="txtProductPrice">Price :</label>
            <input type="number" id="txtProductPrice" name="pprice" />
          </div>
          <div class="row">
            <label htmlFor="txtProductRating">Rating :</label>
            <input type="number" id="txtProductRating" name="prating" />
          </div>
          <div class="row">
            <label htmlFor="txtProductLikes">Likes :</label>
            <input type="number" id="txtProductLikes" name="plikes" />
          </div>
          <div class="row">
            <label htmlFor="txtProductImageUrl">Image Url :</label>
            <input type="text" id="txtProductImageUrl" name="pimageurl" />
          </div>
        </div>
        <button class="btn btn-success">Add New Product</button>
      </form>
    </div>
  );
}

export default NewProduct;
