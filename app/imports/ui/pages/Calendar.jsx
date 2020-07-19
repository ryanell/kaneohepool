import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms


/** Renders the Page for adding a document. */
class Calendar extends React.Component {
  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Pool Times</Header>
          </Grid.Column>
        </Grid>
    );
  }
}

export default Calendar;
