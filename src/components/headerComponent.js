import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav,NavbarToggler,NavItem,Collapse } from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component {


  constructor(props){
    super(props);
    this.state={
      isNavOpen: false
    };
    this.toggleNav=this.toggleNav.bind(this);
  }
  toggleNav(){
    this.setState(
      {
        isNavOpen: !this.state.isNavOpen
      }
    );
  }
  render() {
    return(
    <React.Fragment>
      <Navbar dark expand="md">  
      {/* expand only for small to medium */}
        <div className="container">
          <NavbarToggler onClick={this.toggleNav}/>
            <NavbarBrand className="mr-auto"href="/">
              <img src="assets/image/images/logo.png" height="30" width="41"></img>
            </NavbarBrand>

          <Collapse isOpen ={this.state.isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg">Home</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <span className="fa fa-info fa-lg">About us</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg">Menu</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg">Contact us</span>
                </NavLink>
              </NavItem>
            </Nav>
           </Collapse>
        </div>
      </Navbar>
      <Jumbotron >
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
    </React.Fragment>
    );
  }
}
export default Header;