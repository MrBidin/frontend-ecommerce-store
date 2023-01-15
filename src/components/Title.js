// import {Component} from 'react';

// class Title extends Component {
//   render () {
//     return (
//       <div className="row">
//         <div className="col-10 mx-auto my-2 text-center text-title">
//           <h1 className="text-capitalize font-weight-bold">
//             {this.props.name} <strong className="text-blue">{this.props.title}</strong>
//           </h1>
//         </div>
//       </div>
//     )
//   }
// }

const Title = (props) => {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1 className="text-capitalize font-weight-bold">
          {props.name} <strong className="text-blue">{props.title}</strong>
        </h1>
      </div>
    </div>
  );
}

export default Title;