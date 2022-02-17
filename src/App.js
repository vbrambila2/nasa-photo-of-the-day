import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants';
import Photo from './components/Photo';
import Info from './components/Info';
import Dropdown from './components/Dropdown';
import "./App.css";

function App() {
  const [image, setImage] = useState(null);
  const [imageDate, setImageDate] = useState("");

  const dateChange = () => {
    console.log("date changed");
  }

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}&date=2012-03-14`)
    .then(res => {
      setImage(res.data.hdurl);
      setImageDate(res.data.date);
    })
    .catch(err => console.error(err))
  }, [])

  

  return (
    <div className="App">
      <div className='App-header'> A.P.O.D.</div>
      <div>
        <Info date={imageDate} />
        <Dropdown dateChange={dateChange} />
        { image !== null ? <Photo imageSrc={image} /> : <h2>Loading...</h2> }
      </div>
    </div>
  );
}

export default App;
