import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from './actions';
import Gallery from '../../components/Gallery';
import './styles.css';

class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
      super(props);
      this.props.fetchImages();
  }

  render() {
    return (
        <Gallery images={this.props.images} />
      );
    }
  }


function mapStateToProps(state) {
  return {
    images: state.data.images,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...homeActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)