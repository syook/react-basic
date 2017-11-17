import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Test from './test';
import { routes, restrictedRoutes } from './routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null
    };
  }

  async componentWillMount(){
    try {
      const token = localStorage.getItem('token');
      this.setState({token: token});
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.token ? routes() : restrictedRoutes()}
        {/* {routes()} */}
      </div>
    );
  }
}

export default App;
