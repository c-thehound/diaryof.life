import React from 'react';
import './profile.css';
import {connect} from 'react-redux';
import Navigation from '../../components/navigation/navigation';
import { Grid, Card, Input, TextArea } from 'semantic-ui-react';
import $ from 'jquery';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            author:null
        }
    }
    componentDidMount(){
        $('.details .input,.details .textarea').on('click',function(){
            $('.details .icon').removeClass('false');
        })
    }
    render(){
        const {author} = this.props.location.state;
        console.log(author);
        return(
            <Navigation>
                {author === undefined ? null:
                        <div className="profile app-content">
                            <Grid celled stackable>
                                    <Grid.Row>
                                        <Grid.Column width={5} className="profileimage">
                                        <Card
                                        image={author.avatar}
                                        />
                                        </Grid.Column>
                                        <Grid.Column width={5} className="details">
                                        <Input disabled value={author.name}/>
                                        <TextArea className="false" disabled value={author.bio_text}/>
                                        </Grid.Column>
                                        <Grid.Column width={5} className="moredetails">
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                    
                                    </Grid.Row>
                                </Grid>
                                </div>
                    }
            </Navigation>
        );
    }
}

export default connect()(Profile);