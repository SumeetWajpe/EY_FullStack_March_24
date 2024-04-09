import React from "react";

async function getPost(id) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function PostDetails(props) {
  let thePost = await getPost(props.params.id);
  return (
    <div>
      <h2>{thePost.title}</h2>
      <h3>{thePost.body}</h3>
    </div>
  );
}

export default PostDetails;
