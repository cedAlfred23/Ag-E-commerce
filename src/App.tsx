import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductDetail from "./pages/ProductDetail";
import ProductPage from "./pages/ProductPage";
import { ProductsProvider } from "./contexts/ProductContext/getProductsContext";

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
