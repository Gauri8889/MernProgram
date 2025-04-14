import { useState } from "react";
import axios from "axios";

const Insert=()=>{
      const [input,setInput]=useState({});

    const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values, [name]:value}));
      console.log(input);

    }

    // const handleSubmit=async()=>{
    //     let api="http://localhost:8000/employees/save";
    //     const response = await axios.post(api,input);
    //     console.log(response.data);
    // }

    
    const handleSubmit = async () => {
      const api = "http://localhost:8000/employees/save";
      try {
          const response = await axios.post(api, input); // 'input' should be defined earlier in your code
          console.log(response.data);
      } catch (error) {
          console.error("There was an error:", error); // Catch and log any errors
      }
  }
  
    return(
      <>
      <h1>Insert page</h1>
      Enter Employee No : <input type="number" name="empno" onChange={handleInput}/>
      <br />
      Enter Name : <input type="text" name="name" onChange={handleInput}/>
      <br />
      Enter Designation : <input type="text" name="designation" onChange={handleInput}/>
      <br />
      Enter Salary : <input type="number" name="salary" onChange={handleInput}/>
      <br />
      <button onClick={handleSubmit}>Save!!</button>
      </>
    )
  }
  export default Insert;