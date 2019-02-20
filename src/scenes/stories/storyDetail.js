import React from 'react';
import Navigation from '../../components/navigation/navigation';
import {connect} from 'react-redux';
import { Grid, Card } from 'semantic-ui-react';
import formatDateTime from '../../utils/formatDateTime';

class StoryDetail extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            // todo
        }
    }

    formatDate = (date) =>{
        var date_string = formatDateTime(date);
        return date_string;
    }
    
    fetchAuthor =(url) =>{
        fetch(url)
        .then(res => res.json())
        .then((response) =>{
            console.log(response);
            this.setState({
                author:response
            })
        })
    }

    render(){
        const {story_object} = this.props.location.state;
        return(
            <Navigation>
            <div className="story app-content">
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}> 
                    <Card>
                        {/* The Story Details go here */}
                        <Card.Header>
                            <p className="story_detail_title">
                            {story_object.title}
                            </p>
                            <p className="story_detail_tagline">
                            {story_object.tagline}
                            </p>
                            <p className="story_written_by">
                                Written by <span>Anonymous</span>
                            </p>
                            <p className="story_published_on">
                                Published at {this.formatDate(story_object.published_at)}
                            </p>
                        </Card.Header>
                        {/* The actual story goes here */}
                        <Card.Content>
                            <div className="story_detail" dangerouslySetInnerHTML={{__html:story_object.html}}></div>
                        </Card.Content>
                        <Card.Content extra>
                        
                        </Card.Content>
                    </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
            </Navigation>
        );
    }
}

export default connect()(StoryDetail);