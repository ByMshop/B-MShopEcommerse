import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ActiveStatusIcon from "../../../assets/active-status-icon.svg";
import DeactiveStatusIcon from "../../../assets/deactive-status-icon.svg";
import BoxIcon from "../../../assets/box-icon.svg";
import ActionButtons from "./ActionButtons";
import Loader from "../../Loader";
import BlockIcon from '../../../assets/block-icon.svg'
import "./index.css";

function ProductList({
  products,
  loading,
  selectedProducts,
  setSelectedProducts,
  handleDeleteProduct,
  processUpdateProduct,
  processDetailProduct
}) {
  return (
    
    <section className="products-management-list-table-container">
      {loading? (
        <section className="products-management-list-loader-container">
          <div>
            <Loader />
          </div>
        </section>
      ) : null}
      <DataTable
        value={products}
        tableStyle={{ minWidth: "50rem" }}
        selectionMode={"checkbox"}
        selection={selectedProducts}
        onSelectionChange={(e) => setSelectedProducts(e.value)}
        dataKey="id"
        size="small"
      >
        <Column
          selectionMode="multiple"
          headerStyle={{ width: "3rem" }}
        ></Column>
        <Column
          field="product_name"
          header="Nombre"
          body={(product) => {
            return (
              <div className="table-product-field-container">
                <img src={BoxIcon} />
                <span>{product.product_name}</span>
              </div>
            );
          }}
        ></Column>
        <Column 
          field="categoria_full_info.nombre" 
          header="Categoría"
          body={(product) => {
            return product.categoria == '' || product.categoria == null ? (
              <img src = {BlockIcon}/>
            ) : (
              product.categoria_full_info.nombre
            );
          }}
          ></Column>
        <Column
          field="is_active"
          header="Estado"
          body={(product) => {
            return product.is_active == true? (
              <img src={ActiveStatusIcon} />
            ) : (
              <img src={DeactiveStatusIcon} />
            );
          }}
        ></Column>
        <Column
          field="precio"
          header="Precio"
          body={(product) => {
            return `$${product.precio.toFixed(2)}`;
          }}
        ></Column>
        <Column
          header="Acciones"
          body={(product) => {
            return <ActionButtons 
                item={product} 
                handleDelete={handleDeleteProduct}
                handleDetil={processDetailProduct}
                handleEdit={processUpdateProduct}
                />;
          }}
        ></Column>
      </DataTable>
    </section>
  );
}

export default ProductList;
