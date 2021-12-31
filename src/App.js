import "./App.css";
import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

function App() {
  const [inputValues, setInputValues] = useState({
    username : "",
    email : "",
    password : ""
  });

  const [checkBox, setCheckBox] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const handleUsernameInput = (event) => {
    setInputValues({...inputValues, username : event.target.value})
    // console.log(inputValues);
  }

  const handleEmailInput = (event) => {
    setInputValues({...inputValues, email : event.target.value})
    // console.log(inputValues);
  }

  const handlePasswordInput = (event) => {
    setInputValues({...inputValues, password : event.target.value})
    // console.log(inputValues);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  }

  const handleCheckBox = (event) => {
    setCheckBox(true);
  }

  return (
    <React.Fragment>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="purple" textAlign="center">
            Create a new account 🤗
          </Header>
          <Form success warning error size="large" onSubmit={handleFormSubmit}>
          {submitted && <Message
            success
            header='Form Completed'
            content="You have signed up successfully"
          />}
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
                value={inputValues.username}
                onChange={handleUsernameInput}
              />
              {submitted === false && !inputValues.username && inputValues.username.length === 0 && <Message
                warning
                list={[
                  'Username field is empty',
                ]}
              />}
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
                value={inputValues.email}
                onChange={handleEmailInput}
              />
              {submitted === false && !inputValues.email && inputValues.email.length === 0 && <Message
                warning
                list={[
                  'Email field is empty',
                ]}
              />}
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                value={inputValues.password}
                onChange={handlePasswordInput}
              />
              {submitted === false && !inputValues.password && inputValues.password.length === 0 && <Message
                warning
                list={[
                  'Password field is empty',
                ]}
              />}
              <Form.Checkbox
                label='I agree to the Terms and Conditions'
                error={checkBox === false && {
                  content : 'You must agree to the terms and conditions',
                  pointing : 'above'
                }}
                onChange={handleCheckBox}
              />

              <Button color="purple" fluid size="large">
                Register
              </Button>
            </Segment>
          </Form>
          <Message
            color ="violet">
            Already have an account? <a href="#">Login</a>
          </Message>
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
}

export default App;