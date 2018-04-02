import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
import { Input, FormBtn } from "../../components/Form";

class Products extends Component {
  state = {
    brand: "",
    product_type: "",
    price: "",
    makeup: [],
    error: ""
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API.getProducts()
      .then(res => 
        this.setState({ makeup: res.data, brand: "", product_type: "", price: "" })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });   
    console.log(name)
    };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getProduct(this.state.brand, this.state.product_type);
    if (this.state.brand && this.state.product_type && this.state.price) {
      API.saveProduct({ 
        brand: this.state.brand,
        product_type: this.state.product_type,
        price: this.state.price
      })
      .then(res => API.getProduct())
      .catch(err => console.log(err));
  }
};

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-10 md-offset-1">
            <Jumbotron>
              <h1 className="text-center">Find the makeup item you need!</h1>
            </Jumbotron>
            <form>
              <Input 
                value={this.state.brand}
                onChange={this.handleInputChange} 
                name="brand" 
                placeholder="Brand (required)" 
              />
              <Input 
                value={this.state.product_type}
                onChange={this.handleInputChange} 
                name="product_type" 
                placeholder="Product Type (required)" 
              />
              <FormBtn 
                disabled={!(this.state.brand && this.state.product_type)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-10 md-offset-1 sm-12">
            <Jumbotron>
              <h1 className="text-center">My Makeup List</h1>
            </Jumbotron>
            {this.state.makeup.length ? (
              <List>
                {this.state.makeup.map(makeup => (
                  <ListItem key={makeup.id}>
                    <Link to={"/makeup/" + makeup.id}>
                      <strong>
                          {makeup.product_type} by {makeup.brand}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteProduct(makeup.id)}/>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Products;
