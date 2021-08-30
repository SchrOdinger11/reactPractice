import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';



    // function to change to date

  // convertDateToCommentDateFormat(timestamp) {
  //   const date = new Date(timestamp);
  //   return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  // }
//   function to render dish

  function RenderDish({dish}) {
    return (
      <Card>
        <CardImg  src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }
// function to render comments
  function RenderComments({comments}) {
    if (comments == null || comments.length === 0) {
      return (
        <div></div>
      );
    }

    const renderedComments = comments.map((comment) => {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p> {comment.author}, {new Date(comment.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
        </li>
      );
    });

    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">
          { renderedComments }
        </ul>
      </div>
    );
  }

//   final render function

  const DishDetail=(props)=> {
    if (props.dish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.dish.comments}/>
          </div>
        </div>
      );
    }
    else {
      return ( 
        <div></div>
      );
    }
  }



export default DishDetail;