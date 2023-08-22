import * as React from "react";
import "../../CSS/Homepage/ContactUsHome.css";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import PublicIcon from "@mui/icons-material/Public";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import { send } from "emailjs-com";
import { useNavigate } from "react-router-dom";

export default function ContactUsHome(props) {
  const navigate = useNavigate();

  const [toSend, setToSend] = React.useState({
    from_name: "",
    to_name: "Sales Team",
    number: "",
    message: "",
    reply_to: "",
  });
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_brl75kk",
      "template_nqn19x4",
      toSend,
      "user_EsywzfdvKH8cGzk3Gm4RT"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    send(
      "service_brl75kk",
      "template_y7rbr6j",
      toSend,
      "user_EsywzfdvKH8cGzk3Gm4RT"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    props.project &&
      window.open(
        `https://heritage-eg.s3.amazonaws.com/Brochures/${props.Copyrighting.id}-brochure.pdf`
      );
    navigate("/");
    window.scrollTo(0, 0);
  };
  return (
    <div className={props.reveal ? "ContactUsHome reveal" : "ContactUsHome "}>
      <div className="left">
        <div className="text1"> Let's get in touch</div>
        <div className="text2">
          We're open for any suggestion or just to have a chat
        </div>
        <div className="text3">
          <IconButton
            className="m-1"
            href="https://maps.app.goo.gl/M2kZJuzLsM9pwc1q8?g_st=iw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LocationOnIcon className="icon" />
          </IconButton>
          <div className="textDiv">
            {" "}
            Address: 10 Abu Bakr El Sedik, Heliopolis, Cairo
          </div>
        </div>
        <div className="text3">
          <IconButton
            className="m-1"
            onClick={() => {
              window.open(
                "//api.whatsapp.com/send?phone=00201282041766&text=I would like to enquire about"
              );
              navigator.clipboard.writeText("01282041766");
            }}
          >
            <PhoneIcon className="icon" />
          </IconButton>
          <div className="textDiv">Phone: 012 820 41766</div>{" "}
        </div>
        <div className="text3">
          <IconButton className="m-1" href={"mailto:sales@heritage-egypt.com"}>
            <MailOutlineIcon className="icon" />
          </IconButton>
          <div className="textDiv"> Email: sales@heritage-egypt.com</div>
        </div>
        <div className="text3">
          <IconButton
            className="m-1"
            href={"https://www.heritage-egypt.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PublicIcon className="icon" />
          </IconButton>
          <div className="textDiv">Website: heritage-egypt.com</div>
        </div>
      </div>
      <div className="right">
        <div className="text1">
          {props.project
            ? "Sign up to download your free brochure!"
            : "Get in touch"}
        </div>
        <form onSubmit={onSubmit}>
          <TextField
            className="textField"
            id="standard-basic"
            name="from_name"
            label="Name"
            variant="standard"
            required
            margin="dense"
            value={toSend.from_name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            className="textField"
            id="standard-basic"
            name="number"
            label="Phone Number"
            variant="standard"
            value={toSend.number}
            onChange={handleChange}
            margin="dense"
            required
            fullWidth
            inputProps={{ pattern: "01[0-9]{9}" }}
          />
          <TextField
            className="textField"
            id="standard-basic"
            name="email"
            label="Email"
            variant="standard"
            value={toSend.email}
            onChange={handleChange}
            margin="dense"
            required
            fullWidth
            type={"email"}
          />
          <TextField
            className="textField"
            margin="dense"
            id="standard-multiline-static"
            label="Message"
            multiline
            name="message"
            rows={4}
            variant="standard"
            value={toSend.message}
            onChange={handleChange}
            required
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="buttonSubmit"
          >
            {props.project ? "Download Brochure" : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  );
}
