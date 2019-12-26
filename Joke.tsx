import React from "react";
import { Card, CardBody, CardTitle, CardText, Button, Fade } from "reactstrap";

export class Joke extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fadeIn: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn
    });
  }

  render() {
   
    let { setup, punchline } = this.props.humor;
     console.log(setup)
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{setup}</CardTitle>
            <Button color="primary" onClick={this.toggle}>
              Laugh
            </Button>
            <Fade in={this.state.fadeIn} className="my-2">
              <CardText>{punchline}</CardText>
            </Fade>
          </CardBody>
        </Card>
      </div>
    );
  }
}
