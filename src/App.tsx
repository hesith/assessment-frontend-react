import RenderRoutes from './app/config/routing/RenderRoutes'
import appRoutes from './app/config/routing/routesConfig'

function App() {
  return (
      <div>
        <RenderRoutes routes={appRoutes}/>
      </div>
  )
}

export default App
