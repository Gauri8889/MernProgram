import axios from "axios";
import { useState,useEffect } from "react";

const Display=()=>{
  const [mydata, setMydata]=useState([]);
  const loadData=async()=>{
    let api="http://localhost:8000/employees/display";
    
    const response = await axios.get(api);
    setMydata(response.data);
    console.log(response.data);
  }
  useEffect(()=>{
    loadData();

  },[])
  const ans = mydata.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.empno}</td>
        <td>{key.name}</td>
        <td>{key.designation}</td>
        <td>{key.salary}</td>
      </tr>
      </>
    )
  })
    return(
      <>
      <h1>Employee Data display</h1>
      <table border={1}>
        <tr>
          <th>Emp no</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Salary</th>
        </tr>
        {ans}
      </table>
      </>
    )
  }
  export default Display;