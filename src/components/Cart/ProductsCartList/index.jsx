import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TrashIcon from "../../../assets/trash-icon.svg";
import BoxIcon from "../../../assets/box-icon.svg";
import ProductQuantityController from "../ProductQuantityController";
import CartContext from "../../../context/cartContext";
import {useContext } from "react";
import './index.css'

function ProductsCartList() {
    const {
        productsCart,
        addProductToCart,
        restProductFromCart,
        deleteProductFromCart,
        calculateTotal
      } = useContext(CartContext);

    return ( 
        <DataTable
          value={productsCart}
          tableStyle={{ minWidth: "50rem"}}
          selectionMode={"checkbox"}
          dataKey="id"
          size="small"
          className="products-cart-datatable"
          emptyMessage = "No hay productos en el carrito"
        >
          <Column
            field="productName"
            header="Nombre"
            body={(product) => {
              return (
                <div className="table-product-field-container">
                  <img src={BoxIcon} />
                  <span>{product.productName}</span>
                </div>
              );
            }}
          />
          <Column
            field="img1"
            header="Imagen"
            body={(product) => {
              return (
                <img
                  className="product-cart-img"
                  alt={product.productName}
                  src={product.img1}
                />
              );
            }}
          />
          <Column
            field="price"
            header="Precio"
            body={(product) => {
              return `$${product.price.toFixed(2)}`;
            }}
          />
          <Column
            header="Cantidad"
            body={(product) => {
              return (
                <ProductQuantityController
                  item={{
                    id: product.id,
                    productName: product.productName,
                    price: product.price,
                    img1: product.img1,
                  }}
                  add={addProductToCart}
                  rest={restProductFromCart}
                  quantity={product.quantity}
                />
              );
            }}
          />
          <Column
            field="subtotal"
            header="Sub Total"
            footer = {`Total: $${calculateTotal().toFixed(2)}`}
            body={(product) => {
              return `$${product.subtotal.toFixed(2)}`;
            }}
          />
          <Column
            body={(product) => {
              return (
                <button className = "delete-product-from-cart-button">
                  <img
                    alt="trash"
                    src={TrashIcon}
                    onClick={() => deleteProductFromCart(product.id)}
                  />
                </button>
              );
            }}
          />
        </DataTable>
     );
}

export default ProductsCartList;