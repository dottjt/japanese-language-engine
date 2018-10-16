- prettify to project. 
- router 5

- react-onclickoutside
- tslint 
- lint-staged
- jest unit tests
- jss
- typeorm
- feathersjs. 

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={6} md={3}>
            Hello, world!
          </Col>
        </Row>
      </Grid>
    );
  }
}
