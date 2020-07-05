import React from 'react';
import EditProduct from '../components/EditProduct';
import { connect } from 'react-redux';
import { editProduct, updateProduct } from '../action-creator/product';
import { Redirect } from 'react-router-dom';

class EditProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      stock: '',
      price: '',
      image: '',
      categories: [],
      redirect: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.product);
  }
  submitProduct = e => {
    e.preventDefault();
    this.props.submitForm(this.state, this.props.match.params.id);
  };
  handleChange = e => {
    if (e.target.name === 'categories') {
      var options = e.target.options;
      var value = [];
      for (var i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
          value.push(options[i].value);
        }
      }
      this.setState({
        [e.target.name]: value,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  render() {
    return (
      <EditProduct
        submitForm={this.submitProduct}
        name={this.state.name}
        description={this.state.description}
        stock={this.state.stock}
        price={this.state.price}
        image={this.state.image}
        handleChange={this.handleChange}
        user={this.props.user}
        categories={this.state.categories}
        categoriesList={this.props.categoriesList}
      />
    );
  }
}
const mapStateToProps = state => ({
  product: state.product,
  user: state.user,
  categoriesList: state.categories,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  submitForm: (prod, id) => {
    dispatch(updateProduct(prod, id));
    ownProps.history.push(`/admin/products`);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(
  EditProductContainer,
);
