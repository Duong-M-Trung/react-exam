import Delivery from './component/Delivery.js';
import Order from './component/Order.js';
import CreateLineitem from './component/Lineitem.js';
import Lineitem from './component/Creative.js';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
// import { Table } from 'antd';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/newlineitem">
            <CreateLineitem />
          </Route>
          <Route path="/lineitem">
            <Lineitem />
          </Route>
          <Route path="/test_order">
            <Order />
          </Route>
          <Route path="/">
            <Delivery></Delivery>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
