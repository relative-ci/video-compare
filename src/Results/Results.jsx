import React from 'react';

import styles from './Results.css';
import Result from '../Result/Result';

const Results = (props) => {
  const urls = Array.isArray(props.url)
    ? props.url
    : [props.url];

  return (
    <div className={styles.root}>
      {urls.map(url => (
        <Result
          key={url}
          url={url}
          play={props.play}
          playbackRate={props.playbackRate}
        />
      ))}
    </div>
  );
};

export default Results;
