import React from "react";
import { useNavigate } from "react-router-dom";

export default function FeaturedProjectCard(props) {
  const navigate = useNavigate();

  return (
    <div
      className={`figureOverlay ${
        props.reveal === 1
          ? "reveal sec1"
          : props.reveal === 2
          ? "reveal sec2"
          : props.reveal === 3
          ? "reveal sec3"
          : "reveal"
      }`}
      style={{ backgroundImage: `url(${props.photo}` }}
      onClick={() => {
        navigate(props.link);
      }}
    >
      <div className="figure" style={{ content: props.content }}>
        <div className="date">
          {/* <span class="card-date-day">By:</span> */}
          <span className="card-date-month">{props.developer}</span>
        </div>
        <div className="figcaption">
          <h4>
            <span>{props.name}</span>
          </h4>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
