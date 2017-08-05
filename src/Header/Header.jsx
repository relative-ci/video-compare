import React from 'react';
import { noop } from 'lodash';

import styles from './Header.css';

const Header = ({
  play = false,
  onPlayButtonClick = noop
}) => {
  const label = play ? 'Pause' : 'Play';

  return (
    <header className={styles.root}>
      <button
        className={styles.playButton}
        onClick={onPlayButtonClick}
      >
        {label}
      </button>
    </header>
  );
};

export default Header;
