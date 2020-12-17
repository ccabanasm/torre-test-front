import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import NavLogo from "./components/NavLogo";
import NavItem from "./components/NavItem";
import { FaSuitcase, MdExpandMore } from "react-icons/all";
import DropdownMenu from "./components/DropdownMenu";
import JobsPage from "./pages/jobs/jobs";

function App() {
  return (
    <Router>
      <>
        <Navbar>
          <NavLogo titulo="torre" />
          <NavItem icon={<FaSuitcase />} />
          <NavItem icon={<MdExpandMore />} titulo="username">
            <DropdownMenu></DropdownMenu>
          </NavItem>
        </Navbar>
        <Switch>
          <Route exact path="/" component={JobsPage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
