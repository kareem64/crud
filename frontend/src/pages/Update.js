import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const {id}=useParams()
  const [values, setValues] = useState({
    name: "",
    image: "",
    price: "",
    qty: "",
  });
  const handelChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
   const Navigate = useNavigate();
   
  const handelClick = async (e) => {

    e.preventDefault();

    try {
      await axios.put("http://localhost:5000/update/"+id, values)
      .then(res=>Navigate('/'))
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/getRecord/"+id)
      .then((res) => setValues({...values,name:res.data[0].name,image:res.data[0].image,price:res.data[0].price,qty:res.data[0].qty}))
      .catch((err) => console.log(err));
    
  }, []);
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={handelChange}
        value={values.name}
        name="name"
      />
      <input
        type="text"
        placeholder="image"
        onChange={handelChange}
        value={values.image}
        name="image"
      />
      <input
        type="text"
        placeholder="price"
        onChange={handelChange}
        value={values.price}
        name="price"
      />
      <input
        type="text"
        placeholder="Quntity"
        onChange={handelChange}
        value={values.qty}
        name="qty"
      />
      <button onClick={handelClick}>update</button>
    </div>
  );
};

export default Update;
