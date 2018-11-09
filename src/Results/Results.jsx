import React from 'react';

import styles from './Results.css';
import Result from '../Result/Result';

const Results = (props) => {
  const { play, playbackRate, url } = props;
  const urls = Array.isArray(url) ? url : [url];

  return (
    <div className={styles.root}>
      {urls.map(entry => (
        <Result
          key={entry}
          url={entry}
          play={play}
          playbackRate={playbackRate}
        />
      ))}
    </div>
  );
};

export default Results;
