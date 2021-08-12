import React, { Component } from "react";
import SmallCard from "./SmallCard";

// //componente que traiga la cantidad de productos:
class ContentRowProduct extends Component {
  constructor() {
    super();
    this.state = {
      product: {
        //esto es un estado
        color: "primary",
        titulo: "Total de productos",
        valor: 0,
        icono: "far fa-clock",
      },

      user: {
        color: "success",
        titulo: "Total de usuarios",
        valor: 0,
        icono: "fas fa-user",
      },

      category: {
        color: "warning",
        titulo: "Total de categorias",
        valor: 0,
        icono: "fas fa-cubes",
      },
    };
  }

  fetchProduct() {
    return fetch("http://localhost:3001/api/products").then((respuesta) => {
      return respuesta.json();
    });
  }

  fetchUser() {
    return fetch("http://localhost:3001/api/users").then((respuesta) => {
      return respuesta.json();
    });
  }
  fetchCategory() {
    return fetch("http://localhost:3001/api/categories").then((respuesta) => {
      return respuesta.json();
    });
  }
  componentDidMount() {
    this.fetchProduct()
      .then((products) => {
        console.log(products);

        this.setState({
          ...this.state,
          product: {
            ...this.state.product,

            valor: products.meta.total,
          }
        });
      })
      .catch((error) => console.log(error));

    this.fetchUser()
      .then((users) => {
        console.log(users);

        this.setState({
          ...this.state,
          user: {
            ...this.state.user,

            valor: users.meta.total,
          },
        });
      })
      .catch((error) => console.log(error));

      this.fetchCategory()
          .then((categories) => {
            console.log(categories);
    
            this.setState({
              ...this.state,
              category: {
                ...this.state.category,
                valor:
                  categories.meta.total
              },
            });
          })
          .catch((error) => console.log(error));
  }


  render() {
    //console.log(this.state.product)
    return (
      <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
          {this.state.product.valor ? (
            <SmallCard {...this.state.product} />
          ) : (
            ""
          )}
          {this.state.user.valor ? <SmallCard {...this.state.user} /> : ""}
          {this.state.category && this.state.category.valor ? (
            <SmallCard {...this.state.category} />
          ) : (
            ""
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default ContentRowProduct;