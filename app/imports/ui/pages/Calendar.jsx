import React from 'react';
import { Grid, Segment, Header, Accordion, Form } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SubmitField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import { Reservations } from '../../api/reservation/Reservation';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  name: String,
  quantity: Number,
  condition: {
    type: String,
    allowedValues: ['excellent', 'good', 'fair', 'poor'],
    defaultValue: 'good',
  },
});

const TimeForm = (
    <Form>
      <Form.Group grouped>
        <Form.Radio label='8:00 to 8:45am' name='time' type='radio' value='8' />
        <Form.Radio label='9:00 to 9:45am' name='time' type='radio' value='9' />
        <Form.Radio label='10:00 to 10:45am' name='time' type='radio' value='10' />
        <Form.Radio label='11:00 to 11:45am' name='time' type='radio' value='11' />
        <Form.Radio label='12:00 to 12:45am' name='time' type='radio' value='12' />
        <Form.Radio label='2:00 to 2:45am' name='time' type='radio' value='2' />
        <Form.Radio label='3:00 to 3:45am' name='time' type='radio' value='3' />
        <Form.Radio label='4:00 to 4:45am' name='time' type='radio' value='4' />
      </Form.Group>
    </Form>
);

/** Renders the Page for adding a document. */
class Calendar extends React.Component {

  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  }

  constructor(props) {
    super(props);

    this.state = {
      date: '',
      time: '',
      dateTime: '',
      datesRange: '',
    };
  }

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { date, time } = data;
    const owner = Meteor.user().username;
    Reservations.insert({ date, time, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      });
  }

  handleChange = (event, { name, value }) => {
      this.setState({ [name]: value });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    const { activeIndex } = this.state;
    let fRef = null;
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Pool Schedule</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={formSchema} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <Accordion>
                <Accordion.Title
                    active={activeIndex === 0}
                    content='Monday (10/2)'
                    index={0}
                    onClick={this.handleClick}
                />
                <Accordion.Content active={activeIndex === 0} content={TimeForm} />
                <Accordion.Title
                    active={activeIndex === 1}
                    content='Tuesday (10/3)'
                    index={1}
                    onClick={this.handleClick}
                />
                <Accordion.Content active={activeIndex === 1} content={TimeForm} />
                  <Accordion.Title
                      active={activeIndex === 2}
                      content='Wednesday (10/4)'
                      index={2}
                      onClick={this.handleClick}
                  />
                  <Accordion.Content active={activeIndex === 2} content={TimeForm} />
                  <Accordion.Title
                      active={activeIndex === 3}
                      content='Thursday (10/5)'
                      index={3}
                      onClick={this.handleClick}
                  />
                  <Accordion.Content active={activeIndex === 3} content={TimeForm} />
                  <Accordion.Title
                      active={activeIndex === 4}
                      content='Friday (10/6)'
                      index={4}
                      onClick={this.handleClick}
                  />
                  <Accordion.Content active={activeIndex === 4} content={TimeForm} />
                </Accordion>
                <SubmitField value='Submit' color="green"/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default Calendar;
