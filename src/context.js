import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component {
  state = {
    products: [],
    filteredProducts: [],
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    confirmDialoge: false,
    confirmProduct: detailProduct,
    clearCartModal: false,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };
  getItem = (id) => {
    return this.state.products.find((x) => x.id === id);
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts, filteredProducts: tempProducts };
    });
  };
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    //const product = this.getItem(id);
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    //product.total= product.price;

    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product],
          //I made changes
          detailProduct: product,
          //I made changes
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  filterProducts = (c) => {
    var tempProducts = [...this.state.products];
    if (c !== "allproducts") {
      tempProducts = tempProducts.filter((product) => product.type === c);
    }
    this.setState(() => {
      return {
        filteredProducts: [...tempProducts],
      };
    });
  };
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  openConfirmDialoge = (id) => {
    if (id != null) {
      const product = this.getItem(id);
      this.setState(() => {
        return { confirmDialoge: true, confirmProduct: product };
      });
    }
  };
  closeConfirmDialoge = () => {
    this.setState(() => {
      return { confirmDialoge: false };
    });
  };
  openClearCartModal = () => {
    this.setState(() => {
      return { clearCartModal: true };
    });
  };
  closeClearCartModal = () => {
    this.setState(() => {
      return { clearCartModal: false };
    });
  };
  increament = (id) => {
    let tempCart = [...this.state.cart];
    const selectedPrduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedPrduct);
    const product = tempCart[index];
    product.count += 1;
    product.total = product.count * product.price;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decreament = (id) => {
    let tempCart = [...this.state.cart];
    const selectedPrduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedPrduct);
    const product = tempCart[index];
    product.count -= 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((x) => (subTotal += x.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increament: this.increament,
          decreament: this.decreament,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          filterProducts: this.filterProducts,
          openConfirmDialoge: this.openConfirmDialoge,
          closeConfirmDialoge: this.closeConfirmDialoge,
          openClearCartModal: this.openClearCartModal,
          closeClearCartModal: this.closeClearCartModal,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
export { ProductProvider, ProductConsumer };
