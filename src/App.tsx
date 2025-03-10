import { BrowserRouter } from 'react-router-dom'
import RenderRoutes from './app/config/routing/RenderRoutes'
import appRoutes from './app/config/routing/routesConfig'

function App() {
  return (
      <div>
        <BrowserRouter>
          <RenderRoutes routes={appRoutes}/>
        </BrowserRouter>
      </div>
  )
}

export default App
