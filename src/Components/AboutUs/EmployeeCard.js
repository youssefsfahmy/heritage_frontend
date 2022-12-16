import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../../CSS/AboutUs/EmployeeCard.css";

export default function EmployeeCard(props) {
  return (
    <Card sx={{ maxWidth: 400 }} className="employeeCard">
      <CardMedia
        component="img"
        height="300"
        position="top"
        image={props.image}
        alt="Paella dish"
      />
      <CardContent className="contentDiv">
        <div className="textTitleDiv">
          <div>
            {" "}
            <Typography variant="h5s" className="textTitle">
              {props.name}
            </Typography>
            <br />
            <Typography variant="h5s" className="textTitle">
              {props.position}
            </Typography>
          </div>
        </div>
      </CardContent>

      <Collapse
        style={{ padding: 0 }}
        in={props.expanded}
        timeout="auto"
        unmountOnExit
        sx={{ maxWidth: 300 }}
      >
        <CardContent sx={{ maxWidth: 300 }} style={{ padding: 0 }}>
          <div>Contact Card</div>
          <section className="mb-4">
            <IconButton className="m-1" href="#!">
              <FacebookIcon className="icon" />
            </IconButton>
            <IconButton className="m-1" href="#!">
              <TwitterIcon className="icon" />
            </IconButton>

            <IconButton className="m-1" href="#!">
              <GoogleIcon className="icon" />
            </IconButton>

            <IconButton className="m-1" href="#!">
              <InstagramIcon className="icon" />
            </IconButton>

            <IconButton className="m-1" href="#!">
              <LinkedInIcon className="icon" />
            </IconButton>
          </section>
        </CardContent>
      </Collapse>
    </Card>
  );
}
