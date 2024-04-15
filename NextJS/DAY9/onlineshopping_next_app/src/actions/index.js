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
