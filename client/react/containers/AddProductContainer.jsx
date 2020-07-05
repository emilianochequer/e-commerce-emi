import React from 'react';
import AddProduct from '../components/AddProduct';
import { connect } from 'react-redux';
import { fetchAddProduct } from '../action-creator/product';

class AddProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      stock: '',
      price: '',
      image: '',
      categories: [],
    };
    this.getFile = this.getFile.bind(this);
  }

  getFile(file) {
    this.setState({ image: file });
  }

  submitProduct = e => {
    e.preventDefault();
    this.props.addProduct(this.state);
    this.setState({
      name: '',
      description: '',
      stock: '',
      price: '',
      image: '',
      categories: [],
    });
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
      <AddProduct
        submitForm={this.submitProduct}
        name={this.state.name}
        description={this.state.description}
        stock={this.state.stock}
        price={this.state.price}
        image={this.state.image}
        handleChange={this.handleChange}
        user={this.props.user}
        getFile={this.getFile}
        categories={this.props.categories}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
  addProduct: prod => dispatch(fetchAddProduct(prod)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  AddProductContainer,
);
