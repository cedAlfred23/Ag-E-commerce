import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductDetail from "./pages/ProductDetail";
import ProductPage from "./pages/ProductPage";
import { ProductsProvider } from "./contexts/ProductContext/getProductsContext";
import { ToastContainer } from "react-toastify";
import FavoritePage from "./pages/FavoritePage";
import { FavoriteProductsProvider } from "./contexts/ProductContext/getFavoritesProducts";
import { CartProductsProvider } from "./contexts/ProductContext/getCartContext";
import OrderPage from "./pages/OrderPage";
import { OrderProvider } from "./contexts/ProductContext/OrderContext";

function App() {

  return (
    <ProductsProvider>
      <FavoriteProductsProvider>
        <CartProductsProvider>
          <OrderProvider>
     <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/myorders" element={<OrderPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/productdetail/:productId" element={<ProductDetail />} />
      </Routes>
      <ToastContainer />
    </Router>
    </OrderProvider>
    </CartProductsProvider>
    </FavoriteProductsProvider>
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
