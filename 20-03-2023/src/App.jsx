import { useEffect, useState } from 'react';
import './App.scss';
import { GET } from "./utils/http";
import Content from './component/content/Content';
import Hero from './component/hero/Hero';
import Navbar from './component/navbar/Navbar';
import {filteredList} from "./utils/funcs"

function App() {
  const [cocktailList, setCocktailList]= useState([]);
  const [category, setCategory]= useState("Cocktail");
  useEffect(()=>{
    GET("/search.php?f=a").then(({drinks})=>{
      setCocktailList(()=> drinks)
    })
  },[])
  return (
    <div className="App">
       <Navbar/>
       <Hero setCategory={setCategory}/>
       <Content data={filteredList(cocktailList, 'strCategory',category)}/>
    </div>
  )
}

export default App
