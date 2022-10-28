import './styles.css';

import Header from './Header';
import Footer from './Footer';
import React from 'react';

const Template = (props) => {
    return(
        < >
            <Header />
            <div className="content">
                {props.children}
            </div>
            <Footer />
        </>
    );
   
};

export default Template;