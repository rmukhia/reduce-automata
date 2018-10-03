import React from 'react';
import {
  Container,
  Segment,
  Form,
  Header,
} from 'semantic-ui-react';
import axios from 'axios';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      k: '', sigma: '', delta: '', s: '', f: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  handleSubmit() {
    axios.post('/nfa',
      this.state).then((response) => {
      console.log(response);
    })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const {
      k, sigma, delta, s, f,
    } = this.state;
    return (
      <Container>
        <Segment attached="top">
          Input should be a DFA/NFA of the form
          <Header size="small"> M = (K, Σ, Δ, s , F) </Header>
          Where,
          <br />
          <b>K </b>
          is a finite set of states
          <br />
          <b>Σ </b>
          is a set of alphabets
          <br />
          <b>s ∈ K </b>
          is the initiate state
          <br />
          <b>F ⊆ K </b>
          is the set of final states
          <br />
          <b>Δ </b>
          is a finite set of transition relation,
          <b>
          K x (Σ ∪
            {'{e}'}
          ) x K
          </b>
        </Segment>
        <Segment attached="bottom">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input label="K" placeholder="States" name="k" value={k} onChange={this.handleChange} />
              <Form.Input label="Σ" placeholder="Alphabets" name="sigma" value={sigma} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input label="s" placeholder="Start States" name="s" value={s} onChange={this.handleChange} />
              <Form.Input label="F" placeholder="Final States" name="f" value={f} onChange={this.handleChange} />
            </Form.Group>
            <Form.TextArea rows={10} label="Δ" placeholder="Transition Relations/Functions" name="delta" value={delta} onChange={this.handleChange} />
            <Form.Button type="submit">Submit</Form.Button>
          </Form>
        </Segment>
      </Container>
    );
  }
}

export default InputForm;
