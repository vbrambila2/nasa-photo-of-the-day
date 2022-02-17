import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants';
import Header from './components/Header';
import Photo from './components/Photo';
import Info from './components/Info';
import Dropdown from './components/Dropdown';
import "./App.css";

function App() {
  const [image, setImage] = useState(null);
  const [imageDate, setImageDate] = useState("");

  const dateChange = (e) => {
    e.preventDefault();
    const monthDate = document.getElementsByClassName("month")[0].value;
    const dayDate = document.getElementsByClassName("day")[0].value;
    const yearDate = document.getElementsByClassName("year")[0].value;
    //year day month in a string (res.data.date)
    const changer = `${yearDate}-0${monthDate}-${dayDate}`;
    
    axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${changer}`)
    .then((res) => {
      setImageDate(changer);
      setImage(res.data.hdurl)
    })
    .catch(err => console.error(err))
  }

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      setImage(res.data.hdurl);
      setImageDate(res.data.date);
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <Header />
      <div>
        { imageDate !== "" ? <Info date={imageDate} /> : <h2>Loading...</h2> }
        <Dropdown dateChange={dateChange} />
        { image !== null ? <Photo imageSrc={image} /> : <h2>Loading...</h2> }
      </div>
    </div>
  );
}

export default App;
