import React from 'react';
import Navigation from '../../components/navigation/navigation';
import { Grid, Card, Icon } from 'semantic-ui-react';
import './home.css';
import {NavLink} from 'react-router-dom';

export default class Home extends React.Component{
    render(){
        return(
            <Navigation>
                <div className='home app-content'>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                        <Card>
                            <Card.Header>
                                Collaborative Storytelling
                            </Card.Header>
                            <Card.Content>
                            <p>Civilization is built out of stories: mine, yours, his, hers. When we share our stories, our hopes our fears, we have a better chance of understanding each other, of become more integrated and less separated.
I hope you will enjoy the stories you read here and most importantly, I hope this site will inspire you to share your stories. Happy stories, sad stories, stories you've heard.
In order to encourage sharing of more personal stories, we have the concept of Pseudonyms. With these pseudonyms, you can share stories that you might not want to publicly admit to, but sometimes sharing our stories helps us put them in perspective and helps us find comfort as we learn that others have problems very similar to ours.</p>
                            </Card.Content>
                        </Card>
                        </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                        <Grid.Column width={16}>
                        <Card>
                            <Card.Header>
                                Without Comments
                            </Card.Header>
                            <Card.Content>
                                <p>
                            Too often people listen, not to understand, but to respond. We don't want that here. We want understanding. So if a particular story moves you to express yourself, do it as a story inspired by another story. There won't be any back and forth in the comment section to take away from the story.
Too often you see comments on YouTube videos or Facebook posts that look just like drive by shootings. Where the hate and the division take over and all valuable discourse is just buried in noise we decided to forgo comments so we don't have to worry about that.
</p>
                            </Card.Content>
                        </Card>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className="continue">
                    <span>
                        <NavLink to='/stories'>
                        Show me some more stories already <Icon name="arrow alternate circle right outline"/>
                        </NavLink>
                    </span>
                    </Grid.Row>
                </Grid>
    
                </div>
            </Navigation>
        );
    }
}