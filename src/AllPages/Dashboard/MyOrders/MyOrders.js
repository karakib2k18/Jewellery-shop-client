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
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
    const {user} = useAuth();
  const [myOrdersList, setMyOrdersList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch(`http://localhost:5000/myorders/${user.email}`)
      .then((response) => response.json())
      .then((json) => {
        setMyOrdersList(json);
        setIsLoading(false);
      });
  }, [user.email]);

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
              const remaining = myOrdersList.filter(
                (booking) => booking._id !== id
              );
              setMyOrdersList(remaining);
              swal("You have Successfully Delete Orders!", "Well Done!", {
                icon: "success",
                timer: 1200,
              });
            }
          });
      }
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={1}></Grid>
      <Grid item xs={12} sm={10}>
        <TableContainer component={Paper}>
          <Table size="large" aria-label="a dense table">
            {isLoading && <CircularProgress />}
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: 20 }}>Name</TableCell>
                <TableCell sx={{ fontSize: 20 }} align="right">
                  Title
                </TableCell>
                <TableCell sx={{ fontSize: 20 }} align="right">
                  Status
                </TableCell>
                <TableCell sx={{ fontSize: 20 }} align="right">
                  Price
                </TableCell>
                <TableCell sx={{ fontSize: 20 }} align="right">
                  role
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myOrdersList?.map((allOrder) => (
                <TableRow
                  key={allOrder?.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {allOrder?.fullname}
                  </TableCell>
                  <TableCell align="right">{allOrder?.email}</TableCell>
                  <TableCell align="right">{allOrder?.pdname}</TableCell>
                  <TableCell align="right">{allOrder?.pdprice}</TableCell>
                  <TableCell align="right">
                    <Button
                      type="submit"
                      id="customize-delete-id-byme"
                      variant="contained"
                      sx={{ mt: 1, mb: 1, fontWeight: "bold" }}
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

export default MyOrders;
