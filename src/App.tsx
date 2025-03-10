import { BrowserRouter } from 'react-router-dom'
import RenderRoutes from './app/config/routing/RenderRoutes'
import appRoutes from './app/config/routing/routesConfig'
import { Provider } from 'react-redux'
import { store } from './app/store/store'

function App() {
  return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <RenderRoutes routes={appRoutes}/>
          </BrowserRouter>
        </Provider>
      </div>
  )
}

export default App
