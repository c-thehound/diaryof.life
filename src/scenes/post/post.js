import React from 'react';
import Navigation from '../../components/navigation/navigation';
import { Grid, Header, Card, Form } from 'semantic-ui-react';
import Editor from 'for-editor';
import './post.css';

export default class Post extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            value:"",
            avatar:""
        }
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

    render(){
        const {desc} =this.state;
        return(
            <Navigation>
                <div className="post">
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
                                    <p>
                                    This is where you can give a little background for the pseudonym. Maybe you are sharing stories your Grandmother told you and you want your audience to understand her better. This is where you could share the background that would be common to all the writings by this author.
                                    </p>
                                </Form>
                                <Editor value={desc} onChange={this.handleChange.bind(this)}/>
                            </Card.Content>
                        </Card>
                    </Grid.Row>
                </Grid>
                </div>
            </Navigation>
        );
    }
}