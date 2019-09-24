import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Banner from "./Banner";
import Grid from "@material-ui/core/Grid";
import Tags from "./Tags";
import Articles from "./Articles";

const GridContainer = () => {
  return (
    <>
      {localStorage.getItem("userToken") ? (
        <div style={{ height: 100 }}></div>
      ) : (
        <Banner></Banner>
      )}

      <div>
        <Grid container>
          <Grid item xs>
            <Articles></Articles>
          </Grid>
          <Grid item xs={3}>
            <Tags></Tags>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default GridContainer;
