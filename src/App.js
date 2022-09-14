import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { Fragment } from "react";
import Header from "./shared/Header/Header";
import Footer from "./shared/Footer/Footer";
import SignIn from "./pages/SignIn/SignIn";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import NotFound from "./shared/NotFound/NotFound";
import SignUp from "./pages/SignUp/SignUp";
import Checkout from "./pages/Checkout/Checkout";
import RequireAuth from "./pages/RequireAuth/RequireAuth";
import ResetForm from "./pages/ResetForm/ResetForm";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/services/:serviceId"} element={<ServiceDetails />} />
        <Route path={"/sign-in"} element={<SignIn />} />
        <Route path={"/sign-up"} element={<SignUp />} />
        <Route
          path={"/checkout"}
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path={"/reset"} element={<ResetForm />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
