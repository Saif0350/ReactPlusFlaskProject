import "./App.css";
import { useState, useEffect } from "react";
import Home from "./Components/Home/Home";

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    const apiURL = "http://localhost:5000/members";
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div>
        {typeof data.members === "undefined" ? (
          <p>Loading...</p>
        ) : (
          data.members.map((member, i) => <p key={i}>{member}</p>)
        )}
      </div>

      <Home />
    </>
  );
}

export default App;
