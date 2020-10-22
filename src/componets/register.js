import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <div class="container-fluid">
    <br></br><br></br><br></br>
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="Username">Username</Label>
            <Input type="username" name="username" id="username" placeholder="username" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Check me out</Label>
      </FormGroup>
      <Button>Sign in</Button>
    </Form>
    </div>
  );
}

export default Example;