import EditProductForm from "@/components/client/EditProductForm";
import React from "react";

async function getProduct(id) {
  const res = await fetch("http://localhost:3100/products/" + id);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function EditProductPage(props) {
  // Option - 1
  // 1. Create Server Action
  let theProduct;
  try {
    theProduct = await getProduct(props.params.id);
  } catch (error) {
    if (!theProduct?.product) {
      notFound();
      //return <h1 className="text-danger"> Could not find the product !</h1>;
    }
  }
  return (
    <div>
      Editing Product with Id - {theProduct.id} with title {theProduct.title}
      {/* 2. Pass Server action as a prop to Client Component */}
      <EditProductForm theProduct={theProduct} />
    </div>
  );
}

export default EditProductPage;
