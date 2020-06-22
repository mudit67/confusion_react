import React, {Component} from 'react';
import {Card, CardBody, CardTitle, CardText, CardImg, CardImgOverlay} from 'reactstrap';
import DishDetailComponent from './DishDetailComponent';
class Menu extends Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }
    
    onDishSelect(dish) {
        this.setState({selectedDish: dish}) ;
    }
    
    render(){
        
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 mt-5">
                    <Card key={dish.id} onClick= {() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        
                        <CardImgOverlay>
                            <CardTitle heading>{dish.name}</CardTitle>
                        </CardImgOverlay>
                        
                    </Card>
                    
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                        {menu}                    
                </div>
                <React.StrictMode>
                    <DishDetailComponent dish={this.state.selectedDish} />
                </React.StrictMode>
            </div>
            );
    }
    
        
}
        
        export default Menu;