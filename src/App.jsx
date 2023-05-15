import './App.css'
import './components/Login'
import { Login } from './components/Login'
import { Switch, Route} from 'react-router-dom'
import Listado from './components/Listado'

function App() {
  

  return (
    <>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/listado' component={Listado} />
    </Switch>
    </>
  )
}

export default App
