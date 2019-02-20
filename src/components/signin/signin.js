import React from 'react';
import './signin.css';
import {connect} from 'react-redux';
import {login} from '../../services/store/actions/user-actions';
import WOW from 'wowjs';

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
        const {loginform,error} = this.props;
        if(error){
            return <div className="signin" dangerouslySetInnerHTML={{__html:error}}></div>
        }
        return(
            <div className="signin" dangerouslySetInnerHTML={{__html:loginform}}>
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