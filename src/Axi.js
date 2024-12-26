import axios from "axios";
import { useEffect, useState } from "react";
function Axi()
{
    const[data,setData]=useState([]);
    const[flag,setFlag]=useState(false)
    var getData=()=>{
        setFlag(true)
        //setFlag(!flag)
axios.get("https://jsonplaceholder.typicode.com/users").
then((v)=>{ 
            console.log(v.data);
            setData(v.data);
            }
    )
    }
return(
<div>
    <h1>Welcome to Axios</h1>
    <button onClick={getData}>GetDetails</button>
    {flag?
    <table border="1">
        <tr> 
            <th>id</th><th>name</th><th>Address</th>
        </tr>
       { 
       data.map(item=>
       <tr><td>{item.id}</td><td>{item.name}</td>
<td>{item.address.city}</td>     </tr>        )       }
        </table>:" " }
        </div>
       



       
    
)

}
export default Axi;
