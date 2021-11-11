import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { CircularProgress, Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import SingleShopCard from "./SingleShopCard";

const SingleShop = () => {
  const { user } = useAuth();
  const { pdId } = useParams();
  const [singleshopslist, setSingleShopslist] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("/shop.json")
      .then((response) => response.json())
      .then((data) => {
        // setSingleShopslist(data);
        // eslint-disable-next-line eqeqeq
        const singleshopslistId = data.find((fd) => fd._id == pdId);
        setSingleShopslist(singleshopslistId);
        setIsLoading(false);
      });
  }, [pdId]);

  console.log(singleshopslist);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const { name, price } = singleshopslist;
  return (
    <Container sx={{ border: 0, mt: 4 }} maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom variant="h5" component="div">
            <SingleShopCard shop={singleshopslist}></SingleShopCard>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  {...register("fullname", { required: true })}
                  fullWidth
                  name="fullname"
                  label="Full Name"
                  defaultValue={user.displayName}
                  type="text"
                  id="fullname"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("email", { required: true })}
                  margin="normal"
                  fullWidth
                  id="email"
                  defaultValue={user.email}
                  label="Email Address"
                  name="email"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                {name && (
                  <TextField
                    margin="normal"
                    {...register("pdname", { required: true })}
                    fullWidth
                    name="pdname"
                    label="Product Name"
                    defaultValue={name}
                    type="text"
                    id="pdname"
                    required
                  />
                )}
              </Grid>
              <Grid item xs={12}>
                {price && (
                  <TextField
                    margin="normal"
                    {...register("pdprice", { required: true })}
                    fullWidth
                    name="pdprice"
                    label="Price"
                    defaultValue={price}
                    type="number"
                    id="pdprice"
                    required
                  />
                )}
              </Grid>
            </Grid>
            {isLoading && <CircularProgress />}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1, fontWeight: "bold" }}
            >
              Place Order
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleShop;
