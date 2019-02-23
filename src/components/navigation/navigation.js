import React from 'react';
import {Menu,Search, Icon} from  'semantic-ui-react';
import './navigation.css';
import {NavLink} from 'react-router-dom';

export class LoginRedirect extends React.Component{
    componentDidMount(){
        window.location.assign('http://127.0.0.1:8000/accounts/signin/')
    }
    render(){
        return(
            <div></div>
        );
    }
}

export default class Navigation extends React.Component{

    componentDidMount(){
    }

    render(){
        return(
            <div className="head">
            <div className="layout">
            <Menu>
                <div className="title">
                diary of life
                <p>
                <Icon name="world"/>Stories of life that connect us
                </p>
                </div>
                {/* When screen width is above 940px */}
                <Menu.Menu className="nav" position="right">
                <Menu.Item>
                    <NavLink to="/home">Home</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/stories">Stories</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/post">Post</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/login">Login</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <Search></Search>
                </Menu.Item>
                </Menu.Menu>

                {/* When screen width is below 940px */}
                <Menu.Menu className="navreduced">
                <Menu.Item>
                    <NavLink to="/home">Home</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/stories">Stories</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/post">Post</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/login">Login</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/signup">Sign up</NavLink>
                </Menu.Item>
                </Menu.Menu>
            </Menu>
            </div>
            {this.props.children}
            </div>
        );
    }
}