import { BrowserRouter, Routes, Route } from "react-router-dom";

//* Layout import
import DefaultLayout from "./Layouts/DefaultLayout";

//* Pages import
import HomePage from "./Pages/HomePage";
import ChiSiamoPage from "./Pages/ChiSiamoPage";
import Posts from "./Pages/PostsPage";

BrowserRouter;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage} />
          <Route path="/about" Component={ChiSiamoPage} />
          <Route path="/posts" Component={Posts} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
