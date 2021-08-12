import React, {Component} from 'react';

//Importar nuestro componente
import Category from './Category';


class ProductsCat extends Component{
    constructor(props){
        super(props)
        this.state ={
            metrics:[]
        }
    }


    componentDidMount() {
        fetch("http://localhost:3001/api/products")
            .then(result => result.json())
            .then(result => {

             


                this.setState({
                    metrics:[{ 
                            title: "Categoría Videojuegos",
                            color: "info",
                            value: result.meta.countByCategory.videojuegos
                        },
                        { 
                            title: "Categoría Cine",
                            color: "info",
                            value: result.meta.countByCategory.cine
                        },
                        { 
                            title: "Categoría Comics",
                            color: "info",
                            value: result.meta.countByCategory.comics
                        }]
         
    
                });
            })
    }




    render(){
        return (
            <React.Fragment>
                {/*<!-- Genres in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4 " >
                        <div className="card-header py-3 gris">
                        <h5 className="m-0 font-weight-bold text-white-800">Productos por categoría</h5>
                        </div>
                        <div className="card-body fondoCaja">
                            <div  className="row">
                                {
                                    //console.log(this.state.genresList)
                                    //pregunto si existe primero
                                    this.state.metrics && this.state.metrics.length ? this.state.metrics.map((metric, index)=>{
                                        return <Category title={metric.title} value={metric.value} key={index} />
                                    }) : null
                                                                    
                                }
                            </div>
                        </div>
                    </div>


                </div>
    
    </React.Fragment>
    )
    }
}
export default ProductsCat;