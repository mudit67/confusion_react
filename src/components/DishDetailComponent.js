import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';



const DishDetailComponent = (props) => {
        if(props.dish!=null)
        {
            const comments = props.dish.comments.map((comment) => {
                return(
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, &nbsp; 
                          {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date (Date.parse(comment.date)))}</p>
                    </div>
                );
            });
            return(
                <div className="container">
                    <div className="row mt-5">
                        <div className = "col-12 col-md-5">
                            <Card>
                                <CardImg src = {props.dish.image} alt={props.dish.name}/>
                                <CardBody>
                                    <CardTitle>
                                        {props.dish.name}
                                    </CardTitle>
                                    <CardText>
                                        {props.dish.description}
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>

                        <div className = "col-12 col-md-5">
                            <h4>Comments</h4>
                            {comments}
                        </div>
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
    };


export default DishDetailComponent;