import { useState } from "react";
import axios from "axios";
const Search =()=>{
       const [empno,setEmpno]=useState("");
       const [mydata,setMydata]=useState([]);
const handleSubmit=async()=>{
        let api=`http://localhost:8000/employees/search?eno=${empno}`;
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    const ans=mydata.map((key)=>{
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
        <h1>Search page</h1>
      Enter Employee Number :<input type="text" value={empno}  onChange={(e)=>{setEmpno(e.target.value)}}/>
        <button onClick={handleSubmit}>Search</button>

        <table border="2">
            <tr>
              <th>empno</th>
              <th>name</th>
              <th>designation</th>
              <th>salary</th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default Search;