import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("Cars");
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        marResult: 5,
        part: "snippet",
        key: "AIzaSyB_qnwH5HxTzpSQQpamcnpAdn6-dYvi-X4"   //Disabled Ex API
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });

    // console.log(this.state.videos[0].snippet);
    // video.snippet.publishedAt
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
    // console.log("From the app", video);
  };
  render() {
    return (
      <div className="ui container">
        {/* Parent is where component is used */}
        <SearchBar onFormSubmit={term => this.onTermSubmit(term)} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={selection => this.onVideoSelect(selection)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
