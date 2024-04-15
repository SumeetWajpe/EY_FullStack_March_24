import Product from "@/components/product.component";
import React from "react";

// time based - purged
// export const revalidate = 10;

export const dynamic = "force-dynamic";

async function getProductsData() {
  const res = await fetch("http://localhost:3100/products", {
    // next: { revalidate: 0 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function ListOfProducts() {
  const products = await getProductsData();
  return (
    <div className="row">
      {products.map(p => (
        <Product productdetails={p} key={p.id} />
      ))}
    </div>
  );
}

export default ListOfProducts;
