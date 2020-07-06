import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponents';
// import DishDetailComponent from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import '../App.css';
import {DISHES} from '../shared/dishes';
import {Switch, Redirect, Route} from 'react-router-dom';
class Main extends Component {
  
	constructor(props){
		super(props);
		this.state = {
            dishes : DISHES
		};
    }
    

	render(){

    const HomePage = () => {
      return(
        <Home/>
      ); 
    }

    return (
      <div>
      		
      {/* <React.StrictMode> */}
			  	<Header/>
      	  <Switch>
            <Route path="/home" component = {HomePage}/>
            <Route exact path = "/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
            <Redirect to="/home"/>
          </Switch>
        
	  			<Footer/>
		    {/* </React.StrictMode> */}
      </div>
      );
    }
}

export default Main;
