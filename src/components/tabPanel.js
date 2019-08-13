import React from "react";
import Typography from '@material-ui/core/Typography';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ padding: "0 25px 25px 40px" }}
      {...other}
    >
      <div>{children}</div>
    </Typography>
  );
}

export default TabPanel;