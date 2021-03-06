import React from 'react';

function ProductsList(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{"$" + props.price}</td>
                <td>{props.category}</td>
                <td>{props.brand}</td>
                <td>{props.discount + "%"}</td>

            </tr>
        </React.Fragment>
    )
}
export default ProductsList;