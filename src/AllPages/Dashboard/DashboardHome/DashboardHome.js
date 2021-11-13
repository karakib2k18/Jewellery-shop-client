import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();
  return (
    <Container sx={{ border: 0, mt: 4 }} maxWidth="lg">
    <Grid container spacing={2}>
      <Grid item xs={12} sm={2}></Grid>
      <Grid item xs={12} sm={8}>
      {user.photoURL && (
          <Box
            component="img"
            sx={{
              height: 170,
              display: "block",
              maxWidth: 170,
              overflow: "hidden",
              width: "100%",
              mx: "auto",
              borderRadius: "50%",
              mb: 4,
            }}
            src={``}
            alt="FOUNDING..."
          ></Box>
        )}
        {!user.photoURL && (
        <Typography gutterBottom variant="h4" component="div">
       USER IMAGE NOT FOUND
      </Typography>
        )}

        <Typography gutterBottom variant="h2" component="div">
          hey! {user.displayName}
        </Typography>
        <Typography gutterBottom variant="h2" component="div">
          {user.email}
        </Typography>
        <Typography gutterBottom variant="h2" component="div">
          WELCOME TO DASHBOARD
        </Typography>
      </Grid>
      <Grid item xs={12} sm={2}></Grid>
    </Grid>
  </Container>

  );
};

export default DashboardHome;
