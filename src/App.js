import React, { Component } from 'react';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './scenes/home/home';
import Stories from './scenes/stories/stories';
import SignIn from './components/signin/signin';
import SignUp from './components/signup/signup';
import Post from './scenes/post/post';
import {Provider} from 'react-redux';
import store from './services/store/store';
import 'animate.css/animate.css';
import { Card } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <Switch>
        <Route path="/login" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path='/home' component={Home}/>
        <Route path='/stories' component={Stories}/>
        <Route path='/post' component={Post}/>
        <Route render={() => <Redirect to="/home"/>}></Route>
      </Switch>
      {/* <Footer/> */}
      </div>
      </Provider>
    );
  }
}

export default App;
