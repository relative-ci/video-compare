import React from 'react';

import Video from '../Video/Video';
import styles from './Results.css';

const Results = (props) => {
  const {
    playbackRate,
    urls,
    getAddVideo,
    getSetPlayStatus
  } = props;

  return (
    <div className={styles.root}>
      {urls.map((url, index) => {
        const key = index;

        return (
          <div
            key={key}
            className={styles.item}
          >
            <Video
              url={url}
              playbackRate={playbackRate}
              addVideo={getAddVideo(index)}
              setPlayStatus={getSetPlayStatus(index)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Results;
