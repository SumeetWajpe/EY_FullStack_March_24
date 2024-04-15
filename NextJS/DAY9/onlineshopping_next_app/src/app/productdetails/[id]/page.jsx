import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
async function getProduct(id) {
  await new Promise(r => setTimeout(r, 1000));
  const res = await fetch("http://localhost:3100/products/" + id);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function ProductDetails(props) {
  let theProduct;
  try {
    theProduct = await getProduct(props.params.id);
  } catch (error) {
    if (!theProduct?.product) {
      // notFound();
      return <h1 className="text-danger"> Could not find the product !</h1>;
    }
  }
  return (
    <div className="row">
      <div className="col-md-9">
        {/* Add video here */}
        <img src={theProduct.imageUrl} alt={theProduct.title} width="100%" />
      </div>
      <div className="col-md-3">
        <Link
          href={`/productdetails/${theProduct.id}/edit`}
          className="btn btn-primary"
        >
          Edit
        </Link>

        <h2> {theProduct.title}</h2>
        <p>{theProduct.description}</p>
        {/* Add other details like description, likes, rating */}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3100/products", {});

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const products = await res.json();
  return products.map(p => {
    return {
      id: p.id.toString(),
    };
  });
}
export default ProductDetails;
