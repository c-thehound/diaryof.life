import React from 'react';
import './signup.css';
import { Card, Form,Header } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';
import WOW from 'wowjs';
import $ from 'jquery';

class SignUp extends React.Component{

    componentDidMount(){
        var wow =new WOW.WOW();
        wow.init();
    }

    render(){
        return(
            <div className="signup">
            <Card className="wow fadeIn">
                <Card.Content>
                <Header as="h2">DIARY OF LIFE</Header>
                    <p>Create an account</p>
                    <Form>
                    <Form.Input type="text" name="username" placeholder="Username" icon="user" iconPosition="left"/>
                    <Form.Input type="email" name="email" placeholder="Email" icon="mail" iconPosition="left"/>
                    <Form.Input type="password" name="password" placeholder="Password" icon="lock" iconPosition="left"/>
                    <Form.Input type="password" name="cpassword" placeholder="Confirm password" icon="lock" iconPosition="left"/>
                    <Form.Button fluid content="Sign Up"/>
                    </Form>
                </Card.Content>
                <Card.Content extra>
                Already have an account? <NavLink to="/login">Login</NavLink>
                </Card.Content>
            </Card>
            </div>
        );
    }
}

export default SignUp;