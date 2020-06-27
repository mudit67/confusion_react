import React, { Component } from 'react';
import Menu from './MenuComponents'
import DishDetailComponent from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
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
      		
      		<React.StrictMode>
				<Header/>
      			<Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
                <DishDetailComponent dish = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
				<Footer/>
		    </React.StrictMode>
      </div>
      );
    }
}

export default Main;
