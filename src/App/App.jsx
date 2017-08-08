import React from 'react';
import qs from 'qs';

import styles from './App.css';
import Header from '../Header/Header';
import Results from '../Results/Results';

const AppLoader = () => (
  <p>Loading</p>
);

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: [],
      play: false,
      playbackRate: 1
    };
  }

  componentWillMount() {
    const { url } = qs.parse(window.location.search.replace(/^\?/, ''));

    this.setState({ url });
  }

  handlePlayButtonClick = (event) => {
    event.preventDefault();
    this.setState({
      play: !this.state.play
    });
  }

  handlePlaybackRateChange = (event) => {
    this.setState({
      playbackRate: event.target.value
    });
  }

  render() {
    const Component = this.state.url && this.state.url.length !== 0
      ? Results
      : AppLoader;

    return (
      <div className={styles.root}>
        <Header
          play={this.state.play}
          onPlayButtonClick={this.handlePlayButtonClick}
          onPlaybackRateChange={this.handlePlaybackRateChange}
        />
        <Component
          play={this.state.play}
          playbackRate={this.state.playbackRate}
          url={this.state.url}
        />
      </div>
    );
  }
}

export default App;
