import React, { useState } from "react";
import img1 from "../img/img1.png";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import "./Slider.css";

const imgs = [img1,img2,img3,img4];

let currentIndex = 0;  
export const Slider = () => {
  const [img, setImg] = useState(imgs[0]);
  const prevImg = () => {
    if(currentIndex == 0)
      {
        currentIndex = 4;
      }
    currentIndex = currentIndex - 1;
      setImg(imgs[currentIndex]);
      console.log("Index "+currentIndex);
      
      
  };

  const nextImg = () => {
    currentIndex = currentIndex + 1
    setImg(imgs[currentIndex])
      if(currentIndex == imgs.length - 1)
      {
        currentIndex = -1;
      }
      console.log("Index "+ currentIndex);
      console.log(imgs.length);
      
      
  };
  return (
    <>
      <div className="box">
        <button style={{background:"black", padding: "5px"} }  onClick={prevImg}>{"<"}</button>
        <div className="imgbox">
          <img src={img} alt="" />
        </div>
        <button style={{background:"black", padding:"5px"}} onClick={nextImg}>{">"}</button>
      </div>
    </>
  );

  
};
