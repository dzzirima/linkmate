
import { Switch , Route , Link ,BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/Layout'
import { Create } from './pages/Create'
import { Home } from './pages/Home'
import Links from './pages/Links'
import Scripts from './pages/Scripts'

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
            <Route path ="/Create">
              <Create/>
            </Route>
            <Route exact path = "/Home">
              <Home/>
            </Route>
            <Route exact path = "/Scripts">
              <Scripts/>
            </Route>
            <Route path ="/Links">
              <Links/>
            </Route>
        </Layout>
      </Switch>
    </Router>
  );
}
export default App;
