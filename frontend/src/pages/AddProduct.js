import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [values, setValues] = useState({
    name: "",
    image: "",
    price: "",
    qty: "",
  });
  const handelChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate()
  const handelClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/products", values);
      navigate('/')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={handelChange}
        name="name"
      />
      <input
        type="text"
        placeholder="image"
        onChange={handelChange}
        name="image"
      />
      <input
        type="text"
        placeholder="price"
        onChange={handelChange}
        name="price"
      />
      <input
        type="text"
        placeholder="Quntity"
        onChange={handelChange}
        name="qty"
      />
      <button onClick={handelClick}>Add</button>
    </div>
  );
};

export default AddProduct;
