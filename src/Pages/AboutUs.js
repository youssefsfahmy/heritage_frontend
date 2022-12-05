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
        Premium Estate agency specialized in renting, selling and managing
        luxurious properties in Egypt. Heritage was founded on the grounds of
        honesty and integrity ensuring that each client gets a very customized
        experience from the minute they inquire to the minute they receive their
        keys to their dream home. We combine a wide range of diverse services
        with unique know-how to develop unparalleled outcomes. <br />
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
          Heritage is thriving to be a leading estate agency in Egypt, driven by
          customer service, dedication and a passion for Real Estate. . We are
          working to be the to-go-to agency when it comes to renting, selling
          and reselling a real estate while eliminating the hassle that usually
          comes with real estate transactions
        </div>
        <div className="col reveal sec1">
          <div className="title">
            {" "}
            <hr></hr>
            <span>Mission</span>
          </div>
          Make real estate transactions hassle free through nurturing customers'
          needs. Eliminating various options that usually confuse clients'
          decisions. By providing the highest level of service we possibly can,
          as well as offering to our clients, the best properties from family
          homes through to astute investment opportunities. We embrace our
          knowledge of local and international Real Estate Market and this
          knowledge adds value to our services and the Real Estate Industry.
        </div>
        <div className="col reveal sec2">
          <div className="title">
            {" "}
            <hr></hr>
            <span>Values</span>
          </div>
          Our business is based on the principles of Honesty. Integrity.
          Punctuality. Reliability.building our reputation and these are
          apparent in our business model, and our day to day business
          operations. We keep the clients requirements and interest on a
          priority and customer satisfaction is what we strive for.
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
              name="Ahmed AbdAllah"
              position="CEO"
              email="ahmed.abdallah.attia@gmail.com"
              phone="01000460468"
              image={employeeCard1}
              handleExpandClick={handleExpandClick}
              expanded={expanded[0]}
            />{" "}
          </div>
          <div className="oneCard reveal sec1">
            {" "}
            <EmployeeCard
              name="Ahmed El Kady"
              position="Sales Executive"
              email="aboallaaelkady@gmail.com"
              phone="01099929298"
              image={employeeCard2}
              handleExpandClick={handleExpandClick1}
              expanded={expanded[1]}
            />{" "}
          </div>

          <div className="oneCard reveal sec2">
            {" "}
            <EmployeeCard
              name="Martin Yanni"
              position="CTO"
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
