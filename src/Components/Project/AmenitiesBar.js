import React from "react";
import "../../CSS/Project/AmenitiesBar.css";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import PaymentIcon from "@mui/icons-material/Payment";

export default function AmenitiesBar(props) {
  return (
    <div className="AmenitiesBarDiv reveal">
      <div className="iconDiv">
        <LocationCityIcon className="icon" />
        <div className="text">Located in {props.Copyrighting.location}</div>
      </div>
      <div className="iconDiv">
        <AspectRatioIcon className="icon" />
        <div className="text">
          Areas of {props.Copyrighting.area}m<sup>2</sup>
        </div>
      </div>
      <div className="iconDiv">
        <CalendarMonthIcon className="icon" />{" "}
        <div className="text">
          {props.Copyrighting.installments} years Installment plans
        </div>
      </div>
      <div className="iconDiv">
        <PaymentIcon className="icon" />{" "}
        <div className="text">
          {props.Copyrighting.downpayment}% Down Payment
        </div>
      </div>
      <div className="iconDiv">
        {" "}
        <DoneAllIcon className="icon" />
        <div className="text"> Complete by {props.Copyrighting.complete}</div>
      </div>
    </div>
  );
}
