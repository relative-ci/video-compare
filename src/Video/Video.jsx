import React from 'react';

import styles from './Video.css';

// eslint-disable-next-line react/prefer-stateless-function
class Video extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.play === nextProps.play) {
      return;
    }

    if (nextProps.play === false) {
      this.video.pause();
      return;
    }

    this.video.play();
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
