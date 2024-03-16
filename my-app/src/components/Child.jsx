import React, {Component} from 'react'

class Child extends Component{
    render(){
    return (
        <div>
        <h1>This is a child component</h1>
        <h1 style={{ color: this.props.gfgcolor }}>
            Child Component
        </h1>
        <h1 style={{ color: this.props.usercolor }}>
            hello user
        </h1>
    </div>
);
  }
  
}


export default Child