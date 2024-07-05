import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartListPage from "./pages/CartListPage";
import LoginPage from "./pages/LoginPage";
import PageNotFound from "./pages/PageNotFound";
import ProductListPage from "./pages/ProductListPage";
import VerifyPage from "./pages/VerifyPage";
import ValidationHelper from "./utility/ValidationHelper";
const App = () => {
  if (ValidationHelper.isLogin()) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/cart-list" element={<CartListPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
};

export default App;

// 2:6
