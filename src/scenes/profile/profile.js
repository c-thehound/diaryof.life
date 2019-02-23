import React from 'react';
import './profile.css';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import Navigation from '../../components/navigation/navigation';
import { Grid, Card, Input, TextArea } from 'semantic-ui-react';
import $ from 'jquery';
import {fetchStoriesByAuthor} from '../../services/store/actions/storyactions';
import {StoryLink} from '../stories/stories';

class Profile extends React.Component{

    componentDidMount(){
        this.props.fetchStoriesByAuthor(this.props.location.state.author.id);
    }

    render(){
        const {author} = this.props.location.state;
        const {storiesbyauthor} = this.props;
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
                                        <Grid.Column width={5} className="storiesbyauthor">
                                        {storiesbyauthor? <div>
                                            {storiesbyauthor.results.map(story =>(
                                                <Card>
                                                    <Card.Content>
                                                        <StoryLink className="link" story={story}/>
                                                    </Card.Content>
                                                    <Card.Content extra>
                                                    {story.tagline}
                                                    </Card.Content>
                                                </Card>
                                            ))}</div>
                                            :null}
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

const mapStateToProps = state =>{
    return{
        storiesbyauthor:state.stories.storiesbyauthor
    }
}

export default connect(mapStateToProps,{fetchStoriesByAuthor})(Profile);