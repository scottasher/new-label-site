import Home from '../pages/Home';
import Articles from '../pages/Articles';
import Show from '../pages/Articles/Show'
import About from '../pages/About';
import Contact from '../pages/Contact';
import NoMatch from '../pages/NoMatch';

export default [
    {
        key: 1,
        path: '/',
        name: 'home',
        icon: 'home',
        title: 'sidebar.home.main',
        defaultMessage: 'Home',
        component: Home
    },
    {
        key: 2,
        path: '/articles',
        name: 'articles',
        icon: 'articles',
        title: 'sidebar.articles.main',
        defaultMessage: 'Articles',
        component: Articles
    },
    {
        key: 3,
        path: '/articles/:id',
        name: 'article',
        defaultMessage: 'Article',
        component: Show,
        menuRemove: true
    },
    {
        key: 4,
        path: 'https://shop.melodiousdin.com',
        name: 'article',
        defaultMessage: 'Article',
        component: Show,
        menuRemove: true
    },
    {
        key: 5,
        path: '/about',
        name: 'about',
        icon: 'about',
        title: 'sidebar.about.main',
        defaultMessage: 'About',
        component: About
    },
    {
        key: 6,
        path: '/contact',
        name: 'contact',
        icon: 'contact',
        title: 'sidebar.contact.main',
        defaultMessage: 'Contact',
        component: Contact
    },
    {
        key: 7,
        path: '*',
        name: '404',
        defaultMessage: '404',
        component: NoMatch
    },
]