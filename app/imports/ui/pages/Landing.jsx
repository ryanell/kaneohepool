import React from 'react';
import { Button, Container, Grid, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Grid verticalAlign='middle' textAlign='center' container>

          <Grid.Column width={4}>
            <Image size='large' circular src="/images/dpr-logo.png"/>
          </Grid.Column>
          <Grid.Column width={8}>
            <div>
              <h1>Aloha</h1>
              <p>Due to COVID-19, the Kaneohe District Park Pool is only open for lap swimming via reservations at this
                time. This is a mock up of a website that could be used to check the available swim slots as well as
                make
                reservations to swim.</p>
            </div>
            <Container>
                <p>In order to make a reservation please make an account or sign in</p>
              <div>
                <Button as={NavLink} activeClassName="" exact to="/signin"
                        size='medium' color='black'
                        className='ui button' floated='right'>Sign in</Button>
                <Button as={NavLink} activeClassName="" exact to="/signup"
                        size='medium' color='black'
                        className='ui button' floated='right'>Create Account</Button>
              </div>
            </Container>
            <Container>
              <div>
                <p>
                  Hours of operation
                </p>
                <Image size='medium' circular src="/images/pool-hours.png"/>
              </div>
            </Container>
          </Grid.Column>

        </Grid>
    );
  }
}

export default Landing;
