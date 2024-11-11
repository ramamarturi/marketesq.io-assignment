import {Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Discover from './components/Discover'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
// import Contact from './components/Contact'
// import NotFound from './components/NotFound'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/discover" component={Discover} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/about" component={AboutUs} />
    </Switch>
  </>
)

export default App
