import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './history';
import { Home } from '../screens/home/home';
import { ProfileScreen } from '../screens/profile/profile';

export const Flow: React.FC = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route component={Home} exact path={'/'} />
        <Route component={ProfileScreen} exact path={'/Profile'} />
      </Switch>
    </ConnectedRouter>
  );
};
