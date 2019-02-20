import React from 'react';
import Navigation from '../../components/navigation/navigation';
import { Grid ,Header,Card, Image, Menu, Button} from 'semantic-ui-react';
import './stories.css';
import {connect} from 'react-redux';
import {fetchStories} from '../../services/store/actions/storyactions';
import formatDateTime from '../../utils/formatDateTime';
import {NavLink} from 'react-router-dom';

class Author extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            author:{}
        }
    }

    componentDidMount(){
        this.fetchAuthor(this.props.url)
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
        const {author} = this.state;
        return(
            <div>
            <Image avatar src={author.avatar}/>
            <span className="detailone">
            <p className="author">
            {author.name}
            </p>
            </span>
            </div>
        );
    }
}


class Stories extends React.Component{

    componentDidMount(){
        this.props.fetchStories();
    }
    
    formatDate = (date) =>{
        var date_string = formatDateTime(date);
        return date_string;
    }

    reduceStoryText = (text) =>{
        var maxlen = 200;
        var substring = text.substring(0,maxlen);
        return substring+"...";
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
                                <NavLink to={{pathname:`/story/${story.title.split(" ").join('-').toLowerCase()}/`,state:{story_object:story}}}>
                                    <p className="story_title">{story.title}</p>
                                </NavLink>
                                    <p className="tagline">{story.tagline}</p>
                                    <div className="snippet">
                                    <p>
                                        {this.reduceStoryText(story.text)}
                                    </p>
                                    </div>
                            </Card.Content>
                            <Card.Content extra>
                                <Author url={story.author}/>
                                <p className="published">{this.formatDate(story.published_at)}</p>
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