import React, { useState } from "react";

function CheckBoxExample() {
  const [agree, setAgree] = useState(false);

  const handleChange = (event) => {
    setAgree(event.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={agree}
          onChange={handleChange}
        />
        আমি শর্তে রাজি
      </label>

      <p>তুমি {agree ? "রাজি" : "রাজি নও"}।</p>
    </div>
  );
}

export default CheckBoxExample;
