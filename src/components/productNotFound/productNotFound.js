import React, { Component } from 'react';
import localization from '../localization';

import AddProductInfo from '../addProductInfo';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import styles from './productNotFound.css';

class ProductNotFound extends Component {

  constructor(props) {
    super(props);

    this.code = new URLSearchParams(this.props.location.search).get('code');

    this.state = {
      enteredProduct: this.code
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.history.push(`/product/${this.state.enteredProduct}`);
  }

  onInputChange = (e) => {
    this.setState({
      enteredProduct: e.target.value
    });
  }

  render() {
    return (
    <div className="productNotFound__container">
      <h2 className="productDisplay__title not-found">{localization.productNotFound__title}</h2>
      <p> {localization.formatString(localization.productNotFound__barcode_no_results,this.code)}</p>
      <form onSubmit={this.onSubmit}>
        <p>{localization.productNotFound__enter_barcode}</p>
        <input placeholder={`${localization.productNotFound__find_input_placeholder}`} className="textInput" required type="number" onChange={this.onInputChange}/>
        <button className="btn" type="submit">{localization.productNotFound__find_button}</button>
      </form>
      <AddProductInfo />
    </div>)
  }
};

export default withRouter(ProductNotFound);
