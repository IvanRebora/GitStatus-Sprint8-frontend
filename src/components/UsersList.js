import React from 'react';

function UsersList(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.first_name}</td>
                <td>{props.last_name}</td>
                <td>{props.email}</td>
                <td><button><a href = {props.detail}>Detalle</a></button></td>
            </tr>
        </React.Fragment>
    )
}
export default UsersList;