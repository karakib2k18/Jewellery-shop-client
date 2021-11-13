import * as React from "react";
import Box from "@mui/material/Box";
import { CircularProgress, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ManageAllProductsCard from "./ManageAllProductsCard";


const ManageAllProducts = () => {
  const [shopslist, setShopslist] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("http://localhost:5000/shop")
      .then((response) => response.json())
      .then((json) => {
        setShopslist(json);
        setIsLoading(false);
      });
  }, []);
  return (
<Box>
<Container sx={{ border: 0 }} maxWidth="lg">
      <Typography variant="h4" gutterBottom component="div" sx={{ my: 2 }}>
        Manage All Products
      </Typography>
      {isLoading && <CircularProgress />}
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {shopslist.map((shop, index) => (
            <ManageAllProductsCard setShopslist={setShopslist} shopslist={shopslist}  shop={shop} key={shop?._id}></ManageAllProductsCard>
          ))}
        </Grid>
      </Box>
    </Container>
</Box>
  );
};

export default ManageAllProducts;
