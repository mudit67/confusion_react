import React, { Component } from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';

class DishDetailComponent extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        if(this.props.dish!=null)
        {
            const comments = this.props.dish.comments.map((comment) => {
                return(
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {comment.date}</p>
                    </div>
                );
            });
            return(
                <div className="row mt-5">
                    <div className = "col-12 col-md-5">
                        <Card>
                            <CardImg src = {this.props.dish.image} alt={this.props.dish.name}/>
                            <CardBody>
                                <CardTitle>
                                    {this.props.dish.name}
                                </CardTitle>
                                <CardText>
                                    {this.props.dish.description}
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className = "col-12 col-md-5">
                        <h4>Comments</h4>
                        {comments}
                    </div>
                </div>    
            );
        }
        else 
        {
            return(
                <div></div>
            );
        }
    }
}

export default DishDetailComponent;