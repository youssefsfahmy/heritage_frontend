import React from "react";
import "../../CSS/Homepage/ContactUsHome.css";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import PublicIcon from "@mui/icons-material/Public";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
export default function ContactUsHome() {
  return (
    <div className="ContactUsHome reveal">
      <div className="left">
        <div className="text1"> Let's get in touch</div>
        <div className="text2">
          We're open for any suggestion or just to have a chat
        </div>
        <div className="text3">
          <IconButton className="m-1" href="#!">
            <LocationOnIcon className="icon" />
          </IconButton>
          <div className="textDiv">
            {" "}
            Address: 198 West 21th Street, Suite 721 New York NY 10016
          </div>
        </div>
        <div className="text3">
          <IconButton className="m-1" href="#!">
            <PhoneIcon className="icon" />
          </IconButton>
          <div className="textDiv">home: + 1235 2355 98</div>{" "}
        </div>
        <div className="text3">
          <IconButton className="m-1" href="#!">
            <MailOutlineIcon className="icon" />
          </IconButton>
          <div className="textDiv"> Email: info@yoursite.com</div>
        </div>
        <div className="text3">
          <IconButton className="m-1" href="#!">
            <PublicIcon className="icon" />
          </IconButton>
          <div className="textDiv">Website yoursite.com</div>
        </div>
      </div>
      <div className="right">
        <div className="text1"> Get in touch</div>
        <form>
          <TextField
            className="textField"
            id="standard-basic"
            label="Name"
            variant="standard"
            required
            margin="dense"
            fullWidth
          />
          <TextField
            className="textField"
            id="standard-basic"
            label="Phone Number"
            variant="standard"
            margin="dense"
            required
            fullWidth
          />
          <TextField
            className="textField"
            margin="dense"
            id="standard-multiline-static"
            label="Message"
            multiline
            rows={4}
            variant="standard"
            required
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="buttonSubmit"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
