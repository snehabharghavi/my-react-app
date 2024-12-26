import axios from "axios";
import { useEffect, useState } from "react";

function Axiphoto() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((response) => 
      setData(response.data)
    );
  }, []);

  return (
    <div>
      <h1>Welcome to Axios Information</h1>
      <table border="2">
        <thead>
          <tr>
            <th>AlbumId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Url</th>
            <th>ThumbnailUrl</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.albumId}</td> {/* Correct property name */}
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.url}
                </a>
              </td>
              <td>
                <img src={item.thumbnailUrl} alt={item.title} width="50" height="50" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Axiphoto;