import "./index.css"
const images ={img1:"https://picsum.photos/1200/300",img2:"https://picsum.photos/1200/300",img3:"https://picsum.photos/1200/300" };
const Gallery = () =>{
    return (
        <><div className="titleGallery"><h1>La Gallery</h1></div><div className="boxGallery">
            <img className="img1" src={images.img1} alt="#" />
            <img className="img2" src={images.img2} alt="#" />
            <img className="img3" src={images.img3} alt="#" />
        </div></>
    );
};
export default Gallery