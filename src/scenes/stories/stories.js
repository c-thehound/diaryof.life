import React from "react";
import Navigation from "../../components/navigation/navigation";
import { Grid, Card, Image, Menu, Button } from "semantic-ui-react";
import "./stories.css";
import { connect } from "react-redux";
import { fetchStories } from "../../services/store/actions/storyactions";
import formatDateTime from "../../utils/formatDateTime";
import { NavLink } from "react-router-dom";
import { authorCache } from "../../services/AuthorCache";
import clip from "text-clipper";

export function StoryLink(props) {
  let { story} = props;
  return (
    <NavLink
      to={{
        pathname: `/story/${story.title
          .split(" ")
          .join("-")
          .toLowerCase()}/`,
        state: { story_object: story }
      }}
    >
      <p className="story_title">{story.title}</p>
    </NavLink>
  );
}

class Author extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: {}
    };
  }

  componentDidMount() {
    this.fetchAuthor(this.props.url);
  }

  fetchAuthor = url => {
    authorCache.getAuthor(url).then(response => {
      this.setState({
        author: response
      });
    });
  };

  render() {
    const { author } = this.state;
    return (
      <div>
        <Image avatar src={author.avatar} />
        <span className="detailone">
          <p className="author">{author.name}</p>
        </span>
      </div>
    );
  }
}

class Stories extends React.Component {
  componentDidMount() {
    this.props.fetchStories();
  }

  formatDate = date => {
    var date_string = formatDateTime(date);
    return date_string;
  };

  reduceStoryText = htmlString => {
    return clip(htmlString, 150, { html: true });
  };

  render() {
    const { stories = {} } = this.props;
    return (
      <Navigation>
        <div className="stories app-content">
          <Grid stackable>
            <Grid.Row className="storiesmenu">
              <Menu>
                <Menu.Item>
                  <Button as="a">Featured</Button>
                </Menu.Item>
              </Menu>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={10}>
                {stories.results ? (
                  <div>
                    {stories.results.map(story => (
                      <Card key={story.url}>
                        <Card.Content>
                          <StoryLink story={story}/>
                          <p className="tagline">{story.tagline}</p>
                          <div className="snippet">
                            <p
                              dangerouslySetInnerHTML={{
                                __html: this.reduceStoryText(story.html)
                              }}
                            />
                          </div>
                        </Card.Content>
                        <Card.Content extra>
                          <Author url={story.author} />
                          <p className="published">
                            {this.formatDate(story.published_at)}
                          </p>
                        </Card.Content>
                      </Card>
                    ))}
                  </div>
                ) : null}
              </Grid.Column>
              <Grid.Column width={6} />
            </Grid.Row>
          </Grid>
        </div>
      </Navigation>
    );
  }
}

const mapStateToProps = state => {
  return {
    stories: state.stories.stories
  };
};

export default connect(
  mapStateToProps,
  { fetchStories }
)(Stories);
