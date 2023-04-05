import React, { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
import Display from './Display.jsx';
import PageTransition from './PageTransition.jsx'
import Image from './pokeball.png'

const App = () => {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [nextPage, setNextPage] = useState()
  const [previousPage, setPreviousPage] = useState()
  const [loading, setLoading] = useState(true)

  //loads pokemon upon initial page load
  //loading ... will populate if there is a lapse between GET requests
  //nextPage and previousPage will get their respective URLs 
  //data is set to display all the names of each pokemon

  useEffect(() => {
        setLoading(true)
    axios.get(current)
      .then(response => {
        setLoading(false)
        setNextPage(response.data.next)
        setPreviousPage(response.data.previous)
        setData(response.data.results.map(p => p.name))
      })

  }, [current])



const GotoNextPage = () => {
  setCurrent(nextPage)
}

const GotoPreviousPage = () => {
  setCurrent(previousPage)
}


  if (loading) {
    return 'Loading...'
  }











//If there isn't a previous or next page don't render anything
  return (
    <div className="App">
     <div>
    <image src={Image}  alt='PokeBall'></image>
     </div>
      <div className="Cards">
        <Display
          data={data}
        />
      
      </div>
      <div>
      <PageTransition
        GotoNextPage={nextPage ? GotoNextPage : null}
        GotoPreviousPage={previousPage ? GotoPreviousPage : null}
        />
      </div>
    </div>

  );
}

export default App;
