import { useEffect, useState } from "react";
import axios from "axios";

function AxiosCard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers([...response.data]);
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row row-cols-lg-5 row-cols-md-3 row-cols-1 text-light">
        {users.map((user) => (
          <div  className="p-2">
            <div className="card card-body bg-dark ">
              <h1 key={user.id} >User name : {user.username}</h1>
              <h1> Address : {user.address.street}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AxiosCard;
