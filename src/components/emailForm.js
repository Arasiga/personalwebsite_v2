import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

class EmailForm extends Component {
  
  render() {
    return (
      <Grid container>
        <Grid
          item
          lg={6} md={6} sm={12} xs={12}
          style={{ textAlign: "center", padding: "5px" }}
        >
          <TextField
            label="Name"
            variant="outlined"
            style={{ width: "100%" }}
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
            style={{ width: "100%" }}
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
            variant="outlined"
          />
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "150px", marginTop: "25px" }}
            // onClick={sendEmail}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    )
  }
}

export default EmailForm