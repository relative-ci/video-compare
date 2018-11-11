import React from 'react';

import styles from './App.css';
import Header from '../Header/Header';
import Results from '../Results/Results';
import GithubButton from '../GithubButton/GithubButton';

const AppLoader = () => (
  <p>Loading</p>
);

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      urls: [],
      videos: [],
      statuses: [],
      playbackRate: 1
    };
  }

  componentWillMount() {
    const params = new URLSearchParams(window.location.search);
    const urls = params.getAll('url');

    this.setState({ urls });
  }

  getStatus = () => {
    const { statuses } = this.state;

    if (statuses.includes('play')) {
      return 'play';
    }

    if (!statuses.includes('play') || !statuses.includes('pause')) {
      return 'ended';
    }

    return 'pause';
  }

  handlePlayButtonClick = () => {
    const { videos } = this.state;
    const status = this.getStatus();

    const newStatus = status === 'play' ? 'pause' : 'play';

    videos.forEach((ref) => {
      if (ref.current) {
        ref.current[newStatus]();
      }
    });

    this.setState(({ statuses }) => ({
      statuses: statuses.map(() => newStatus)
    }));
  }

  handlePlaybackRateChange = (event) => {
    this.setState({
      playbackRate: event.target.value
    });
  }

  getAddVideo = index => (elm) => {
    this.setState(({ videos, statuses }) => ({
      videos: [
        ...videos.slice(0, index),
        elm,
        ...videos.slice(index + 1)
      ],
      statuses: [
        ...statuses.slice(0, index),
        'pause',
        ...statuses.slice(index + 1)
      ]
    }));
  }

  getSetPlayStatus = index => (status) => {
    this.setState(({ statuses }) => ({
      statuses: [
        ...statuses.slice(0, index),
        status,
        ...statuses.slice(index + 1)
      ]
    }));
  }

  render() {
    const { playbackRate, urls } = this.state;
    const playStatus = this.getStatus();
    const Component = urls && urls.length !== 0 ? Results : AppLoader;

    return (
      <div className={styles.root}>
        <Header
          status={playStatus}
          onPlayButtonClick={this.handlePlayButtonClick}
          onPlaybackRateChange={this.handlePlaybackRateChange}
        />
        <Component
          playbackRate={playbackRate}
          urls={urls}
          getAddVideo={this.getAddVideo}
          getSetPlayStatus={this.getSetPlayStatus}
        />
        <GithubButton />
      </div>
    );
  }
}

export default App;
