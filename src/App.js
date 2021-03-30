import './assets/styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Home from './layout/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import './i18n'
import { Suspense } from 'react'
import {Provider} from 'react-redux'
import store from './core/store/store.js'
import Loading from './component/Loading/Loading';
import Main from './layout/Main/Main';
import Base from './layout/Base/index';

function App() {
  return (
    <Provider store={store} >
    <Suspense fallback={<></>}>
<Loading />
<Base>
      <Router >
        <Route path={["/","*"]}>
          <Switch>
            <Route exact path="/" component={Home} />

            <Home>
              <Switch>
                <Redirect path="*" to="/" />

              </Switch>
            </Home>
            <Redirect path="*" to="/" />

          </Switch>
        </Route>
        <Route path={['/Header', '/Sup']}>

        <Main>
        <Switch>
                        <Route path="/Header"  />
                        <Route path="/Sup"  />
          </Switch>
        </Main>
        </Route>
      </Router>
      </Base>

    </Suspense>
    </Provider>

  )
}

export default App

