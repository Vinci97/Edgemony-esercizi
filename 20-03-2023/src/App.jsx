import { useEffect, useState } from 'react';
import './App.scss';
import { GET } from "./utils/http";
import Content from './component/content/Content';
import Hero from './component/hero/Hero';
import Navbar from './component/navbar/Navbar';

function App() {
  const [cocktailList, setCocktailList]= useState([]);
  useEffect(()=>{
    GET("/search.php?f=a").then(({drinks})=>{
      setCocktailList(()=> drinks)
    })
  },[])
  return (
    <div className="App">
       <Navbar/>
       <Hero/>
       <Content data={cocktailList}/>
    </div>
  )
}

export default App
