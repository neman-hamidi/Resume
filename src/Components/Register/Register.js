import React, { useState } from "react";
import "./Register.css";
export default function Register() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, SetError] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validate = () => {
    let tempError = {};
    if (!formData.name) tempError.name = "name in required !!!!";
    if (!formData.email) {
        tempError.email = "email in required !!!!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        tempError.email = "email in required !!!!";
    }
    SetError(tempError);
    return Object.keys(tempError).length === 0;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("login Success Fully", formData);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={changeHandler}
          />
        </div>
        {error.name && <span style={{ color: "red" }}>{error.name}</span>}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
        </div>
        {error.email && <span style={{ color: "red" }}>{error.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
