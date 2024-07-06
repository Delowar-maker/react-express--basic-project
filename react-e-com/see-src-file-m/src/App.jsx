import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductListPage from "./pages/ProductListPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import VerifyPage from "./pages/VerifyPage.jsx";
import CartListPage from "./pages/CartListPage.jsx";
import Helper from "./utility/Helper.js";
import PageNotFound from "./pages/PageNotFound.jsx";

const App = () => {

    if(Helper.isLogin()){
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProductListPage/>}/>
                    <Route path="/cart-list" element={<CartListPage/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        );
    }else {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProductListPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/verify" element={<VerifyPage/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
};

export default App;