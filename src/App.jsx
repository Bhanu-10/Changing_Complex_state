import React, { useState } from "react";

export default function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFullName((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="App">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          type="text"
          placeholder="First Name"
          value={fullName.fName}
        />
        <br />
        <input
          name="lName"
          onChange={handleChange}
          type="text"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
