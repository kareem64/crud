import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AllProducts = () => {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/products")
        .then(res=> setProducts(res.data))
        .catch(err=>console.log(err))
    //     const fetchData = async () => {
    //    try 
    //    {
    //     const res = await axios.get("http://localhost:5000/products")
    //     console.log(res)
    // } catch(err){
    //     console.log(err)
    // }  
    //     };
    //      fetchData();
    },[])
   const handelDelete = async (id)=>{
    try{
await axios.delete("http://localhost:5000/products/" + id);
document.location.reload()
    }catch(err){
      console.log(err)
    }


   }
  return (
    <div>
      <h1>Add new Product</h1>
      <button>
        <Link to="addproduct">Add Product</Link>
      </button>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <h3>{product.price}</h3>
          <h3>{product.qty}</h3>
          <button><Link to={`/update/${product.id}`}>update</Link></button>
          <button onClick={()=>handelDelete(product.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}

export default AllProducts
