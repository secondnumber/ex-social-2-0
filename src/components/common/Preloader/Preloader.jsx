import React from 'react';
import { connect } from 'react-redux';

class Preloader extends React.Component {
  render() {
    return <img src={this.props.loaderImage} alt={'Preloader'} />;
  }
}

let mapStateToProps = (state) => {
  return {
    loaderImage: state.app.loaderImage,
  };
};

export default connect(mapStateToProps)(Preloader);
