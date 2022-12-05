import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../../CSS/Project/Gallery.css";
import * as React from "react";

import ModalDownload from "./ModalDownload";
import "../../CSS/Project/ModalDownload.css";

export default function Gallery(props) {
  let images = [
    {
      original: `https://heritage-eg.s3.amazonaws.com/${props.Copyrighting.id}1.jpg`,
      thumbnail: `https://heritage-eg.s3.amazonaws.com/${props.Copyrighting.id}1.jpg`,
    },
    {
      original: `https://heritage-eg.s3.amazonaws.com/${props.Copyrighting.id}2.jpg`,
      thumbnail: `https://heritage-eg.s3.amazonaws.com/${props.Copyrighting.id}2.jpg`,
    },
    {
      original: `https://heritage-eg.s3.amazonaws.com/${props.Copyrighting.id}3.jpg`,
      thumbnail: `https://heritage-eg.s3.amazonaws.com/${props.Copyrighting.id}3.jpg`,
    },
    {
      original: `https://heritage-eg.s3.amazonaws.com/${props.Copyrighting.id}4.jpg`,
      thumbnail: `https://heritage-eg.s3.amazonaws.com/${props.Copyrighting.id}4.jpg`,
    },
    {
      original: `https://heritage-eg.s3.amazonaws.com/${props.Copyrighting.id}5.jpg`,
      thumbnail: `https://heritage-eg.s3.amazonaws.com/${props.Copyrighting.id}5.jpg`,
    },
    {
      original: `https://heritage-eg.s3.amazonaws.com/${props.Copyrighting.id}6.jpg`,
      thumbnail: `https://heritage-eg.s3.amazonaws.com/${props.Copyrighting.id}6.jpg`,
    },
  ];
  return (
    <div className="mainGalleryDiv ">
      <ImageGallery items={images} style={{ width: "50vw" }} />
      <div className="summaryDiv reveal">
        <span className="title">Summary </span> <br /> <br /> <br />
        {props.Copyrighting.summary}
        <div className="buttonDiv">
          <ModalDownload Copyrighting={props.Copyrighting} />
        </div>
      </div>

      {/* <img src={master}></img> */}
    </div>
  );
}
