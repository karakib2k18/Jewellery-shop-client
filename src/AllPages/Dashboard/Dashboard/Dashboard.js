// import * as React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import DashboardHome from "../DashboardHome/DashboardHome";
// import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
// import { Button } from "@mui/material";
// import AllOrders from "../AllOrders/AllOrders";
// import MyOrders from "../MyOrders/MyOrders";
// import AddNewAdmin from "../AddNewAdmin/AddNewAdmin";
// import GiveReview from "../GiveReview/GiveReview";
// import PaymentDetails from "../PaymentDetails/PaymentDetails";
// import AddNewProducts from "../AddNewProducts/AddNewProducts";
// import useAuth from "../../../hooks/useAuth";
// import AdminRoute from "../../Shared/AdminRoute/AdminRoute";
// import ManageAllProducts from "../ManageAllProducts/ManageAllProducts";

// const drawerWidth = 210;

// function Dashboard(props) {
//   const { logout, admin } = useAuth();
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   let { path, url } = useRouteMatch();

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />

//       <List sx={{ p: 2 }}>
//         {/* singlelink */}
//         <Link style={{ textDecoration: "none" }} to="/home">
//           <Button
//             type="submit"
//             fullWidth
//             //variant="contained"
//             sx={{ mt: 1, mb: 1,  }}
//           >
//            GO BACK HOME
//           </Button>
//         </Link>

//         {/* singlelink */}
//         <Link style={{ textDecoration: "none" }} to={`${url}`}>
//           <Button
//             type="submit"
//             fullWidth
//             //variant="contained"
//             sx={{ mt: 1, mb: 1,  }}
//           >
//             Dashboard
//           </Button>
//         </Link>

//         {admin && (
//           <Box>

//         {/* singlelink */}
//         <Link style={{ textDecoration: "none" }} to={`${url}/myorders`}>
//           <Button
//             type="submit"
//             fullWidth
//             //variant="contained"
//             sx={{ mt: 1, mb: 1,  }}
//           >
//             My Orders
//           </Button>
//         </Link>

//         {/* singlelink */}
//         <Link style={{ textDecoration: "none" }} to={`${url}/givereview`}>
//           <Button
//             type="submit"
//             fullWidth
//             //variant="contained"
//             sx={{ mt: 1, mb: 1,  }}
//           >
//             Give Review
//           </Button>
//         </Link>

//           </Box>
//         )}

//         {admin && (
//           <Box>
//             {" "}
//             {/* singlelink */}
//             <Link
//               style={{ textDecoration: "none" }}
//               to={`${url}/addnewproduct`}
//             >
//               <Button
//                 type="submit"
//                 fullWidth
//                 //variant="contained"
//                 sx={{ mt: 1, mb: 1,  }}
//               >
//                 Add Products
//               </Button>
//             </Link>
//             <Link
//               style={{ textDecoration: "none" }}
//               to={`${url}/manageallproducts`}
//             >
//               <Button
//                 type="submit"
//                 fullWidth
//                 //variant="contained"
//                 sx={{ mt: 1, mb: 1,  }}
//               >
//                 Manage All Products
//               </Button>
//             </Link>
//             {/* singlelink */}
//             <Link style={{ textDecoration: "none" }} to={`${url}/allorders`}>
//               <Button
//                 type="submit"
//                 fullWidth
//                 //variant="contained"
//                 sx={{ mt: 1, mb: 1,  }}
//               >
//                 All Orders
//               </Button>
//             </Link>
//             {/* singlelink */}
//             <Link style={{ textDecoration: "none" }} to={`${url}/addnewadmin`}>
//               <Button
//                 type="submit"
//                 fullWidth
//                 //variant="contained"
//                 sx={{ mt: 1, mb: 1,  }}
//               >
//                 Add New Admin
//               </Button>
//             </Link>
//           </Box>
//         )}

//         {/* singlelink */}
//         {admin && (
//          <Link style={{ textDecoration: "none" }} to={`${url}/paymentdetails`}>
//          <Button
//            type="submit"
//            fullWidth
//            //variant="contained"
//            sx={{ mt: 1, mb: 1,  }}
//          >
//            Payment Now
//          </Button>
//        </Link>
//         )}

//         <Link style={{ textDecoration: "none" }} to="/">
//           <Button
//             onClick={logout}
//             fullWidth
//             //variant="contained"
//             sx={{ mt: 1, mb: 1,  }}
//           >
//             LogOut
//           </Button>
//         </Link>
//       </List>

//       {/* <List>
//         {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />

//         ))}
//       </List> */}
//       {/* all menus left side */}
//     </div>
//   );
//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div" sx={{ py: 2, m: 1 }}>
//             Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Box
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: "none", sm: "block" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//         }}
//       >
//         <Toolbar />
//         <Switch>
//           <Route exact path={path}>
//             <DashboardHome></DashboardHome>
//           </Route>
//           <AdminRoute path={`${path}/allorders`}>
//             <AllOrders />
//           </AdminRoute>
//           <Route path={`${path}/myorders`}>
//             <MyOrders />
//           </Route>
//           <AdminRoute path={`${path}/addnewproduct`}>
//             <AddNewProducts />
//           </AdminRoute>
//           <AdminRoute path={`${path}/manageallproducts`}>
//             <ManageAllProducts />
//           </AdminRoute>
//           <AdminRoute path={`${path}/addnewadmin`}>
//             <AddNewAdmin />
//           </AdminRoute>
//           <Route path={`${path}/givereview`}>
//             <GiveReview />
//           </Route>
//           <Route path={`${path}/paymentdetails`}>
//             <PaymentDetails />
//           </Route>
//         </Switch>
//       </Box>
//     </Box>
//   );
// }

// Dashboard.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default Dashboard;

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardHome from "../DashboardHome/DashboardHome";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import AllOrders from "../AllOrders/AllOrders";
import MyOrders from "../MyOrders/MyOrders";
import AddNewAdmin from "../AddNewAdmin/AddNewAdmin";
import GiveReview from "../GiveReview/GiveReview";
import PaymentDetails from "../PaymentDetails/PaymentDetails";
import AddNewProducts from "../AddNewProducts/AddNewProducts";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Shared/AdminRoute/AdminRoute";
import ManageAllProducts from "../ManageAllProducts/ManageAllProducts";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BorderOuterIcon from '@mui/icons-material/BorderOuter';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import HomeIcon from '@mui/icons-material/Home';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Dashboard(props: Props) {
  const { user, logout, admin } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box >
      {/* <Toolbar /> */}
      {/* <Divider /> */}
      <List sx={{ py: 2 }} style={{ width: 240 }}>
        {(user?.displayName || user?.email) && (
          <Box>
            {" "}
            {/* singlelink */}
            <Link  style={{ textDecoration: "none" }} to="/home">
              <Button
                type="submit"
                fullWidth
                // //variant="contained"
                sx={{mt: 1, mb: 1 , display: { xs: "block", sm: "none"} }} 
               
              >
                <HomeIcon className="iconcolor"></HomeIcon>
                <Box  sx={{px: 2   }}> GO BACK HOME</Box>
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={`${url}`}>
              <Button
                type="submit"
                fullWidth
                // //variant="contained"
                sx={{ mt: 1, mb: 1 }}
              >
                <AccountBoxIcon className="iconcolor"></AccountBoxIcon>
                <Box sx={{ px: 2 }}>Profile</Box>
              </Button>
            </Link>
            {!admin && (
              <Box>
                <Link style={{ textDecoration: "none" }} to={`${url}/myorders`}>
                  <Button
                    type="submit"
                    fullWidth
                    // //variant="contained"
                    sx={{ mt: 1, mb: 1 }}
                  >
                    <ProductionQuantityLimitsIcon className="iconcolor"></ProductionQuantityLimitsIcon>
                    <Box sx={{ px: 2 }}> My Orders</Box>
                  </Button>
                </Link>
                {/* singlelink */}
                <Link
                  style={{ textDecoration: "none" }}
                  to={`${url}/givereview`}
                >
                  <Button
                    type="submit"
                    fullWidth
                    // //variant="contained"
                    sx={{ mt: 1, mb: 1 }}
                  >
                    <StarBorderIcon className="iconcolor"></StarBorderIcon>
                    <Box sx={{ px: 2 }}> Give Review</Box>
                  </Button>
                </Link>
              </Box>
            )}
            {admin && (
              <Box>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`${url}/addnewproduct`}
                >
                  <Button
                    type="submit"
                    fullWidth
                    // //variant="contained"
                    sx={{ mt: 1, mb: 1 }}
                  >
                    <AddBusinessIcon className="iconcolor"></AddBusinessIcon>
                    <Box sx={{ px: 2 }}> Add Products</Box>
                  </Button>
                </Link>
                {/* singlelink */}
                <Link
                  style={{ textDecoration: "none" }}
                  to={`${url}/manageallproducts`}
                >
                  <Button
                    type="submit"
                    fullWidth
                    // //variant="contained"
                    sx={{ mt: 1, mb: 1 }}
                  >
                    <ManageAccountsIcon className="iconcolor"></ManageAccountsIcon>
                    <Box sx={{ px: 2 }}> Manage Products</Box>
                  </Button>
                </Link>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`${url}/allorders`}
                >
                  <Button
                    type="submit"
                    fullWidth
                    // //variant="contained"
                    sx={{ mt: 1, mb: 1 }}
                  >
                    <BorderOuterIcon className="iconcolor"></BorderOuterIcon>
                    <Box sx={{ px: 2 }}> All Orders</Box>
                  </Button>
                </Link>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`${url}/addnewadmin`}
                >
                  <Button
                    type="submit"
                    fullWidth
                    // //variant="contained"
                    sx={{ mt: 1, mb: 1 }}
                  >
                    <AdminPanelSettingsIcon className="iconcolor"></AdminPanelSettingsIcon>
                    <Box sx={{ px: 2 }}> Add New Admin</Box>
                  </Button>
                </Link>
              </Box>
            )}
            <Link style={{ textDecoration: "none" }} to="/login">
              <Button
                type="submit"
                fullWidth
                onClick={logout}
                sx={{ mt: 1, mb: 1 }}
              >
                <LogoutIcon className="iconcolor"></LogoutIcon>
                <Box sx={{ px: 2 }}>Logout</Box>
              </Button>
            </Link>
          </Box>
        )}
      </List>
      <Divider />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    // <Box sx={{ m: 9, boxShadow: 3, display: "flex" }}>
    <Box  sx={{ m: { md: 9 }, boxShadow: { md: 3 }, display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#292a2d", color: "white" }}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: { md: "none" } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
          {(user?.displayName || user?.email) && (
              <Box                   
              sx={{

              }}>
                <Avatar
                  alt="Remy Sharp"
                  src={user?.photoURL}

                />
              </Box>
            )}
          </Box>
        </Toolbar>

      </AppBar>

      {/* FIRST BOX FOR LAPTOP */}
      <Box
        // style={{ backgroundColor: "transparent", position: "relative" }}
        //  sx={{ mt: 7, boxShadow: 3 }}
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        className="borderright"
      >
        {drawer}
      </Box>

      {/* // FOR MOBILE */}
      <Box>
        <Drawer
          container={container}
          // variant="temporary"
          open={mobileOpen}
          // className="borderright"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* DIVIDE UPPE BOX IN TWO PART FOR MOBILE AND DESKTOP */}
      <Box
       style={{ backgroundColor: "#eaeef2"}}
        // className="borderright"
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Toolbar /> */}
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <AdminRoute path={`${path}/allorders`}>
            <AllOrders />
          </AdminRoute>
          <Route path={`${path}/myorders`}>
            <MyOrders />
          </Route>
          <AdminRoute path={`${path}/addnewproduct`}>
            <AddNewProducts />
          </AdminRoute>
          <AdminRoute path={`${path}/manageallproducts`}>
            <ManageAllProducts />
          </AdminRoute>
          <AdminRoute path={`${path}/addnewadmin`}>
            <AddNewAdmin />
          </AdminRoute>
          <Route path={`${path}/givereview`}>
            <GiveReview />
          </Route>
          <Route path={`${path}/paymentdetails`}>
            <PaymentDetails />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}
