import React, { PropTypes } from 'react'
import Footer from './Footer'
import AppBar from 'material-ui/lib/app-bar'
import {Grid, Row, Col} from 'react-flexbox-grid'



import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    {/*<AddTodo />*/}
    <Grid>
      <Row>
        <AppBar
          title="Petsbook 寵物飲水即時監控系統"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </Row>
      <Row>
        <Col xsOffset={6} xs={6} md={3}>
          <VisibleTodoList />
        </Col>
      </Row>
    </Grid>
    {/*<Footer />*/}
  </div>
)

export default App

