import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddNewAdmin = () => {
  const { register, handleSubmit, reset } = useForm();

  //send data to the server
  const onSubmit = (data) => {
    console.log(data);
    swal({
      title: "Do you want to add a Admin?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch("http://localhost:5000/users/admin", {
          method: "PUT", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.modifiedCount) {
                console.log(data);
              swal("You have Added a Admin", "Well Done!", {
                icon: "success",
                timer: 1300,
              });
              reset();
              //   history.push("/home");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    });
  };

  return (
    <Container sx={{ border: 0, mt: 4 }} maxWidth="lg">
      <Typography gutterBottom variant="h5" component="div">
        ADD A NEW ADMIN
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>

              <Grid item xs={12}>

                  <TextField
                    {...register("email", { required: true })}
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                  />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1, fontWeight: "bold" }}
            >
              ADD NEW ADMIN
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} sm={3}></Grid>
      </Grid>
    </Container>
  );
};

export default AddNewAdmin;
