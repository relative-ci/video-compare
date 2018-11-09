import React from 'react';

import Video from '../Video/Video';
import styles from './Result.css';

const Placeholder = () => (
  <p className={styles.placeholder}>Result</p>
);

const Result = ({
  url = '',
  play = false,
  playbackRate = 1
}) => {
  if (!url) {
    return <Placeholder />;
  }

  return (
    <div className={styles.root}>
      <Video
        url={url}
        play={play}
        playbackRate={playbackRate}
      />
    </div>
  );
};

export default Result;
