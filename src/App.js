import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import {StartPage, PageNotFound } from './containers'
import TranslationPage from './containers/TranslationPage'
import ProfilePage from './containers/ProfilePage'
import Layout from './layout/index'
import './styles/App.css';
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={StartPage} />
          <PrivateRoute path={"/profile"} exact component={ProfilePage} />
          <PrivateRoute path={"/translation"} exact component={TranslationPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
