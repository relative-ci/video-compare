import React from 'react';

import styles from './Video.css';

// eslint-disable-next-line react/prefer-stateless-function
class Video extends React.Component {
  componentWillReceiveProps(nextProps) {
    this.updatePlayState(nextProps.play);
    this.updatePlaybackRate(nextProps.playbackRate);
  }

  updatePlayState = (newValue) => {
    const { play } = this.props;
    if (play === newValue) {
      return;
    }

    if (newValue === false) {
      this.video.pause();
      return;
    }

    if (!this.video.ended) {
      this.video.play();
    }
  }

  updatePlaybackRate = (newValue) => {
    const { playbackRate } = this.props;
    if (playbackRate !== newValue) {
      this.video.playbackRate = newValue;
    }
  }

  render() {
    const { url } = this.props;

    return (
      <video
        className={styles.root}
        src={url}
        ref={(elm) => { this.video = elm; }}
      />
    );
  }
}

export default Video;
