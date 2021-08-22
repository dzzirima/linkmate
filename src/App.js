
import { useSelector } from 'react-redux'
import { Switch , Route , Link ,BrowserRouter as Router } from 'react-router-dom'
import Calculator from './components/Calculator/Calculator'
import Layout from './components/Layout'
import { Create } from './pages/Create'
import { Home } from './pages/Home'
import Links from './pages/Links'
import Scripts from './pages/Scripts'


function App() {
  const count = useSelector((state) =>state.counter.count)
  return (

    <>
      <h2>The Count is : {count}</h2>
      <Calculator/>

    </>
    
    


    // <Router>
    //   <Switch>
    //     <Layout>
    //         <Route path ="/Create">
    //           <Create/>
    //         </Route>
    //         <Route exact path = "/Home">
    //           <Home/>
    //         </Route>
    //         <Route exact path = "/Scripts">
    //           <Scripts/>
    //         </Route>
    //         <Route path ="/Links">
    //           <Links/>
    //         </Route>
    //     </Layout>
    //   </Switch>
    // </Router>
  );
}
export default App;
