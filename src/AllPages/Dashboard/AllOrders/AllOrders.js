import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CircularProgress, Grid, Typography } from "@mui/material";

import AllOrdersTable from "./AllOrdersTable";
import { Box } from "@mui/system";
// import SearchOrders from "./SearchOrders";

const AllOrders = () => {
  const [allOrdersList, setAllOrdersList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://tranquil-anchorage-09740.herokuapp.com/orders")
      .then((response) => response.json())
      .then((json) => {
        setAllOrdersList(json);
        setIsLoading(false);
      });
  }, [isLoading]);

  return (
    <Box style={{ backgroundColor: "#eaeef2"}}>
      <Typography  sx={{py:2}} gutterBottom variant="h5"  component="div">
       All Orders
      </Typography>
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm={12} sx={{pb:5, fontWeight: "bold"}}>
          <TableContainer component={Paper}>
            <Table size="large" aria-label="a dense table">
              {isLoading && <CircularProgress />}
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: 22 }}>Name</TableCell>
                  <TableCell sx={{ fontSize: 22 }} align="center">
                    Email
                  </TableCell>
                  <TableCell sx={{ fontSize: 22 }} align="center">
                  Phone
                  </TableCell>
                  <TableCell sx={{ fontSize: 22 }} align="center">
                  Address
                  </TableCell>
                  <TableCell sx={{ fontSize: 22 }} align="center">
                    Title
                  </TableCell>
                  <TableCell sx={{ fontSize: 22 }} align="right">
                    Price
                  </TableCell>
                  <TableCell sx={{ fontSize: 22 }} align="center">
                    Status
                  </TableCell>
                  <TableCell sx={{ fontSize: 22 }} align="center">
                    --
                  </TableCell>
                  <TableCell sx={{ fontSize: 22 }} align="center">
                    --
                  </TableCell>
                  {/* <TableCell sx={{ fontSize: 22 }} align="right"></TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {allOrdersList?.map((allOrder) => (
                  <AllOrdersTable
                  setAllOrdersList={setAllOrdersList}
                    allOrdersList={allOrdersList}
                    allOrder={allOrder}
                    key={allOrder._id}
                    setIsLoading={setIsLoading}
                    isLoading={isLoading}
                  ></AllOrdersTable>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default AllOrders;



///////////////////newwwwwwwwwwwwwwwwwwwwwwwwwwww///////////////////

// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Button, CircularProgress, Grid, Typography } from "@mui/material";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
// import DownloadIcon from "@mui/icons-material/Download";

// import AllOrdersTable from "./AllOrdersTable";
// import { Box } from "@mui/system";
// import SearchOrders from "./SearchOrders";

// const AllOrders = () => {
//   const [allOrdersList, setAllOrdersList] = React.useState([]);
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [currentPage, setCurrentPage] =  React.useState(0);

//   const [ordersCount, setOrdersCount] = React.useState(0);
//   // const handlePagination = (num) => {
//   //   setCurrentPage(num);
//   // };
//   const perPageItem = 5;

//   React.useEffect(() => {
//     fetch(`https://tranquil-anchorage-09740.herokuapp.com/orders?currentPage=${currentPage}&&perPageItem=${perPageItem}`)
//     // fetch(`https://tranquil-anchorage-09740.herokuapp.com/orders?currentPage=${currentPage}&&perPageItem=${perPageItem}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllOrdersList(data);
//         setOrdersCount(Math.ceil(data.length / perPageItem));
//         setIsLoading(false);
//         console.log(data.length);
//       });
//   }, [isLoading, currentPage]);
//   const tableheader = [
//     { name: "ID'V" },
//     { name: "Name" },
//     { name: "Email" },
//     { name: "Phone" },
//     { name: "Address" },
//     { name: "Title" },
//     { name: "Price" },
//     { name: "Status" },
//   ];

//   return (
//     <Box>
//       <Typography sx={{ mb: 3 }} style={{color: 'red' }} gutterBottom variant="h5" component="div">
//         {/* View Student {currentPage} {perPageItem} */}
//         View All Orders
//       </Typography>

//       <SearchOrders></SearchOrders>
      
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={1}></Grid>
//         <Grid item xs={12} sm={12}>
//           <TableContainer component={Paper}>
//             <Table size="large" aria-label="a dense table">
//               {isLoading && <CircularProgress />}
//               <TableHead sx={{ mb: -5 }} className="theaddesign">
//                 <TableRow>
//                   {tableheader.map((nav, index) => (
//                     <TableCell
//                       align="center"
//                       sx={{ fontSize: 22, color: "white" }}
//                     >
//                       {nav.name}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {allOrdersList?.map((allOrder,index) => (
//                   <AllOrdersTable
//                   setAllOrdersList={setAllOrdersList}
//                     allOrdersList={allOrdersList}
//                     allOrder={allOrder}
//                     key={allOrder._id}
//                     setIsLoading={setIsLoading}
//                     isLoading={isLoading}
//                     index={index+(currentPage*perPageItem)}
//                   ></AllOrdersTable>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Grid>
//         <Grid item xs={12} sm={1}></Grid>
//       </Grid>

//       <Grid container spacing={2}>
//         <Grid item xs={6} md={6} sm={6}>
//           <Button
//             type="submit"
//             variant="contained"
//             sx={{ minWidth: 120, mt: 1, mb: 1, fontWeight: "bold" }}
//             style={{ backgroundColor: "#750606", color: "white" }}
//           >
//             Download Excel <DownloadIcon></DownloadIcon> It's not working now
//           </Button>
//         </Grid>
//         <Grid item xs={6} md={6} sm={6} style={{ display: "flex", justifyContent:"right"}}>
//           <Stack spacing={2}>
//             <Pagination
//               count={ordersCount}
//               color="secondary"
//               variant="outlined"
//               shape="rounded"
//               onChange={(e, value) => setCurrentPage(value-1)}
//             />
//           </Stack>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default AllOrders;