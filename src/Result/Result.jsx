import React from 'react';

import styles from './Result.css';

const Placeholder = () => (
  <p className={styles.placeholder}>Result</p>
);

const Video = ({ url = '' }) => (
  <video src={url} />
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
      <Component {...props} />
    </div>
  );
};

export default Entry;

