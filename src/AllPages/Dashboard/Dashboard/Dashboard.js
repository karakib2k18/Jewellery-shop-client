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
import { Button } from "@mui/material";
import AllOrders from "../AllOrders/AllOrders";
import MyOrders from "../MyOrders/MyOrders";
import AddNewAdmin from "../AddNewAdmin/AddNewAdmin";
import GiveReview from "../GiveReview/GiveReview";
import PaymentDetails from "../PaymentDetails/PaymentDetails";
import AddNewProducts from "../AddNewProducts/AddNewProducts";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Shared/AdminRoute/AdminRoute";
import ManageAllProducts from "../ManageAllProducts/ManageAllProducts";

const drawerWidth = 210;

function Dashboard(props) {
  const { logout, admin } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      <List sx={{ p: 2 }}>
        {/* singlelink */}
        <Link style={{ textDecoration: "none" }} to="/home">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 1, fontWeight: "bold" }}
          >
           GO BACK HOME
          </Button>
        </Link>

        {/* singlelink */}
        <Link style={{ textDecoration: "none" }} to={`${url}`}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 1, fontWeight: "bold" }}
          >
            Dashboard
          </Button>
        </Link>

        {!admin && (
          <Box>
           
        {/* singlelink */}
        <Link style={{ textDecoration: "none" }} to={`${url}/myorders`}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 1, fontWeight: "bold" }}
          >
            My Orders
          </Button>
        </Link>

        {/* singlelink */}
        <Link style={{ textDecoration: "none" }} to={`${url}/givereview`}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 1, fontWeight: "bold" }}
          >
            Give Review
          </Button>
        </Link>

          </Box>
        )}


        {admin && (
          <Box>
            {" "}
            {/* singlelink */}
            <Link
              style={{ textDecoration: "none" }}
              to={`${url}/addnewproduct`}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1, fontWeight: "bold" }}
              >
                Add Products
              </Button>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`${url}/manageallproducts`}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1, fontWeight: "bold" }}
              >
                Manage All Products
              </Button>
            </Link>
            {/* singlelink */}
            <Link style={{ textDecoration: "none" }} to={`${url}/allorders`}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1, fontWeight: "bold" }}
              >
                All Orders
              </Button>
            </Link>
            {/* singlelink */}
            <Link style={{ textDecoration: "none" }} to={`${url}/addnewadmin`}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1, fontWeight: "bold" }}
              >
                Add New Admin
              </Button>
            </Link>
          </Box>
        )}

        {/* singlelink */}
        {!admin && (
         <Link style={{ textDecoration: "none" }} to={`${url}/paymentdetails`}>
         <Button
           type="submit"
           fullWidth
           variant="contained"
           sx={{ mt: 1, mb: 1, fontWeight: "bold" }}
         >
           Payment Now
         </Button>
       </Link>
        )}



        <Link style={{ textDecoration: "none" }} to="/">
          <Button
            onClick={logout}
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 1, fontWeight: "bold" }}
          >
            LogOut
          </Button>
        </Link>
      </List>

      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
  
        ))}
      </List> */}
      {/* all menus left side */}
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ py: 2, m: 1 }}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
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

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
