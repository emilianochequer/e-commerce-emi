import React from 'react';
import AddReview from '../components/AddReview';
import { connect } from 'react-redux';
import { setReview } from '../action-creator/review';

class AddReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      star: 0,
      userId: props.userId,
      productId: props.productId,
    };
    console.log('state', this.state);
  }
  submitReview = e => {
    e.preventDefault();
    console.log('id', this.props.productId);
    this.props.setReview(this.props.productId, this.state);
    this.setState({
      title: '',
      description: '',
      star: 0,
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <AddReview
        submitForm={this.submitReview}
        title={this.state.title}
        description={this.state.description}
        star={this.state.star}
        handleChange={this.handleChange}
        history={this.props.history}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  userId: 1, // state.user.id
  productId: Number(ownProps.match.params.id),
  history: ownProps.history,
});

const mapDispatchToProps = dispatch => ({
  setReview: (productId, review) => dispatch(setReview(productId, review)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewContainer);
