import React, { useState } from "react";
import './gallery.css';
import CloseIcon from '@material-ui/icons/Close';
import Img1 from './img/Img1.jpg';
import Img2 from './img/Img2.jpg';
import Img3 from './img/Img3.jpg';
import Img4 from './img/Img4.jpg';
import Img5 from './img/Img5.jpg';
import Img6 from './img/Img6.jpg';
import Img7 from './img/Img7.jpg';
import Img8 from './img/Img8.jpg';
import Img9 from './img/Img9.jpg';
import Img10 from './img/Img10.jpg';
import Img11 from './img/Img11.jpg';
import Img12 from './img/Img12.jpg';
import Img13 from './img/Img13.jpg';
import Img14 from './img/Img14.jpg';
import Img15 from './img/Img15.jpg';
import Img16 from './img/Img16.jpg';
import Img17 from './img/Img17.jpg';
import Img18 from './img/Img18.jpg';
import Img19 from './img/Img19.jpg';
const Gallery =()=>{
    let data = [
        {
            id:1,
            imgSrc: Img1,

        },
        {
            id:2,
            imgSrc: Img2,
            
        },
        {
            id:3,
            imgSrc: Img3,
            
        },
        {
            id:4,
            imgSrc: Img4,
            
        },
        {
            id:5,
            imgSrc: Img5,

        },
        {
            id:6,
            imgSrc: Img6,
            
        },
        {
            id:7,
            imgSrc: Img7,
            
        },
        {
            id:8,
            imgSrc: Img8,
            
        },
        {
            id:9,
            imgSrc: Img9,

        },
        {
            id:10,
            imgSrc: Img10,
            
        },
        {
            id:11,
            imgSrc: Img11,
        },
        {
            id:12,
            imgSrc: Img12,
            
        },
        {
            id:13,
            imgSrc: Img13,
            
        },
        {
            id:14,
            imgSrc: Img14,
            
        },
        {
            id:15,
            imgSrc: Img15,
        },
        {
            id:16,
            imgSrc: Img16,
            
        },
        {
            id:17,
            imgSrc: Img17,
            
        },
        {
            id:18,
            imgSrc: Img18,
            
        },
        {
            id:19,
            imgSrc: Img19,
        }
    ]

const [model,setModel] =useState(false);
const [tempimdSrc, setTempImgSrc] = useState('');
    const getImg=(imgSrc)=>{
         setTempImgSrc(imgSrc);
         setModel(true);
    }
    return(
        <>
        <div className={model? "model open" : "model"}>
            <img src={tempimdSrc} />
                <CloseIcon onClick = {()=> setModel(false)}/>
        </div>
        <div className="gallery">
            {data.map((item,index) =>{
                return(
                <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
                    <img src={item.imgSrc} style={{width: '100%'}}/>
                </div>
                )
            })}

        </div>
        </>
       
       
       
    );
}

export default Gallery; 