import React from 'react';
import { connect } from 'react-redux';
import Title from './Title';

class TitleContainer extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Title {...this.props} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {};
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TitleContainer);
