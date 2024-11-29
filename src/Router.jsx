import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Auth from "./Pages/Auth/Auth";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
const stripePromise = loadStripe(
  "pk_test_51QPkqlG0d1BLtwtEjQGSeO6vXAQaqSQQcZU1Cr9k0MS8NTwdILbrSmhjjCnBZa9PblGBAp6CRyO5YFEaKBX2K3qb000cn82ait"
);

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/Amazon_Clone" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute msg={"you must login to pay"} redirect="/payments">
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />

        {/* <Route path="/orders" element={<Orders /> }/> */}
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must login to access your orders"}
              redirect="/orders"
            >
              {/* <Elements stripe={stripePromise}> */}
              <Orders />
              {/* </Elements> */}
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
