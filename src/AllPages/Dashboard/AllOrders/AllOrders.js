import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, CircularProgress, Grid } from "@mui/material";
import swal from "sweetalert";

const AllOrders = () => {
  const [allOrdersList, setAllOrdersList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((response) => response.json())
      .then((json) => {
        setAllOrdersList(json);
        setIsLoading(false);
      });
  }, []);

  const handleDeleteButton = (id) => {
    console.log(id);
    swal({
      title: "Do you want delete?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/orders/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaining = allOrdersList.filter(
                (booking) => booking._id !== id
              );
              setAllOrdersList(remaining);
              swal("You have Successfully Delete Orders!", "Well Done!", {
                icon: "success",
                timer: 1220,
              });
            }
          });
      }
    });
  };
  const handleEditButton = (id) => {};

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={1}></Grid>
      <Grid item xs={12} sm={10}>
        <TableContainer component={Paper}>
          <Table size="large" aria-label="a dense table">
            {isLoading && <CircularProgress />}
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: 22 }}>Name</TableCell>
                <TableCell sx={{ fontSize: 22 }} align="center">
                  Email
                </TableCell>
                <TableCell sx={{ fontSize: 22 }} align="right">
                  Title
                </TableCell>
                <TableCell sx={{ fontSize: 22 }} align="right">
                  Price
                </TableCell>
                <TableCell sx={{ fontSize: 22 }} align="right">
                  Status
                </TableCell>
                <TableCell sx={{ fontSize: 22 }} align="right">
                  
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allOrdersList?.map((allOrder) => (
                <TableRow
                  key={allOrder?.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {allOrder?.fullname}
                  </TableCell>
                  <TableCell sx={{ fontSize: 18 }} align="right">{allOrder?.email}</TableCell>
                  <TableCell sx={{ fontSize: 18 }} align="right">{allOrder?.pdname}</TableCell>
                  <TableCell sx={{ fontSize: 18 }} align="right">${allOrder?.pdprice}</TableCell>
                  <TableCell sx={{ fontSize: 18 }} align="right">{allOrder?.status}</TableCell>
                  <TableCell sx={{ fontSize: 18 }} align="right">

                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ m: 1, mb: 1, fontWeight: "bold" }}
                      onClick={() => handleEditButton(allOrder?._id)}
                    >Edit</Button>
                                        <Button
                      type="submit"
                      id="customize-delete-id-byme"
                      variant="contained"
                      sx={{ m: 1, mb: 1, fontWeight: "bold" }}
                      onClick={() => handleDeleteButton(allOrder?._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} sm={1}></Grid>
    </Grid>
  );
};

export default AllOrders;
