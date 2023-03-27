import { useEffect, useState } from 'react';
import { GET } from "./utils/http";
import Content from './component/content/Content';
import Hero from './component/hero/Hero';
import Navbar from './component/navbar/Navbar';
import {filteredList} from "./utils/funcs"
import styles from "./App.module.scss"
import Footer from './component/footer';
import Reservetion from './component/Reservation';

function App() {
  const [cocktailList, setCocktailList]= useState([]);
  const [category, setCategory]= useState("Cocktail");
  useEffect(()=>{
    GET("/search.php?f=a").then(({drinks})=>{
      setCocktailList(()=> drinks)
    })
  },[])
  return (
    <div className={styles.App}>
       <Navbar/>
       {/* <Reservetion/> */}
       <Hero setCategory={setCategory}/>
       <Content data={filteredList(cocktailList, 'strCategory',category)}/>
       <Footer/>
    </div>
  )
}

export default App
