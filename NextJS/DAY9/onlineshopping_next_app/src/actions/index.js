"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function EditProductOnServer(theProduct) {
  console.log("Edit Server Action called !"); //?? call PUT / PATCH (define endpoints on server & then use here)

  await fetch("http://localhost:3100/products/edit/" + theProduct.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(theProduct),
  });

  revalidatePath("/products");
  redirect("/products");
}

export async function addNewProduct(formState, formData) {
  const id = formData.get("pid");
  const title = formData.get("ptitle");
  const price = formData.get("pprice");
  const likes = formData.get("plikes");
  const rating = formData.get("prating");
  const imageUrl = formData.get("pimageurl");

  if (typeof title !== "string" || title.length < 3) {
    return {
      message: "Title must be greater than 3 characters !",
    };
  }
  // add new product with fetch POST & redirect to /products
}
