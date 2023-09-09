import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import useTitle from '../hooks/useTitle';
import Footer from '../Footer/Footer';

const Main = () => {
    useTitle('Home')
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;