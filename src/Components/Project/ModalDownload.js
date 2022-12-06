import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { send } from "emailjs-com";
import { useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "var(--secondary)",
  border: "2px solid ",
  borderColor: "var(--secondary)",
  boxShadow: 24,
  p: 4,
  borderRadius: "1rem",
  padding: "3rem",
  color: "var(--primary)",
  fontWeight: "bold",
  fontSize: "1.5rem",
  textAlign: "center",
};

export default function ModalDownload(props) {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [toSend, setToSend] = React.useState({
    from_name: "",
    to_name: "Sales Team",
    number: "",
    email: "",
    message: `Interest in ${props.Copyrighting.name}`,
    reply_to: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    console.log("TOTO");
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

    window.open(
      `https://heritage-eg.s3.amazonaws.com/${props.Copyrighting.id}-pdf.pdf`
    );
    navigate("/Projects");
  };

  return (
    <div>
      <Button
        variant="outlined"
        fullWidth
        className="buttonBrochure"
        onClick={handleOpen}
      >
        Download Brochure
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          ENTER YOUR NUMBER & DOWNLOAD
          <form onSubmit={onSubmit}>
            <TextField
              className="textField"
              id="standard-basic"
              label="Name"
              name="from_name"
              value={toSend.from_name}
              onChange={handleChange}
              variant="standard"
              required
              margin="dense"
              fullWidth
            />
            <TextField
              className="textField"
              id="standard-basic"
              label="Phone Number"
              name="number"
              value={toSend.number}
              variant="standard"
              margin="dense"
              required
              onChange={handleChange}
              fullWidth
              oninvalid="this.setCustomValidity('Enter User Name Here')"
              inputProps={{ pattern: "01[0-9]{9}" }}
            />
            <TextField
              className="textField"
              id="standard-basic"
              label="Email"
              name="email"
              value={toSend.email}
              variant="standard"
              margin="dense"
              required
              onChange={handleChange}
              fullWidth
              oninvalid="this.setCustomValidity('Enter User Name Here')"
              type={"email"}
            />

            <Button type="submit" variant="outlined" className="buttonBrochure">
              Download{" "}
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
