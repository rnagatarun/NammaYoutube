import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />
      }
    ],
  },
]);

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
        <RouterProvider router={appRouter} />
      </>
    </Provider>
  );
}

export default App;
