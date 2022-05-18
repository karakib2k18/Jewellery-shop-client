import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();
  return (
    <Container sx={{ border: 0, mt: 4 }}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12}>
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
            src={user?.photoURL}
            alt="FOUNDING..."
          >
          
          </Box>
        )}
        {!user.photoURL && (
        <Typography gutterBottom variant="h4" component="div">
       USER IMAGE NOT FOUND
      </Typography>
        )}

        <Typography gutterBottom variant="h4" component="div">
          hey! {user.displayName}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          {user.email}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          WELCOME TO DASHBOARD
        </Typography>
      </Grid>
    </Grid>
  </Container>

  );
};

export default DashboardHome;