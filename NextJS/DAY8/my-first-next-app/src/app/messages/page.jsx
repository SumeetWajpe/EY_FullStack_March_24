import Message from "@/components/message.component";
import React from "react";

function Messages() {
  const messages = [
    { msg: "Hello", from: "Sumeet", to: "Amit" },
    { msg: "Hey", from: "John", to: "Amit" },
    { msg: "Hi", from: "Carter", to: "Amit" },
    { msg: "Hola", from: "James", to: "Bond" },
    { msg: "Bye", from: "Peter", to: "Parker" },
  ];
  return (
    <div>
      {messages.map(m => (
        <Message messagedetails={m} key={m.msg} />
      ))}
    </div>
  );
}

export default Messages;
