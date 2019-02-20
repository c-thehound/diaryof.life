import React from 'react';
import Navigation from '../../components/navigation/navigation';
import { Grid ,Header,Card, Image, Menu, Button} from 'semantic-ui-react';
import './stories.css';
import {connect} from 'react-redux';
import {fetchStories} from '../../services/store/actions/storyactions';

class Stories extends React.Component{
    componentDidMount(){
        this.props.fetchStories();
    }
    render(){
        const {stories={}} = this.props;
        return(
            <Navigation>
            <div className="stories app-content">
            <Grid stackable>
            <Grid.Row className="storiesmenu">
                <Menu>
                    <Menu.Item>
                        <Button as="a">
                        Featured
                        </Button>
                    </Menu.Item>
                </Menu>
            </Grid.Row>
            <Grid.Row >
                <Grid.Column width={10}>
                {stories.results ? 
                    <div>
                        {stories.results.map(story => (
                        <Card>
                            <Card.Content>
                                    <p className="story_title">{story.title}</p>
                                    <p className="tagline">{story.tagline}</p>
                                    <div className="snippet" dangerouslySetInnerHTML={{__html:story.html}}></div>
                            </Card.Content>
                            <Card.Content extra>
                                <Image avatar />
                                <span>Author</span>
                            </Card.Content>
                        </Card>
                ))}
                    </div>
                    :null}
                </Grid.Column>
                <Grid.Column width={6}>
                
                </Grid.Column>
            </Grid.Row>
            </Grid>
            </div>
            </Navigation>
        );
    }
}

const mapStateToProps = state =>{
    return{
        stories:state.stories.stories
    }
}

export default connect(mapStateToProps,{fetchStories})(Stories);