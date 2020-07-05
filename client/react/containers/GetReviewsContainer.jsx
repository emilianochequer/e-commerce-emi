import React from 'react';
import GetReviews from '../components/GetReviews';
import { connect } from 'react-redux';
import { getReviews } from '../action-creator/reviews';

class GetReviewsContainer extends React.Component {
  render() {
    return <GetReviews />;
  }
}

const mapDispatchToProps = dispatch => ({
  getReviews: productId => dispatch(getReviews(productId)),
});

const mapStateToProps = state => ({
  reviews: state.reviews,
});

export default connect(mapStateToProps, mapDispatchToProps)(GetReviews);
