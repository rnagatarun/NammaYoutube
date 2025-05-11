import './index.css'
import Header from './components/Header'
import Body from './components/Body'

function App() {

  return (
    <>
      {/**
       * 
       * Header
       * Body
       *  -Sidebar
       *    --Menu Items
       *  -Main Container
       *    --ButtonList
       *    --VideoContainer
       *      ---VideoCard
      */}
      <Header />
      <Body />
    </>
  )
}

export default App
