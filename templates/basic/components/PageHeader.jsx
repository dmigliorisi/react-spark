import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";

const PageHeader = () => {
  return (
    <React.Fragment>
      <Toolbar>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
        >
          Post
        </Typography>
      </Toolbar>
    </React.Fragment>
  )
};

export default PageHeader;
