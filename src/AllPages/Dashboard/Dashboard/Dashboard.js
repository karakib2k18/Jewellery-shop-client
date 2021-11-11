import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
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

const drawerWidth = 210;

function Dashboard(props) {
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

      <List>
        <ListItem button>
          {/* singlelink */}
          <Link style={{ textDecoration: "none" }} to="/home">
            <Button sx={{ my: 1 }} variant="contained">
              HOME
            </Button>
          </Link>
        </ListItem>
        <ListItem button>
          {/* singlelink */}
          <Link
            style={{ textDecoration: "none" }}
            to={`${url}`}
          >
            <Button sx={{ mb: 1 }} variant="contained">
              Dashboard
            </Button>
          </Link>
        </ListItem>
        <ListItem button>
          {/* singlelink */}
          <Link
            style={{ textDecoration: "none" }}
            to={`${url}/allorders`}
          >
            <Button sx={{ mb: 1 }} variant="contained">
              All Orders
            </Button>
          </Link>
        </ListItem>
        <ListItem button>
          {/* singlelink */}
          <Link
            style={{ textDecoration: "none" }}
            to={`${url}/myorders`}
          >
            <Button sx={{ mb: 1 }} variant="contained">
              My Orders
            </Button>
          </Link>
        </ListItem>
        <ListItem button>
          {/* singlelink */}
          <Link
            style={{ textDecoration: "none" }}
            to={`${url}/addnewadmin`}
          >
            <Button sx={{ mb: 1 }} variant="contained">
              Add New Admin
            </Button>
          </Link>
        </ListItem>
        <ListItem button>
          {/* singlelink */}
          <Link
            style={{ textDecoration: "none" }}
            to={`${url}/givereview`}
          >
            <Button sx={{ mb: 1 }} variant="contained">
              Give Review
            </Button>
          </Link>
        </ListItem>
        <ListItem button>
          {/* singlelink */}

          <Link
            style={{ textDecoration: "none" }}
            to={`${url}/paymentdetails`}
          >
            <Button sx={{ mb: 1 }} variant="contained">
              Payment Details
            </Button>
          </Link>
        </ListItem>
      </List>

      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
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
          <Route path={`${path}/allorders`}>
            <AllOrders />
          </Route>
          <Route path={`${path}/myorders`}>
            <MyOrders />
          </Route>
          <Route path={`${path}/addnewadmin`}>
            <AddNewAdmin />
          </Route>
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
