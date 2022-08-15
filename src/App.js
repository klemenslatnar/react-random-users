import "./App.css";
import React, { useState } from "react";
import User from "./components/User";

function App() {
  const [users, setUsers] = useState([]);

  let userArr = [];

  const clickHandler = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();

    console.log(data);
    const userData = {
      id: data.results[0].id.value,
      name: data.results[0].name.first + " " + data.results[0].name.last,
      image: data.results[0].picture.thumbnail,
      gender:
        data.results[0].gender[0].toUpperCase() +
        data.results[0].gender.slice(1),
      country: data.results[0].location.country,
    };

    userArr.push(userData);
    setUsers((prevState) => {
      return [...prevState, ...userArr];
    });
  };

  return (
    <div className="container">
      <button onClick={clickHandler}>Fetch Users</button>
      <div>
        <User users={users} />
      </div>
    </div>
  );
}

export default App;
