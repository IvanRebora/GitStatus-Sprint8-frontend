import React, {Component} from 'react';

//Importar nuestro componente
import UsersList from './UsersList';

class User extends Component{
    constructor(){
        super()
        this.state ={
            users : []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje
    componentDidMount(){
    

        fetch('http://localhost:3001/api/users')
        .then(respuesta =>{
            console.log(respuesta)
            return respuesta.json()
        })
        .then(users =>{
            //console.log(movies)
            this.setState({users: users.data.list})
        })
        .catch(error => console.log(error))

    }


    render(){
        return (
            <React.Fragment>
            
            <h1 className="h3 mb-2 text-gray-800 productList">Todos los usuarios en la base de datos</h1>
            
       
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Email</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    //console.log(this.state.movies)
                                    this.state.users.map((user,index)=>{
                                        return <UsersList  {...user} key={index}  />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>


    
    </React.Fragment>
    )
    }
}
export default User;
