import './App.css'
import { useState, useEffect } from 'react'
import Home from './Components/Home/Home'

function App() {

  const [data,setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/members");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <>

    <div>

    {(typeof data.members === 'undefined') ? (
      <p>Loading...</p>
    ) : (
      data.members.map((member, i) => (
        <p key={i}>{member}</p>
      ))

    )}

    </div>


      <Home />
    </>
  )
}

export default App
