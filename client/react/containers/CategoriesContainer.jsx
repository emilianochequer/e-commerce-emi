import React from 'react';
import CategoriesTable from '../components/CategoriesTable';
import { connect } from 'react-redux';
import { removeCategory } from '../action-creator/categories';
import { hideModal } from '../utils';
import { fetchAddCategory } from '../action-creator/categories';
import { updateCategory } from '../action-creator/categories';

class CategoriesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  submitCategory = e => {
    e.preventDefault();
    this.props.addCategory(this.state);
    this.setState({
      name: '',
    });
  };

  editCategory = (id, e) => {
    e.preventDefault();
    this.props.editCategory(id, this.state);
    this.setState({
      name: '',
    });
  };

  addCategory = e => {
    e.preventDefault();
    this.props.addCategory(this.state);
    this.setState({
      name: '',
    });
  };

  handleChange = e => {
    this.setState({
      name: e.target.value,
    });
  };

  updateState = newState => {
    this.setState(newState);
  };

  render() {
    return (
      <CategoriesTable
        addCategory={this.addCategory}
        editCategory={this.editCategory}
        removeCategory={this.props.removeCategory}
        categories={this.props.categories}
        user={this.props.user}
        handleChange={this.handleChange}
        name={this.state.name}
        updateState={this.updateState}
        submitCategory={this.submitCategory}
      />
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeCategory: categoryId => {
    hideModal();
    dispatch(removeCategory(categoryId));
  },
  addCategory: category => dispatch(fetchAddCategory(category)),
  editCategory: (id, category) => {
    hideModal();
    dispatch(updateCategory(id, category));
  },
});

const mapStateToProps = state => ({
  categories: state.categories,
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  CategoriesContainer,
);
