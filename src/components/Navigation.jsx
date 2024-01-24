import { Routes, Route } from "react-router-dom";
// import WelcomePage from "./WelcomePage";
import MainPage from "./MainPage";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import List from "./List";
//import Form from "./Form";

function Navigation() {
  const auth = useContext(AuthContext);
  return (
    // auth.isAuthenticated ? <WelcomePage /> :
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/list/:param?" element={<List />} />
      {/* <Route
            path="/form"
            element={auth.isAuthenticated ? <Form /> : <WelcomePage />}
          />
          <Route element={<NoFound />} /> */}
    </Routes>
  );
}

export default Navigation;
