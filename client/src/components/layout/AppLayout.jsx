import React from "react";
import Header from "./Header";
import { Title } from "@mui/icons-material";
import { Grid } from "@mui/material";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid item xs={4} height={"100%"}></Grid>
          <Grid item xs={4} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid item xs={4} height={"100%"}></Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
