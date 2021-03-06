import React from 'react';

import styles from './Video.css';

// eslint-disable-next-line react/prefer-stateless-function
class Video extends React.Component {
  video = {
    current: null
  }

  constructor(props) {
    super(props);

    props.addVideo(this.video);
  }

  componentDidMount() {
    const { current } = this.video;
    current.addEventListener('ended', this.onEnded);
  }

  componentWillReceiveProps(nextProps) {
    this.updatePlaybackRate(nextProps.playbackRate);
  }

  componentWillUnmount() {
    const { current } = this.video();
    current.removeEventListener('ended', this.onEnded);
  }

  onEnded = () => {
    const { setPlayStatus } = this.props;
    setPlayStatus('ended');
  }

  updatePlaybackRate = (newValue) => {
    const { playbackRate } = this.props;

    if (playbackRate !== newValue) {
      this.video.current.playbackRate = newValue;
    }
  }

  render() {
    const { url } = this.props;

    return (
      <video
        className={styles.root}
        src={url}
        ref={(ref) => { this.video.current = ref; }}
      />
    );
  }
}

export default Video;
