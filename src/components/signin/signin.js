import React from 'react';
import './signin.css';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {login} from '../../services/store/actions/user-actions';
import WOW from 'wowjs';
import {Card, Form, Header} from 'semantic-ui-react';

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
        this.props.login();
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
                <Card.Header>
                    <div>
                        <Header as="h2">Diary of life</Header>
                        <p>LOGIN</p>
                    </div>
                </Card.Header>
                <Card.Content>
                    <Form autoComplete="off" autofill="off">
                        <Form.Input onChange={this.handleChange} autoComplete="username" required icon="user" iconPosition="left" type="text" name="username" placeholder="Username"/>
                        <Form.Input onChange={this.handleChange} autoComplete="password" required icon="lock" iconPosition="left" type="password" name="password" placeholder="Password"/>
                        <Form.Button onClick={this.handleLogin} fluid type="submit" content="LOGIN"/>
                    </Form>
                </Card.Content>
                <Card.Content extra>
                <p>Don't have an account? <NavLink to="/signup">Sign up</NavLink></p>
                </Card.Content>
            </Card>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        loginform:state.user.login,
        error:state.user.error
    }
}

export default connect(mapStateToProps,{login})(SignIn);