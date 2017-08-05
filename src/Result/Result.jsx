import React from 'react';

import Video from '../Video/Video';
import styles from './Result.css';

const Placeholder = () => (
  <p className={styles.placeholder}>Result</p>
);

const Entry = (props) => {
  let Component;

  if (!props.url) {
    Component = Placeholder;
  } else {
    Component = Video;
  }

  return (
    <div className={styles.root}>
      <Component className={styles.placeholder} {...props} />
    </div>
  );
};

export default Entry;

