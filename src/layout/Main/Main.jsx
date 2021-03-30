import React, { PureComponent } from 'react';
//import { Test } from './Main.styles';

class Main extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }


  componentDidMount = () => {
  }


  render () {
    
    return (
      <div className="MainWrapper">
          {this.props.children}
      </div>
    );
  }
}


export default Main;
