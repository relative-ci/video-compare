import React from 'react';

import Video from '../Video/Video';
import styles from './Results.css';

const Results = (props) => {
  const { play, playbackRate, url } = props;
  const urls = Array.isArray(url) ? url : [url];

  return (
    <div className={styles.root}>
      {urls.map(entry => (
        <div
          key={entry}
          className={styles.item}
        >
          <Video
            url={entry}
            play={play}
            playbackRate={playbackRate}
          />
        </div>
      ))}
    </div>
  );
};

export default Results;
