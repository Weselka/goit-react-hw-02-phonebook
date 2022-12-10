import { Component } from 'react';
import { nanoid } from 'nanoid';

import {
  Heading,
  Container,
  Section,
  ContactForm,
  ContactList,
} from 'components';

export class App extends Component {
  static defaultProps = {
    initialContacts: [],
  };
  // static propTypes = {};

  state = {
    contacts: this.props.initialContacts,
    filter: '',
    name: '',
    number: '',
  };

  addContact = (name, number)  => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  // handleChange = e => {
  //   const { name, value } = e.currentTarget;
  //   this.setState({ [name]: value });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(this.state);

  //   this.props.onSubmit(this.state);
  //   this.reset();
  // };

  // reset = () => {
  //   this.setState({ contacts: [], name: '' });
  // };

  // nameInputId = nanoid();

  // formSubmitHandler = data => {
  //   console.log(data);
  // };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Phonebook
        </Heading>
        <Section>          
          <ContactForm onSubmit={this.addContact}
            // onSubmit={this.formSubmitHandler}
          />
          {contacts.length > 0 &&
          <ContactList
            items={contacts}
            onDelete={this.deleteContact}
          ></ContactList>
          }
        </Section>
      </Container>
    );
  }
}
