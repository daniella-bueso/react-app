import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Products extends Component {
  state = {
    makeup: []
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API.getProducts()
      .then(res => this.setState({ makeup: res.data }))
      .catch(err => console.log(err));
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
              <Input name="brand" placeholder="Brand (required)" />
              <Input name="name" placeholder="Product Type (required)" />
              <FormBtn>Submit</FormBtn>
            </form>
          </Col>
          <Col size="md-10 md-offset-1 sm-12">
            <Jumbotron>
              <h1>Saved Makeup Products</h1>
            </Jumbotron>
            {/* {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List> */}
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
