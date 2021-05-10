import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
    return <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/restaurants/:id/update' component={UpdatePage}/>
          <Route exact path='/restaurants/:id' component={RestaurantDetailPage}/>
        </Switch>
      </Router>
    </div>
}

export default App;;