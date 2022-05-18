




// //  THIS IS NOT FOR ALL ORDER
// //  THIS IS FOR MANAGE ALL PRODUCTS



// // ALLORDERS ER JAYGAY ALL PRODUCTS HOBE








// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import FormControl from "@mui/material/FormControl";
// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import { useForm } from "react-hook-form";
// import swal from "sweetalert";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import Paper from "@mui/material/Paper";
// import Draggable from "react-draggable";
// import { CircularProgress } from "@mui/material";
// // import { CircularProgress } from "@mui/material";

// function PaperComponent(props) {
//   return (
//     <Draggable
//       handle="#draggable-dialog-title"
//       cancel={'[class*="MuiDialogContent-root"]'}
//     >
//       <Paper {...props} />
//     </Draggable>
//   );
// }

// export default function OrdersEdit(props) {
//   const [open, setOpen] = React.useState(false);

//   const {isLoading, allOrder, setIsLoading } = props;
//   const { register, handleSubmit, reset } = useForm();

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const [orderUpdate, setOrderUpdate] = React.useState({});

//   const handleEditButton = (id) => {
//     fetch(`https://tranquil-anchorage-09740.herokuapp.com/shop/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setOrderUpdate(data);
//       });
//   };

//   const onSubmit = (data) => {
//     console.log(data);
//     // data._id = orderUpdate._id;
//     let updateStatus = { ...orderUpdate };
//     updateStatus.name = data.name;
//     updateStatus.description = data.description;
//     updateStatus.image = data.image;
//     updateStatus.price = data.price;

//     setOrderUpdate(updateStatus);
//     console.log(data);

//     setIsLoading(true);
//     const url = `https://tranquil-anchorage-09740.herokuapp.com/shop/${data._id}`;
//     fetch(url, {
//       method: "PUT",
//       headers: {
//         "content-type": "application/json",
//         // 'Access-Control-Allow-Origin': '*',
//       },
//       body: JSON.stringify(updateStatus),
//     })
//       .then((res) => res.json())
//       .then((datan) => {
//         if (datan.modifiedCount > 0) {
//           swal("Change successfully!!", "done", "success", {
//             button: false,
//             timer: 1300,
//           });
//           reset();
//           setOrderUpdate({});
//           setIsLoading(false);
//           handleClose();
//         }
//       });
//   };

//   // const [pdname, setpdname] = React.useState("");
//   // const handleChangepdname = (event) => {
//   //   setpdname(event.target.value);
//   // };

//   // const [phone, setphone] = React.useState("");
//   // const handleChangephone = (event) => {
//   //   setphone(event.target.value);
//   // };
//   // const [address, setaddress] = React.useState("");
//   // const handleChangeaddress = (event) => {
//   //   setaddress(event.target.value);
//   // };
//   // const [email, setemail] = React.useState("");
//   // const handleChangeemail = (event) => {
//   //   setemail(event.target.value);
//   // };
//   // const [status, setstatus] = React.useState("");
//   // const handleChangestatus = (event) => {
//   //   setstatus(event.target.value);
//   // };
//   // const [value, setValue] = React.useState(null);
//   return (
//     <div>
//       <Button
//         onClick={() => {
//           handleClickOpen();
//           handleEditButton(allOrder?._id);
//         }}
//         type="submit"
//         variant="outlined"
//         //  onClick={handleClickOpen}
//       >
//         Edit
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         PaperComponent={PaperComponent}
//         aria-labelledby="draggable-dialog-title"
//       >
//         <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
//           Edit Student Details
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={12}>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                   <FormControl fullWidth>
//                     <Grid container spacing={2}>

//                       {/*NAME */}
//                       <Grid classfullname="displayfle" item xs={12}>
//                         <Grid item xs={3} sm={3}>
//                          Fullname
//                         </Grid>
//                         <Grid item xs={9} sm={9}>
//                           <TextField
//                             margin="normal"
//                             {...register("fullname", { required: true })}
//                             fullWidth
//                             fullname="fullname"
//                             label="fullname"
//                             type="text"
//                             id="fullname"
//                             defaultValue={allOrder?.fullname}
//                           />
//                         </Grid>
//                       </Grid>

//                       {/*description */}
//                       <Grid classfullname="displayfle" item xs={12}>
//                         <Grid item xs={3} sm={3}>
//                          Fullname
//                         </Grid>
//                         <Grid item xs={9} sm={9}>
//                           <TextField
//                             margin="normal"
//                             {...register("description", { required: true })}
//                             fullWidth
//                             fullname="description"
//                             multiline
//                             label="description"
//                             type="text"
//                             id="description"
//                             defaultValue={allOrder?.description}
//                           />
//                         </Grid>
//                       </Grid>

//                       {/*email */}
//                       {/* <Grid classfullname="displayfle" item xs={12}>
//                         <Grid item xs={3} sm={3}>
//                         email
//                         </Grid>
//                         <Grid item xs={9} sm={9}>
//                           <TextField
//                             margin="normal"
//                             {...register("email", { required: true })}
//                             fullWidth
//                             fullname="email"
//                             label="email"
//                             type="text"
//                             id="email"
//                             defaultValue={allOrder?.email}
//                           />
//                         </Grid>
//                       </Grid> */}

//                       {/*phone */}
//                       {/* <Grid classfullname="displayfle" item xs={12}>
//                         <Grid item xs={3} sm={3}>
//                         phone
//                         </Grid>
//                         <Grid item xs={9} sm={9}>
//                           <TextField
//                             margin="normal"
//                             {...register("phone", { required: true })}
//                             fullWidth
//                             fullname="phone"
//                             label="phone"
//                             type="text"
//                             id="phone"
//                             defaultValue={allOrder?.phone}
//                           />
//                         </Grid>
//                       </Grid> */}

//                       {/*address */}
//                       {/* <Grid classfullname="displayfle" item xs={12}>
//                         <Grid item xs={3} sm={3}>
//                         address
//                         </Grid>
//                         <Grid item xs={9} sm={9}>
//                           <TextField
//                             margin="normal"
//                             {...register("address", { required: true })}
//                             fullWidth
//                             fullname="address"
//                             label="address"
//                             type="text"
//                             id="address"
//                             defaultValue={allOrder?.address}
//                           />
//                         </Grid>
//                       </Grid> */}

//                       {/*pdname */}
//                       {/* <Grid classfullname="displayfle" item xs={12}>
//                         <Grid item xs={3} sm={3}>
//                         pdname
//                         </Grid>
//                         <Grid item xs={9} sm={9}>
//                           <TextField
//                             margin="normal"
//                             {...register("pdname", { required: true })}
//                             fullWidth
//                             fullname="pdname"
//                             label="pdname"
//                             type="text"
//                             id="pdname"
//                             defaultValue={allOrder?.pdname}
//                           />
//                         </Grid>
//                       </Grid> */}

//                       {/*pdprice */}
//                       <Grid classfullname="displayfle" item xs={12}>
//                         <Grid item xs={3} sm={3}>
//                         pdprice
//                         </Grid>
//                         <Grid item xs={9} sm={9}>
//                           <TextField
//                             margin="normal"
//                             {...register("pdprice", { required: true })}
//                             fullWidth
//                             fullname="pdprice"
//                             label="pdprice"
//                             type="text"
//                             id="pdprice"
//                             defaultValue={allOrder?.price}
//                           />
//                         </Grid>
//                       </Grid>




//                       {/* STATUS */}
//                       {/* <Grid classfullname="displayfle" item xs={12}>
//                         <Grid item xs={3} sm={3}>
//                           Status
//                         </Grid>
//                         <Grid item xs={9} sm={9}>
//                           <Box sx={{ minWidth: 120 }}>
//                             <FormControl fullWidth>
//                               <InputLabel id="demo-simple-select-label">
//                                 {allOrder?.status}
//                               </InputLabel>
//                               <Select
//                                 {...register("status", { required: true })}
//                                 labelId="status"
//                                 id="status"
//                                 label="status"
//                                 // value={status}
//                                 // onChange={handleChangestatus}
//                                 defaultValue={allOrder?.status}
//                                 required
                                
//                               >
                                 
//                                  <MenuItem value="Deliverd">Deliverd</MenuItem>
//                   <MenuItem value="Shipping">Shipping</MenuItem>
//                   <MenuItem value="Rejected">Rejected</MenuItem>
//                               </Select>
//                             </FormControl>
//                           </Box>
//                         </Grid>
//                       </Grid> */}

//                             {isLoading && <CircularProgress />}
//                       <Grid classfullname="displayfle" item xs={12}>
//                         <Grid item xs={3} sm={3}></Grid>
//                         <Grid item xs={9} sm={9}>
//                           <Box sx={{ minWidth: 120 }}>
//                             <Button
//                               type="submit"
//                               variant="contained"
//                               sx={{
//                                 minWidth: 120,
//                                 mt: 1,
//                                 mb: 1,
//                                 fontWeight: "bold",
//                               }}
//                               style={{
//                                 backgroundColor: "#750606",
//                                 color: "white",
//                               }}
//                             >
//                               Update
//                             </Button>
                            
//                           </Box>
//                         </Grid>
//                       </Grid>
//                     </Grid>
//                   </FormControl>
//                 </form>
//               </Grid>
//               {/* <Grid item xs={12} sm={3}></Grid> */}
//             </Grid>
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button autoFocus onClick={handleClose}>
//             Cancel
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
