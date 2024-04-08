import React from "react";

function Message({ messagedetails: { msg, from, to } }) {
  return (
    <div>
      <h3>{msg}</h3>
      <h4>From : {from}</h4>
      <h4>To : {to}</h4>
    </div>
  );
}

export default Message;
