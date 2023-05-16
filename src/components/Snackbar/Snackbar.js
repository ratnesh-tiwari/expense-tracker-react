import React from "react";
import { Snackbar as Snack } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import useStyles from "./style";

const Snackbar = ({ open, setOpen }) => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snack
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Transaction successfully created.
        </MuiAlert>
      </Snack>
    </div>
  );
};

export default Snackbar;
