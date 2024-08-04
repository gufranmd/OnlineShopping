

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import SingleFeatured from "./SingleFeatured";
import AllProduct from "./AllProduct";
import SingleProduct from "./SingleProduct";
import NoteState from "./NoteState";
import Mycart from "./Mycart";
import AddtoCart from "./AddtoCart";
import { Auth0Provider } from "@auth0/auth0-react";
import CheckoutForm from "./CheckoutForm";
import PrivateRoute from "./PrivateRoute";
function App() {

  // Domain: dev-kn4gkc3fmxkt5fyv.us.auth0.com
  //CLientID: cDRvYA5Jc1jh0xnnFJ0yXTAilsE1lVcQ
  return (
    <Auth0Provider
    domain="dev-kn4gkc3fmxkt5fyv.us.auth0.com"
clientId="cDRvYA5Jc1jh0xnnFJ0yXTAilsE1lVcQ"
authorizationParams={{
 redirect_uri:window.location.origin
}}
>
    <NoteState>
 <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="allProducts" element={<AllProduct/>}/>
        <Route path="singleProduct/:id" element={<SingleFeatured />}/>
        <Route path="mySingleProduct/:id" element={<SingleProduct />}/>
        <Route path="cart" element={<Mycart/>}/>
        <Route path="checkout" element={ <PrivateRoute/>}>
        </Route>
      </Routes>
      </BrowserRouter>
      </NoteState>
      </Auth0Provider>
  );
}

export default App;
