import React from 'react';
import { noop } from 'lodash';

import styles from './Header.css';

const Header = ({
  status,
  playbackRate = 1,
  onPlayButtonClick = noop,
  onPlaybackRateChange = noop
}) => {
  const label = status === 'play' ? 'Pause' : 'Play';
  const playbackRates = [0.5, 1, 2];

  return (
    <header className={styles.root}>
      <select
        className={styles.playbackRate}
        onChange={onPlaybackRateChange}
        defaultValue={playbackRate}
      >
        {playbackRates.map(item => (
          <option
            key={item}
            value={item}
          >
            {`${item}x`}
          </option>
        ))}
      </select>
      <button
        className={`ui-button ui-button--small ${styles.playButton}`}
        onClick={onPlayButtonClick}
        type="button"
      >
        {label}
      </button>
    </header>
  );
};

export default Header;
