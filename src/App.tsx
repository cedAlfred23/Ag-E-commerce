import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./Components/Nav";
import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import CheckoutPage from "./Pages/CheckoutPage";
import ProductDetail from "./Pages/ProductDetail";
import ProductPage from "./Pages/ProductPage";
import { ProductsProvider } from "./core/ProductContext/getProductsContext";

function App() {
  return (
    <ProductsProvider>
     <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/productdetail" element={<ProductDetail />} />
      </Routes>
    </Router>
    </ProductsProvider>
  );

  //  return (
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<Nav />}>
  //         <Route index element={<HomePage />} />
  //         <Route path="cart" element={<CartPage />} />
  //         {/* Other nested routes go here */}
  //       </Route>
  //     </Routes>
  //   </Router>
  // );
}

export default App;
