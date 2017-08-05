import React from 'react';
import qs from 'qs';

import styles from './App.css';
import Header from '../Header/Header';
import Result from '../Result/Result';

const AppLoader = () => (
  <p>Loading</p>
);

const AppResults = (props) => {
  const urls = Array.isArray(props.url)
    ? props.url
    : [props.url];

  return (
    <div className={styles.results}>
      {urls.map(url => (
        <Result
          key={url}
          play={props.play}
          url={url}
        />
      ))}
    </div>
  );
};

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: [],
      play: false
    };
  }

  componentWillMount() {
    const { url } = qs.parse(window.location.search.replace(/^\?/, ''));

    this.setState({ url });
  }

  handlePlayButtonClick = (event) => {
    event.preventDefault();
    this.setState({
      play: !this.state.play
    });
  }

  render() {
    const Component = this.state.url && this.state.url.length !== 0
      ? AppResults
      : AppLoader;

    return (
      <div className={styles.root}>
        <Header
          play={this.state.play}
          onPlayButtonClick={this.handlePlayButtonClick}
        />
        <Component
          play={this.state.play}
          url={this.state.url}
        />
      </div>
    );
  }
}

export default App;
