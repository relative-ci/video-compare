import React from 'react';

import styles from './Video.css';

// eslint-disable-next-line react/prefer-stateless-function
class Video extends React.Component {
  componentWillReceiveProps(nextProps) {
    this.updatePlayState(nextProps.play);
    this.updatePlaybackRate(nextProps.playbackRate);
  }

  updatePlayState = (newValue) => {
    if (this.props.play === newValue) {
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
    if (this.props.playbackRate !== newValue) {
      this.video.playbackRate = newValue;
    }
  }

  render() {
    return (
      <video
        className={styles.root}
        src={this.props.url}
        ref={(elm) => { this.video = elm; }}
      />
    );
  }
}

export default Video;
