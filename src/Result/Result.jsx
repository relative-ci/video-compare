import React from 'react';

import Video from '../Video/Video';
import styles from './Result.css';

const Placeholder = () => (
  <p className={styles.placeholder}>Result</p>
);

const Entry = ({
  url = '',
  play = false
}) => {
  if (!url) {
    return <Placeholder />;
  }

  return (
    <div className={styles.root}>
      <Video
        url={url}
        play={play}
      />
    </div>
  );
};

export default Entry;

