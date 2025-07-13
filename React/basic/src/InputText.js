import React, { useState } from "react";

function InputText() {
  const [text, setText] = useState(""); // শুরুতে text ফাঁকা

  // handleChange ফাংশন ইনপুট বদলালে কাজ করে
  const handleChange = (event) => {
    setText(event.target.value); // ইনপুট এর মান স্টেটে বসাই
  };

  return (
    <div>
      <h2>তুমি লিখছো: {text}</h2>

      <input
        type="text"
        placeholder="এখানে লিখো..."
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputText;
