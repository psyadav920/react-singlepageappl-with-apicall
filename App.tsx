import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import {Joke} from "./Joke";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [
        
      ]
    };
  }
   componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ jokes: data })
      console.log(this.state.jokes)
    })
    .catch(console.log)
  }

  render() {
    let jokeCards = this.state.jokes.map((item, index) => {
      return (
        <Col className="p-3" sm="4">
          <Joke humor={item} />
        </Col>
      );
    });

    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Joke Cards</h1>
          <p className="lead">
            Welcome to the next billion dollar app taking the world by storm
          </p>
          <hr className="my-2" />
          <p>Prepare to be amused!</p>
          <p className="lead" />
        </Jumbotron>
        <Container fluid>
          <Row>{jokeCards}</Row>
        </Container>
      </div>
    );
  }
}
