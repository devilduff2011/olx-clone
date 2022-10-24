import Header from './Header';
import Footer from './Footer';
import React from 'react';
import { produceWithPatches } from 'immer';

const Template = (props) => {
    return(
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
   
};

export default Template;