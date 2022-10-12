import * as React from "react";
import EmployeeCard from "../Components/AboutUs/EmployeeCard";
import "../CSS/Pages/AboutUs.css";
import employeeCard1 from "../Images/employeeCard1.jpg";
import employeeCard2 from "../Images/employeeCard2.jpg";
import employeeCard3 from "../Images/employeeCard3.jpg";

export default function AboutUs() {
  const [expanded, setExpanded] = React.useState([false, false, false]);

  const handleExpandClick = () => {
    console.log(1);
    setExpanded([!expanded[0], false, false]);
    console.log(expanded);
  };
  const handleExpandClick1 = () => {
    console.log(2);

    setExpanded([false, !expanded[1], false]);
    console.log(expanded);
  };
  const handleExpandClick2 = () => {
    setExpanded([false, false, !expanded[2]]);
    console.log(expanded);
  };
  return (
    <div className="aboutUsMainDiv">
      <div className="imageDiv">ABOUT US</div>{" "}
      <div className="textDiv">
        Heritage Real Estate Broker offers first class real estate services for
        a wide base of clientele. Based in Cairo, Egypt and possessing a vast
        client base with properties across Egypt, we are best placed to assist
        diverse clients with different requirements. With our key values
        apparent in our business model, we strive to achieve the highest level
        of customer service by providing our customers what they require and
        most of the times exceeding their expectations. <br />
        <br />
        Heritage Real Estate Broker was established in 2018 in a small office in
        Leading Business Center consisting of only a handful of agents and
        support staff. Our dream was to be a leading property broker and a
        prominent name in Egypt real estate sector and we have very quickly come
        to the forefront of the real estate market. This has happened through
        immense hard work and determination and by providing a high level of
        service to our values customers.
      </div>
      <div className="tableDiv">
        <div className="col reveal">
          <div className="title">
            <hr></hr>
            <span>Vision</span>
          </div>
          We have based our business on transparency and we envision ourselves
          as the leading real estate brokerage company in Egypt, driven by
          customer service, dedication and a passion for Real Estate. Our main
          strength is our knowledge of the market and our dedication towards
          customer satisfaction, which has helped clients meet their real estate
          requirements.
        </div>
        <div className="col reveal sec1">
          <div className="title">
            {" "}
            <hr></hr>
            <span>Mission</span>
          </div>
          Our mission is to have a healthy growth as a company by providing the
          highest level of service we possibly can, as well as offering to our
          clients, the best properties from family homes through to astute
          investment opportunities. We embrace our knowledge of local and
          international Real Estate Market and this knowledge adds value to our
          services and the Real Estate Industry.
        </div>
        <div className="col reveal sec2">
          <div className="title">
            {" "}
            <hr></hr>
            <span>Values</span>
          </div>
          Our business is based on the principles of Transparency, Tenacity and
          Trust and these are apparent in our business model, and our day to day
          business operations. We keep the clients requirements and interest on
          a priority and customer satisfaction is what we strive for.
        </div>
      </div>
      <div className="ourTeam reveal">
        <hr></hr>
        <div className="row reveal">
          <div className="title">Our Team</div>{" "}
          <div className="text">
            As creative problem-solvers, Heritage creates exceptional
            environments and delivers enduring value for every investor,
            partner, and client.
          </div>
        </div>
        <div className="cards">
          <div className="oneCard reveal">
            {" "}
            <EmployeeCard
              image={employeeCard1}
              handleExpandClick={handleExpandClick}
              expanded={expanded[0]}
            />{" "}
          </div>
          <div className="oneCard reveal sec1">
            {" "}
            <EmployeeCard
              image={employeeCard2}
              handleExpandClick={handleExpandClick1}
              expanded={expanded[1]}
            />{" "}
          </div>

          <div className="oneCard reveal sec2">
            {" "}
            <EmployeeCard
              image={employeeCard3}
              handleExpandClick={handleExpandClick2}
              expanded={expanded[2]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
