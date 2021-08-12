import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import Product from './Product';


function LinkProdList(){
    return(
        <React.Fragment>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    <div className="cont-totales">
                        <Product />
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}

export default LinkProdList;