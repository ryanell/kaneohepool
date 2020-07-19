import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Grid verticalAlign='middle' textAlign='center' container>

          <Grid.Column width={4}>
            <Image size='small' circular src="/images/meteor-logo.png"/>
          </Grid.Column>

          <Grid.Column width={8}>
            <h1>Aloha</h1>
            <p>Due to COVID-19, the Kaneohe District Park Pool is only open for lap swimming via reservations at this
              time. Using this website, you can check the available swim slots as well as make reservations to swim.</p>
          </Grid.Column>

        </Grid>
    );
  }
}

export default Landing;
