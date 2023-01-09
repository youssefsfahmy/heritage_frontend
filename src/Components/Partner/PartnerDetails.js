import React from "react";
import "../../CSS/Partner/PartnerDetails.css";
import ReadMoreReact from "read-more-react";

export default function PartnerDetails(props) {
  const text = props.Copyrighting.summary;
  return (
    <div className="mainPartnerDetailsDiv reveal">
      <span className="title">ABOUT {props.Copyrighting.name} </span> <br />
      <br />
      <ReadMoreReact
        text={text}
        min={300}
        ideal={300}
        max={300}
        readMoreText="Read more"
      />{" "}
      <br /> <br />
      {props.Copyrighting.name} currently has{" "}
      {props.Copyrighting.locations.length} destinations across Egypt enriching
      the lives of their residents and welcoming guests from around the world.
      These are: <br />
      <br />
      <ul>
        {" "}
        {props.Copyrighting.locations.map(function (value, key) {
          return (
            <li key={key}>• {value}</li>

            // <>
            //   <br />• {value}
            // </>
          );
        })}
      </ul>
      {}
      <br />
    </div>
  );
}
