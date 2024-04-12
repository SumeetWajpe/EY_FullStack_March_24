import React from "react";

function EditPage(props) {
  let id = props.params.id;
  return <div>Editing Product with Id - {id}</div>;
}

export default EditPage;
