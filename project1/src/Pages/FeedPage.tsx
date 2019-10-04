import React from "react";
// import Paper from "@material-ui/core/Paper";
import Banner from "../components/Layout/Banner";
import Grid from "@material-ui/core/Grid";
import Tags from "../components/Tags/Tags";
import Articles from "../components/Article/Articles";

const GridContainer = () => {
  const token = localStorage.getItem("userToken");
  return (
    <>
      {token ? null : <Banner />}

      <div>
        <Grid container style={{ marginTop: "4%" }}>
          <Grid item xs>
            <Articles />
          </Grid>
          <Grid item xs={3}>
            <Tags />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default GridContainer;
