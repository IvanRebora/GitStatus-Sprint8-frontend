import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import ProductsCat from './ProductsCat'


function ProductsCatLink(){
    return(
        <React.Fragment>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    <div className="cont-totales">
                        <ProductsCat />
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductsCatLink;