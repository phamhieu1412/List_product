import React from 'react';
import Home from './pages/Home';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import NotFound from './pages/NotFound';

var routes = [
    {
        path: '/',
        exact: true,
        main:() => <Home/>
    },{
        path: '/product-list',
        exact: false,
        main:() => <ProductListPage />
    },{
        path: '/product/add',
        exact: false,
        main:({history}) => <ProductActionPage history={history}/>
    },{
        path: '/product/:id/edit',
        exact: false,
        main:({match, history}) => <ProductActionPage match={match} history={history}/>
    },{
        path: '',
        exact: false,
        main:() => <NotFound />
    }
];

export default routes;