import React, { PureComponent } from 'react';
//import { Test } from './Base.styles';

class Base extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }


  componentDidMount = () => {
    console.log('Base mounted');
  }

  render () {
    return (
      <div className="BaseWrapper">
        
          {this.props.children}
      </div>
    );
  }
}


export default Base;
