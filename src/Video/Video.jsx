import React from 'react';

import styles from './Video.css';

const Video = ({ url }) => <video className={styles.root} src={url} />;

export default Video;
