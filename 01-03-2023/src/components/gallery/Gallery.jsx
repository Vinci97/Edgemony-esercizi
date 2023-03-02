import { useState } from "react";
import "./index.css"
const images =[
    "https://picsum.photos/1200/300",
    "https://picsum.photos/1200/300",
    "https://picsum.photos/1200/300",
];
const Gallery = () =>{
    const [actualImg, setActualImg] = useState(0);
    return (
        <><div className="titleGallery"><h1>La Gallery</h1></div><div className="boxGallery">
            <img className="img1" src={images[actualImg]} alt="#" />
            <button className="sliderBt1" onClick={() =>setActualImg(actualImg - 1)}>{"<"}</button>
            <button className="sliderBt2" onClick={() =>setActualImg(actualImg + 1)}>{">"}</button>
        </div></>
    );
};
export default Gallery