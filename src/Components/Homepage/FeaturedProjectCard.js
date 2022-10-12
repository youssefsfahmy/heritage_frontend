import React from "react";

export default function FeaturedProjectCard(props) {
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
    >
      <div className="figure" style={{ content: props.content }}>
        <div class="date">
          {/* <span class="card-date-day">By:</span> */}
          <span class="card-date-month">{props.developer}</span>
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
