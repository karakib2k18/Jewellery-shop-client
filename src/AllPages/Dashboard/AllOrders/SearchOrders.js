// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import FormControl from "@mui/material/FormControl";
// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import { CircularProgress, Container } from "@mui/material";
// import { useForm } from "react-hook-form";
// // import useAuth from "../../../hooks/useAuth";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import AllOrdersTable from "./AllOrdersTable";

// const SearchOrders = () => {
//   const { register, handleSubmit } = useForm();
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [allOrdersList, setAllOrdersList] = React.useState();

//   //send data to the server
//   const onSubmit = (data) => {
//     // console.log(data);
//     setIsLoading(true);

//     fetch("https://rakib-jewellers.onrender.com/orders/")
//       .then((res) => res.json())
//       .then((founddatas) => {
//         console.log(founddatas);
//         const searchdatas = founddatas;
//         const statusUpdate = searchdatas.filter(
//           (searchdata) =>
//             searchdata.fullname[0] === data.fullname[0] ||
//             searchdata.email === data.email ||
//             searchdata.phone === data.phone ||
//             searchdata.address[0] === data.address[0] ||
//             searchdata.pdname === data.pdname ||
//             searchdata.pdprice === data.pdprice ||
//             searchdata.status === data.status
//         );
//         setAllOrdersList(statusUpdate);
//         setIsLoading(false);
//       });
//   };

//   console.log(allOrdersList);

//   const [status, setStatus] = React.useState("");
//   const handleChangestatus = (event) => {
//     setStatus(event.target.value);
//   };

//   return (
//     <Box>
//       <Container maxWidth="xl">
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={12} sm={12}>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <Grid>
//                 <Grid className="displayfle" item sm={12} xs={12}>
//                   {/* NAME */}
//                   <Grid item xs={2} md={2} sm={2}>
//                     <Box sx={{ minWidth: 160 }}>
//                       <TextField
//                         {...register("name")}
//                         fullWidth
//                         name="name"
//                         margin="normal"
//                         label="Name"
//                         type="text"
//                         id="name"
//                       />
//                     </Box>
//                   </Grid>
//                   <Grid item xs={1} sm={1}></Grid>


//                   {/* email */}
//                   <Grid item xs={2} md={2} sm={2}>
//                     <Box sx={{ minWidth: 160 }}>
//                       <TextField
//                         {...register("email")}
//                         margin="normal"
//                         fullWidth
//                         id="email"
//                         label="Email"
//                         name="email"
                        
//                       />
//                     </Box>
//                   </Grid>
//                   <Grid item xs={1} sm={1}></Grid>

//                   {/* phone */}
//                   <Grid item xs={2} md={2} sm={2}>
//                     <Box sx={{ minWidth: 160 }}>
//                       <TextField
//                         margin="normal"
//                         {...register("phone")}
//                         fullWidth
//                         name="phone"
//                         label="phone"
//                         type="number"
//                         id="phone"
                        
//                       />
//                     </Box>
//                   </Grid>
//                   <Grid item xs={1} sm={1}></Grid>

//                   {/* address */}
//                   <Grid item xs={2} md={2} sm={2}>
//                     <Box sx={{ minWidth: 160 }}>
//                       <TextField
//                         {...register("address")}
//                         id="address"
//                         label="address"
//                         // multiline
//                         margin="normal"
//                         name="address"
//                         // rows={4}
//                         fullWidth
//                         type="text"
//                       />
//                     </Box>
//                   </Grid>
//                   <Grid item xs={1} sm={1}></Grid>

//                   {/* pdname */}
//                   <Grid item xs={2} md={2} sm={2}>
//                     <Box sx={{ minWidth: 160 }}>
//                       <TextField
//                         margin="normal"
//                         {...register("pdname")}
//                         fullWidth
//                         name="pdname"
//                         label="Product Name"
//                         type="text"
//                         id="pdname"
                        
//                       />
//                     </Box>
//                   </Grid>
//                   <Grid item xs={1} sm={1}></Grid>

//                   {/* pdprice */}
//                   <Grid item xs={2} md={2} sm={2}>
//                     <Box sx={{ minWidth: 160 }}>
//                       <TextField
//                         margin="normal"
//                         {...register("pdprice")}
//                         fullWidth
//                         name="pdprice"
//                         label="Price"
//                         type="number"
//                         id="pdprice"
                        
//                       />
//                     </Box>
//                   </Grid>
//                   <Grid item xs={1} sm={1}></Grid>

//                   {/* STATUS */}
//                   <Grid item xs={2} sm={2}>
//                     <Box sx={{ minWidth: 160 }}>
//                       <FormControl fullWidth>
//                         <InputLabel id="demo-simple-select-label">
//                           Division
//                         </InputLabel>
//                         <Select
//                           {...register("status")}
//                           labelId="status"
//                           id="status"
//                           label="status"
//                           value={status}
//                           onChange={handleChangestatus}
//                         >
//                           <MenuItem value="none">None</MenuItem>
//                           <MenuItem value="Deliverd">Deliverd</MenuItem>
//                           <MenuItem value="Shipping">Shipping</MenuItem>
//                           <MenuItem value="Rejected">Rejected</MenuItem>
//                         </Select>
//                       </FormControl>
//                     </Box>
//                   </Grid>
//                   <Grid item xs={1} sm={1}></Grid>

//                   <Grid item xs={2} sm={2}>
//                     <Box sx={{ minWidth: 160 }}>
//                       <Button
//                         type="submit"
//                         variant="contained"
//                         sx={{ minWidth: 160, mt: 2, mb: 2, fontWeight: "bold" }}
//                         style={{ backgroundColor: "#750606", color: "white" }}
//                       >
//                         Search
//                       </Button>
//                     </Box>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </form>
//           </Grid>
//         </Grid>
//         {isLoading && <CircularProgress />}
//         {!isLoading && (
//           <Box sx={{ my: 1, boxShadow: 3 }}>
//                             {allOrdersList?.map((allOrder,index) => (
//                   <AllOrdersTable
//                   setAllOrdersList={setAllOrdersList}
//                     allOrdersList={allOrdersList}
//                     allOrder={allOrder}
//                     key={allOrder._id}
//                     setIsLoading={setIsLoading}
//                     isLoading={isLoading}
//                   ></AllOrdersTable>
//                 ))}

//           </Box>
//         )}
//       </Container>
//     </Box>
//   );
// };

// export default SearchOrders;
