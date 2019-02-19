import React from 'react';
import Navigation from '../../components/navigation/navigation';
import { Grid ,Header,Card, Image} from 'semantic-ui-react';
import './stories.css';

class Stories extends React.Component{
    render(){
        return(
            <Navigation>
            <div className="stories app-content">
            <Grid stackable>
            <Grid.Row >
                <Grid.Column width={10}>
                <Card>
                    <Card.Content>
                        <p className="story_title">Story title</p>
                        <p className="snippet">A short preview of the story</p>
                    </Card.Content>
                    <Card.Content extra>
                    <Image avatar />
                    <span>Author</span>
                    </Card.Content>
                </Card>
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

export default Stories;