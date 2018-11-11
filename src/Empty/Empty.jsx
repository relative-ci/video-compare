import React from 'react';

import styles from './Empty.css';

const Empty = () => (
  <div className={styles.root}>
    <p className={styles.text}>
      Add video urls as a query parameters:
    </p>
    <code className={styles.code}>
      https://video-compare.relative-ci.com/?url=URL1&url=URL2
    </code>
  </div>
);

export default Empty;
