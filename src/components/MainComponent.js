import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponents'
import DishDetailComponent from './DishDetailComponent';
import '../App.css';
import {DISHES} from '../shared/dishes';

class Main extends Component {
  
	constructor(props){
		super(props);
		this.state = {
            dishes : DISHES,
            selectedDish: null
		};
    }
    onDishSelect(dish) {
        this.setState({selectedDish: dish}) ;
    }

	render(){

      return (
        <div>
      		<Navbar dark color="primary">
		      <div className="container">
      			<NavbarBrand href="/" >
				    Ristorante Con Fusion
	            </NavbarBrand>
      		</div>
      		</Navbar>
      		<React.StrictMode>
      			<Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
                <DishDetailComponent dish = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
		    </React.StrictMode>
      </div>
      );
    }
}

export default Main;
