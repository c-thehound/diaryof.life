import React from 'react';
import Navigation from '../../components/navigation/navigation';
import {connect} from 'react-redux';
import { Grid, Card } from 'semantic-ui-react';
import formatDateTime from '../../utils/formatDateTime';
import {authorCache} from '../../services/AuthorCache';
import {StoryLink} from './stories';
import {NavLink} from 'react-router-dom';

class StoryDetail extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            author:null,
            inspired_by:null
        }
    }

    formatDate = (date) =>{
        var date_string = formatDateTime(date);
        return date_string;
    }

    componentDidMount(){
        this.fetchAuthor(this.props.location.state.story_object.author);
        this.fetchInspiredBy(this.props.location.state.story_object.inspired_by);
    }

    fetchAuthor = url => {
        authorCache.getData(url).then(response => {
          this.setState({
            author: response
          });
        });
    };

    fetchInspiredBy = url =>{
        if(this.props.location.state.story_object.inspired_by){
            authorCache.getData(url).then(response => {
                this.setState({
                    inspired_by:response
                })
            })
        }else{
            return null
        }
    }

    render(){
        const {story_object} = this.props.location.state;
        const {author,inspired_by} = this.state;
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
                            {author === null ? null:<span>
                                Written by <span className="name">
                                <NavLink to={{
                                    pathname:`/author/profile/${author.name}`,
                                    state:{author}
                                    }}>
                                    {author.name}
                                </NavLink>
                                    </span>
                            </span>}
                            </p>
                            <p className="story_published_on">
                                Published {this.formatDate(story_object.published_at)}
                            </p>
                        </Card.Header>
                        {/* The actual story goes here */}
                        <Card.Content>
                            <div className="story_detail" dangerouslySetInnerHTML={{__html:story_object.html}}></div>
                        </Card.Content>
                        <Card.Content extra>
                        {inspired_by === null ? null:
                        <span>
                            <p>These story was inspire by</p><StoryLink story={inspired_by}/>
                        </span>
                        }
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