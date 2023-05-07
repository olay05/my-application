import React, { useState, useEffect } from "react";
import axios from "axios";


export default function Axios() {
  const [post, setPost] = useState([]);

//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");

  // get method
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then((res) => {
          console.log(res.data);
          setPost(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  return (
    <div>
    <table>
        <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>Title</th>
        </tr>
        {post.map(post =>(
                <tr>
                    <td>{post.id}</td>
                    <td>{post.userId}</td>
                    <td>{post.title}</td>
                </tr>
        ))}
            
    </table>
    </div>
  )
       

 
  
}

