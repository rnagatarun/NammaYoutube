import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  {
    /**
     *
     * Header
     * Body
     *  -Sidebar
     *    --Menu Items
     *  -Main Container
     *    --ButtonList
     *    --VideoContainer
     *      ---VideoCard
     */
  }
  return (
    <Provider store={store}>
      <>
        <Header />
        <Body />
      </>
    </Provider>
  );
}

export default App;
