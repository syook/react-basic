import React, { Component } from 'react';
import store from './store';
// import { testAction } from './actions/test';
import { saveToken } from './actions/saveToken';
import { saveSubdomain } from './actions/saveSubdomain';
import { tenantRoutes, tenantUnauthorizedRoutes, adminRoutes } from './routes';
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
      // const data = { status: true, message: 'Initial things.'}
      // store.dispatch(testAction(data));
      const windowLocation = window.location.hostname.split('.')
      const subdomain = windowLocation.length === 3 ? windowLocation[0] : null
      store.dispatch(saveSubdomain(subdomain));
      this.setState({subdomain: subdomain});
      const token = localStorage.getItem('token');
      store.dispatch(saveToken(token));
      this.setState({token: token});
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log('App');
    console.log(this.props);
    return (
      <div className="App">
        {this.props.subdomain ? this.props.token ? tenantRoutes() : tenantUnauthorizedRoutes() : adminRoutes()}
        {/* {routes()} */}
      </div>
    );
  }
}

const mapStateToProps = ({ test, token, subdomain }) => ({ test, token, subdomain })
// const mapStateToProps = (state) => {
//   return {
//     test: state.test,
//     token: state.token
//   }
// }
export default connect(mapStateToProps)(App);
