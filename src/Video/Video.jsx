import React from 'react';

import styles from './Video.css';

// eslint-disable-next-line react/prefer-stateless-function
class Video extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.play !== nextProps.play) {
      if (nextProps.play === false) {
        this.video.pause();
      } else {
        this.video.play();
      }
    }

    if (this.props.playbackRate !== nextProps.playbackRate) {
      this.video.playbackRate = nextProps.playbackRate;
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
