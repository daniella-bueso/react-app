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
    products: [],
    error: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });   
    console.log(name)
    };

    getProduct = () => {
      API.getProduct({
        brand: this.state.brand,
        product_type: this.state.product_type,
      })
      .then(res => 
        this.setState({
          products: res.data,
          message: !res.data.length
            ? "No New Products Found, try a different one"
            : ""
          }),
      )
      .catch(err => console.log(err));
    };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getProduct();
    
  };
  
  handleProductSave = id => {
    const product = this.state.products.find(product => product.id === id);
    API.saveProduct(product).then(res => this.getProduct())
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
              <h1 className="text-center">Results</h1>
            </Jumbotron>
            {this.state.products.length ? (
              <List>
                {this.state.products.map(product => (
                  <ListItem 
                    key={product.id}
                    id={product.id}
                    brand={product.brand}
                    name={product.name}
                    url={product.product_link}
                    handleClick={this.handleProductSave}
                    buttonText="Save Product"
                  >
                  <DeleteBtn onClick={() => this.deleteProduct(product.id)}/>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3 className="text-center">{this.state.message}</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Products;
