import React, { Component } from 'react';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './scenes/home/home';
import Stories from './scenes/stories/stories';
import {LoginRedirect} from './components/navigation/navigation';
import SignUp from './components/signup/signup';
import Post from './scenes/post/post';
import {Provider} from 'react-redux';
import store from './services/store/store';
import 'animate.css/animate.css';
import StoryDetail from './scenes/stories/storyDetail';
import Profile from './scenes/profile/profile';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <Switch>
        <Route path="/login" component={LoginRedirect}/>
        <Route path="/signup" component={SignUp}/>
        <Route path='/home' component={Home}/>
        <Route path='/stories' component={Stories}/>
        <Route path="/story/:title" component={StoryDetail}/>
        <Route path='/post' component={Post}/>
        <Route path='/author/profile/:author' component={Profile}/>
        <Route render={() => <Redirect to="/home"/>}></Route>
      </Switch>
      </div>
      </Provider>
    );
  }
}

export default App;
