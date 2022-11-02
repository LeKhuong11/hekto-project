import { lazy } from 'react'
const Contact = lazy(() => import('page/Contact/Contact'));
const Signin = lazy(() => import('features/Login/Signin/Signin'));
const About = lazy(() => import('page/About/About'));
const Notfound = lazy(() => import('components/Notfound/Notfound'));
const Home = lazy(() => import('page/Home/Home'));
const Products = lazy(() => import('page/Products/Products'));
const Blog = lazy(() => import('page/Blog/Blog'));
const Shop = lazy(() => import('page/Shop/Shop'));
const Wishlist = lazy(() => import('features/Wishlist/Wishlist'));
const Cart = lazy(() => import('features/Cart/Cart'));


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