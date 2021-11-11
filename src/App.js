import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./AllPages/Shared/Navbar/Navbar";
import Footer from "./AllPages/Shared/Footer/Footer";
import HomePage from "./AllPages/Home/HomePage/HomePage";
import Shop from "./AllPages/Home/Shop/Shop";
import Blogs from "./AllPages/Home/Blogs/Blogs";
import NotFoundPage from "./AllPages/Shared/NotFoundPage/NotFoundPage";
import SignUp from "./AllPages/Shared/LoginSignUp/SignUp/SignUp";
import Login from "./AllPages/Shared/LoginSignUp/Login/Login";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./AllPages/Shared/PrivateRoute/PrivateRoute";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/home">
                <HomePage />
              </Route>
              <PrivateRoute path="/shop">
                <Shop />
              </PrivateRoute>
              <Route path="/blogs">
                <Blogs />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
