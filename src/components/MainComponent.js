import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './headerComponent';
import Footer from './footerComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotion';

import {Switch, Route, Redirect } from 'react-router-dom';
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments:COMMENTS,
        promotions:PROMOTIONS,
        leaders:LEADERS,
        //selectedDish: null
    };
  }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId});
  // }

  render() { 
    const HomePage=()=>{
      return(
        <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
        
        promotions={this.state.dishes.filter((promo)=>promo.featured)[0]}
        leaders={this.state.dishes.filter((leader)=>leader.featured)[0]}
   />
        
        
      );
    }
    return (
      <div>
       <Header/>
        {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
      <Switch>
        {/* when url is ending with home move to this component  */}
        <Route path="/home" component={HomePage}/>
        <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}></Menu>}/>
        <Route exact path="/contactus" component={Contact}/>
        <Redirect to="/home"></Redirect>
      </Switch>
       <Footer/>
      </div>
    );
  }
}

export default Main;


