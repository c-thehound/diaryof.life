import React from 'react';
import './signin.css';
import { Dropdown,Header, Card, Form } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../services/store/actions/user-actions';
import WOW from 'wowjs';

const options = [
    { key: 'user', text: 'Account', icon: 'user' },
    { key: 'settings', text: 'Settings', icon: 'settings' },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
  ]

class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            username:"",
            password:""
        }
    }

    componentDidMount(){
        var wow = new WOW.WOW();
        wow.init();
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleLogin =() =>{
        var data ={
            username:this.state.username,
            password:this.state.password
        }
        this.props.login(data);
    }

    render(){
        
        return(
            <div className="signin">
            <Card className="wow fadeIn">
                <Card.Content>
                    <Header as="h2">DIARY OF LIFE</Header>
                    <p>Sign in</p>
                    <Form>
                        <Form.Input onChange={this.handleChange} icon="user" iconPosition="left" type="text" name="username" placeholder="Username"/>
                        <Form.Input onChange={this.handleChange} icon="lock" iconPosition="left" type="password" name="password" placeholder="Password"/>
                        <Form.Button onClick={this.handleLogin} content="Log in" fluid/>
                    </Form>
                </Card.Content>
                <Card.Content extra>
                Don't have an account ? <NavLink to="/signup">Sign up</NavLink>
                </Card.Content>
            </Card>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        userdata:state.user.userdata
    }
}

export default connect(mapStateToProps,{login})(SignIn);