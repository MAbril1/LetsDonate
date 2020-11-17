import React, { Component } from 'react';

class ProductPost extends Component {
  render() {
    return <h1>{this.props.location.name}</h1>;
  }
}
export default ProductPost;