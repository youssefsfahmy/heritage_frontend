import * as React from "react";
import Fab from "@mui/material/Fab";
import ChatIcon from "@mui/icons-material/Chat";
import "../../CSS/General/FloatingActionButton.css";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";

export default function FloatingActionButton() {
  const navigate = useNavigate();

  return (
    <Tooltip placement="left" title="Contact Us!">
      <Fab
        className="floatingButton"
        color="primary"
        aria-label="add"
        onClick={() => {
          navigate("/Contact");
        }}
      >
        <ChatIcon className="chatIcon" />
      </Fab>
    </Tooltip>
  );
}
