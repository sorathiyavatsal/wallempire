import Login from './pages/Login';
import Home from './pages/Home.js';
import Registration from './pages/Registration';
import ProductCategory from './pages/ProductCategory';

const routers = [
    { path: '/', element: <Home />, },
    { path: '/product-category/:category', element: <ProductCategory />, },
    { path: '/product-category/:category/:subcategory', element: <ProductCategory />, },
    { path: '/signIn', element: <Login /> },
    { path: '/signUp', element: <Registration /> },
    { path: '/forgetPassword', element: <Login /> },
]

export default routers;