import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Nav.js';
import FunctionalTitan from './components/FunctionalComponents/FunctionTitan.js';
import Titan from './components/ClassComponents/ClassTitan.js';
import FunctionalKuiper from './components/FunctionalComponents/FunctionKuiper.js';
import Kuiper from './components/ClassComponents/ClassKuiper.js';

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path='/'>
          <h1>Welcome</h1>
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
    </>
  );
};

export default App;
