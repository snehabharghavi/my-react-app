
import axios from "axios";
import { useEffect, useState } from "react";
import './Axitable.css';



function Axitable ()
{
    const[data,setData]=useState([]);
    useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/photos").
then(
        response=>setData(response.data)
    )
   },[]);
return (
    <div>
        <h1> Welcome to Axios infromation </h1>
        <table border="2">
            <tr>
            
                <th>Id</th>
                <th>Title</th>
                <th>Url</th>
                
            </tr>
        {
            data.map(item=>
                <tr>
                
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.url}</td>
                
                </tr>
                
            )
        }
        </table>
    </div>
);
}
export default Axitable;