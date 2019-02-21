import React from 'react';
import './profile.css';
import {connect} from 'react-redux';
import Navigation from '../../components/navigation/navigation';
import { Grid, Card } from 'semantic-ui-react';

class Profile extends React.Component{
    render(){
        return(
            <Navigation>
            <div className="profile app-content">
            <Grid celled stackable>
                <Grid.Row>
                    <Grid.Column width={5} className="profileimage">
                    <Card
                    image="https://i.imgur.com/g0aYvDs.jpg"
                    />
                    </Grid.Column>
                    <Grid.Column width={11}>

                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>

                </Grid.Row>
            </Grid>
            </div>
            </Navigation>
        );
    }
}

export default connect()(Profile);