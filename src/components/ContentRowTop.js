import React from 'react';

import ProductsCat from './ProductsCat';

import LastProduct from './LastProduct';
import ContentRowProduct from './ContentRowProduct';


function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Product-->*/}
					<ContentRowProduct />
					{/*<!-- End  Row Product -->*/}
					
	
					{/*<!-- Content Row Last Product in Data Base -->*/}
					<div className="row">
						<LastProduct />
						
						{/*<!-- Productos por categoria -->*/}
						<ProductsCat /> 
						{/*<!--End Productos por categoria-->*/}

						
					
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;