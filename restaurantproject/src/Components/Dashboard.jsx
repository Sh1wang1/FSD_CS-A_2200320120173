import React from 'react'
import {useState,useEffect} from 'react'
const Dashboard = () => {
  const [recipes,setrecipes]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState();
 useEffect(()=>{
  const url="https://dummyjson.com/recipes";
  const res=fetch(url);
  res.then((res)=>res.json())
  .then((data)=>{
    console.log(data.recipes)
    setrecipes(data.recipes);
    setLoading(false)
  })
  .catch((err)=>{
    console.log("network error",err);
    setLoading(false);
    setError(err.message);
   
  })
},[])

  return (
    <div>
      {loading && <p>Loading......</p>}
      {error && <p>{error}</p>}
      {!loading && !error &&(<div>
      <h1>Restaurant Menu</h1>
      <table>
        <tr>
          <th>&nbsp;</th>
          <th>Recipe Name</th>
          <th>Cuisine</th>
          <th>Rating</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
     {
      recipes.map((r)=>(
      <tr>
        <td><img src={r.image} width="100" height="50"/></td>
        <td>{r.name}</td>
        <td>{r.cuisine}</td>
        <td>{r.rating}</td>
        <td>120/-</td>
        <td><button>Add to cart</button></td>
      </tr>
      ))
}
</table>
</div>
)}
      
    </div>
  )
}

export default Dashboard
