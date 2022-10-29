import Notfound from 'components/Notfound/Notfound'
import Home from 'page/Home/Home'
import Pages from 'page/Pages/Pages'
import Products from 'page/Products/Products'
import Blog from 'page/Blog/Blog'
import Shop from 'page/Shop/Shop'
import Contact from 'page/Contact/Contact'
import Signin from 'features/Login/Signin/Signin'
import Wishlist from 'features/Wishlist/Wishlist'
import Cart from 'features/Cart/Cart'

export const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: 'pages',
        component: Pages
    },
    {
        path: 'products',
        component: Products
    },
    {
        path: 'blog',
        component: Blog
    },
    {
        path: 'shop',
        component: Shop
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'login',
        component: Signin
    },
    {
        path: 'wishlist',
        component: Wishlist
    },
    {
        path: 'cart',
        component: Cart
    },
    {
        path: '*',
        component: Notfound
    },
]

export const priviteRoutes = [
    {
        path: '/cart',
        component: ''
    },
    {
        path: 'bill',
        component: ''
    },
    {
        path: 'complate',
        component: ''
    },
    {
        path: 'pay',
        component: ''
    },
    
]