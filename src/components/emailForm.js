import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import axios from 'axios';

class EmailForm extends Component {

  state = {
    name: "",
    email: "",
    message: "",
    open: false,
    snackbarMessage: "Message sent succesfully!"
  }

  onChangeValue = name => event => {
    this.setState({ ...this.state, [name]: event.target.value });
  }

  onSubmit = e => {
    e.preventDefault();

    const { name, email, message } = this.state;

    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    // Call api to send out email
    axios.post("http://ec2-34-215-168-75.us-west-2.compute.amazonaws.com/sendEmail", {
      name,
      email,
      message
    }, config)
      .then( () => {
        this.setState({ name: "", email: "", message: "", open: true, snackbarMessage: "Message sent succesfully!" });
      })
      .catch( err => {
        this.setState({ open: true, snackbarMessage: "Oops! Something went wrong - please try again." })
      });
  }

  handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  }

  render() {
    const { name, email, message, open, snackbarMessage } = this.state;
    const { onChangeValue, onSubmit, handleSnackbarClose } = this;

    return (
      <form onSubmit={onSubmit}>
        <Snackbar
          anchorOrigin={
            { vertical: "bottom", horizontal: "center" }
          }
          open={open}
          autoHideDuration={2000}
          onClose={handleSnackbarClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{ snackbarMessage }</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
                
              onClick={handleSnackbarClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
        <Grid container>
          <Grid
            item
            lg={6} md={6} sm={12} xs={12}
            style={{ textAlign: "center", padding: "5px" }}
          >
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={onChangeValue('name')}
              style={{ width: "100%" }}
              required
            />
          </Grid>
          <Grid
            item
            lg={6} md={6} sm={12} xs={12}
            style={{ textAlign: "center", padding: "5px" }}
          >
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={onChangeValue('email')}
              style={{ width: "100%" }}
              required
            />
          </Grid>
          <Grid
            item
            lg={12} md={12} sm={12} xs={12}
            style={{ textAlign: "center", marginTop: "10px", padding: "5px" }}
          >
            <TextField
              style={{ width: "100%" }}
              label="Message"
              multiline
              rows="6"
              value={message}
              onChange={onChangeValue('message')}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} style={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ width: "150px", marginTop: "25px" }}
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    )
  }
}

export default EmailForm