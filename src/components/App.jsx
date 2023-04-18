import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import HomePage from "../pages/Home";
import TweetsPage from "../pages/Tweets";
import { RestrictedRoute } from "./RestrictedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/tweets"
          element={
            <RestrictedRoute redirectTo="/tweets" component={<TweetsPage />} />
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/vite-deploy/" />} />
    </Routes>
  );
}

export default App;
