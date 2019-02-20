import React from 'react';
import Navigation from '../../components/navigation/navigation';
import {Icon, Grid, Header, Card, Form } from 'semantic-ui-react';
import Editor from 'for-editor';
import './post.css';
import AceEditor from 'react-ace';
import $ from 'jquery';

export default class Post extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            value:"",
            avatar:"",
            window:null
        }
    }

    componentDidMount(){
        var wWidth = $(window).width();
        this.setState({
            window:wWidth
        })
    }

    handleOnChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleChange(value){
        this.setState({
          value
        })
    }
    handleClose =() =>{
        this.props.history.goBack();
    }

    render(){
        const {desc,window} =this.state;
        // Is the window width is less than 768 pixels, tell the user the page is best viewed on a desktop
        if(window < 768){
            return <div className="changetodesktop">
                        <div className="close">
                            <Icon onClick={this.handleClose} name="close"/>
                        </div>
                    <div className="title">
                        <Header as="h2">
                        Diary of life
                        </Header>
                        <p>
                        <Icon name="world"/>
                        Stories of life that connect us
                        </p>
                        <p className="alert">
                        These page is best viewed from a desktop
                        </p>
                    </div>
                </div>
        }
        // Othewise render the post page
        return(
            <Navigation>
                <div className="post app-content">
                <Grid>
                    <Grid.Row>
                        <p><Header as="h3">
                        It looks like this is your first story!Glad you could join us.
                        </Header></p>
                        <p>Before you can create a story,you need to create a Pseudonym, the name this story will be published under.</p>
                        <p>A Pseudonym is a handle you can use when writing. Maybe you have different writing styles, maybe you don't want to write about pain or something embarassing without a little anonymity. We will know who you are and all of your writings can be clustered (under a pseudonym) but we won't connect your user/login to your pseudonyms.</p>
                        <Card>
                            <Card.Content>
                                <Form>
                                    <Form.Input type="text" name="name" placeholder="Name"/>
                                    <p>This is where you can give a little background for the pseudonym. Maybe you are sharing stories your Grandmother told you and you want your audience to understand her better. This is where you could share the background that would be common to all the writings by this author.</p>
                                </Form>
                                {/* <Editor value={desc} onChange={this.handleChange.bind(this)}/> */}
                                <AceEditor
                                onChange={this.handleChange.bind(this)}
                                name="desc"
                                />
                            </Card.Content>
                        </Card>
                    </Grid.Row>
                </Grid>
                </div>
            </Navigation>
        );
    }
}