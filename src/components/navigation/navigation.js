import React from 'react';
import {Menu,Card,Input,Header, Message, Button, Grid, Search} from  'semantic-ui-react';
import './navigation.css';
import SignIn from '../signin/signin';
import {NavLink} from 'react-router-dom';

export default class Navigation extends React.Component{

    componentDidMount(){
    }

    render(){
        return(
            <div className="header">
            <Grid>
                <Grid.Row className="title">
                <Menu secondary>
                <Menu.Item>
                    <div className="head">
                    Diary of Life
                    </div>
                </Menu.Item>
                <Menu.Menu position="right">
                <Menu.Item>
                    <NavLink to="/stories">
                    Stories
                    </NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/post">
                    Post
                    </NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/login">
                    Sign in
                    </NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/signup">
                    <Button basic className="signupbtn">
                    Sign up
                    </Button>
                    </NavLink>
                </Menu.Item>
                <Menu.Item>
                    <Search
                    value="Search diary of life"
                    />
                </Menu.Item>
                </Menu.Menu>
                </Menu>
                </Grid.Row>
                <Grid.Row className="intro">
                    <Card>
                        <Card.Header>
                            Diary of life
                        </Card.Header>
                        <Card.Content extra>
                        Stories of life that connect us
                        </Card.Content>
                    </Card>
                </Grid.Row>
            </Grid>
            <div className="app-content">
            {this.props.children}
            </div>
            </div>
        );
    }
}