import React from "react";
import "./Gallary.css";
import img from "../img/img.png";
import imga from "../GallaryImages/imga.png";
import imgb from "../GallaryImages/imgb.png";
import imgc from "../GallaryImages/imgc.png";
import imgd from "../GallaryImages/imgd.png";
import imge from "../GallaryImages/imgm.png";
import imgf from "../GallaryImages/imgo.png";
import imgg from "../GallaryImages/imgg.png";
import imgh from "../GallaryImages/imgh.png";
import imgi from "../GallaryImages/imgi.png";
import imgj from "../GallaryImages/imgj.png";
import imgk from "../GallaryImages/imgk.png";
import imgl from "../GallaryImages/imgl.png";

const imgarr = [
  imga,
  imgb,
  imgc,
  imgd,
  imge,
  imgf,
  imgg,
  imgh,
  imgi,
  imgj,
  imgk,
  imgl,
];

export const Gallary = () => {
  return (
    <div className="images">
      
      {imgarr.map((img) => {
        return (
          <>
            <div style={{display:"flex" , flexDirection:"column"}}>
              <img src={img} alt="" />
              <div style={{display:"flex" ,gap:"3px", marginTop:"3px"}}>
              <button style={{width:"50% ", fontSize:"20px", background:"orange"}}>Add To Cart</button>
              <button className="buybtn" style={{width:"50% ", fontSize:"20px"}}>Buy Now</button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
