import { lazy } from 'react'
const Contact = lazy(() => import('page/Contact/Contact'));
const Signin = lazy(() => import('features/Login/Signin/Signin'));
const Signup = lazy(() => import('features/Login/Signup/Signup'));
const About = lazy(() => import('page/About/About'));
const Notfound = lazy(() => import('components/Notfound/Notfound'));
const Home = lazy(() => import('page/Home/Home'));
const Products = lazy(() => import('page/Products/Products'));
const Blog = lazy(() => import('page/Blog/Blog'));
const Shop = lazy(() => import('page/Shop/Shop'));
const Wishlist = lazy(() => import('features/Wishlist/Wishlist'));
const Cart = lazy(() => import('features/Cart/Cart'));
const Detail = lazy(() => import('page/Detail/Detail'));
const DashBoard = lazy(() => import('features/Login/Dashboard/DashBoard'));


export const publicRoutes = [
    {                         
        path: '/',
        component: Home
    },
    {
        path: 'products',
        component: Products
    },
    {
        path: 'shop',
        component: Shop
    },
    {
        path: 'blog',
        component: Blog
    },
    {
        path: 'about',
        component: About
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
        path: 'signup',
        component: Signup
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
        path: 'dashboard',
        component: DashBoard
    },
    {
        path: 'products/detail/:id',
        component: Detail
    },
    {
        path: 'shop/detail/:id',
        component: Detail
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