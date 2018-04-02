import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Result extends Component {
  state = {
    product: {}
  };
  // When this component mounts, grab the product with the _id of this.props.match.params.id
  // e.g. localhost:3000/makeup/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getProduct(this.props.match.params.id)
      .then(res => this.setState({ product: res.data }))
      .catch(err => console.log(err));
 console.log(this.state.product) }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.product.product_type} by {this.state.product.brand}
                
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Description</h1>
              <p>
                Name: {this.state.product.name},
                Price: {this.state.product.price},
                {this.state.product.image_link},
                {this.state.product.website_link},
                Description: {this.state.product.description},
                Rating: {this.state.product.rating}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Result;
