// import React, { Component } from 'react';
// import { Card, CardImg, CardImgOverlay, CardText, CardBody,
//     CardTitle } from 'reactstrap';
// class Menu extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
          
//         };
//     }

//     render() {
//         const menu = this.props.dishes.map((dish) => {
//             // return (
//             //   <div key={dish.id} className="col-12 mt-5">
//             //     <Media >
//             //       <Media >
//             //           <Media object src={dish.image} alt={dish.name} />
//             //       </Media>
//             //       <Media body className="ml-5">
//             //         <Media heading>{dish.name}</Media>
//             //         <p>{dish.description}</p>
//             //       </Media>
//             //     </Media>
//             //   </div>
//             // );
//             return (
//                 <div key={dish.id} className="row text-left  col-md-5 m-1">
                  
//                   <Card>
//                     <Card className ="col-3">
//                         <CardImg width="100%"  src={dish.image} alt={dish.name} />
//                     </Card>
//                     {/* className="col-9 ml-5" */}
//                     <CardImgOverlay >
//                       <CardTitle className="col-1">{dish.name}</CardTitle>
//                       {/* <p >{dish.description}</p> */}
//                     </CardImgOverlay>
                  
//                 </Card>
//                 </div>
//               );
//         });

//         return (
//           <div className="container">
//             <div className="row">
//               {/* <Media list> */}
//                   {menu}
//               {/* </Media> */}
//             </div>
//           </div>
//         );
//     }
// }


import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, 
    CardTitle } from 'reactstrap';
  
    class Menu extends Component {

     
        
       
        
      
        render() {
          const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={()=>this.props.onClick(dish.id)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name}/>
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
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
             
            </div>
          );
        }
      }
      
      export default Menu;