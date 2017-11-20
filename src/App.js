import React, { Component } from 'react';
import store from './store';
import { testAction } from './actions/test';
import { routes, restrictedRoutes } from './routes';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null
    };
  }

  async componentWillMount(){
    try {
      const data = { status: true, message: 'Initial things.'}
      store.dispatch(testAction(data));
      const token = localStorage.getItem('token');
      this.setState({token: token});
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        {this.props.token ? routes() : restrictedRoutes()}
        {/* {routes()} */}
      </div>
    );
  }
}

const mapStateToProps = ({ test, token }) => ({ test, token })
// const mapStateToProps = (state) => {
//   return {
//     test: state.test,
//     token: state.token
//   }
// }
export default connect(mapStateToProps)(App);
