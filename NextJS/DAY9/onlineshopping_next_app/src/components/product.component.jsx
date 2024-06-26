import React from "react";
import Link from "next/link";
function Product({ productdetails }) {
  return (
    <div className="col-md-3 my-1">
      <div className="card">
        <Link href={"/productdetails/" + productdetails.id}>
          <img
            src={productdetails.imageUrl}
            className="card-img-top"
            width="200px"
            height="150px"
            alt={productdetails.title}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{productdetails.title}</h5>
          <p className="card-text">{productdetails.price}</p>
          <p className="card-text">{productdetails.rating}</p>
          <button className="btn btn-primary">{productdetails.likes}</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
