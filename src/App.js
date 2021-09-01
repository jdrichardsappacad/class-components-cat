import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar.js';
import FunctionalTitan from './components/FunctionalComponents/FunctionTitan.js';
import FunctionalKuiper from './components/FunctionalComponents/FunctionKuiper.js';
import Titan from './components/ClassComponents/ClassTitan.js';
import Kuiper from './components/ClassComponents/ClassKuiper.js';

const App = () => {
  return (
    <div className='main-container'>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <div className='welcome'>
            <h1>Welcome! Choose A Link Above to Begin</h1>
          </div>
        </Route>

        <Route path='/titan'>
          <FunctionalTitan />
          {/* <Titan /> */}
        </Route>

        <Route path='/kuiper'>
          <FunctionalKuiper />
          {/* <Kuiper /> */}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
