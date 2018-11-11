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
    <a
      className={styles.loadExample}
      href="/?url=https://www.webpagetest.org/results/video/18/11/10/JK/58cc2faf46bc8572d87f7b81a0572009.1.0/video.mp4&url=https://www.webpagetest.org/results/video/18/11/10/F4/4b051178d9cf2f1f0b317733ebe05463.1.0/video.mp4"
    >
      Load example
    </a>
  </div>
);

export default Empty;
