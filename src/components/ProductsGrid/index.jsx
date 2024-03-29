import Loader from "../Loader";
import ProductCard from "../ProductCard";
import { useState, useContext } from "react";
import "./index.css";
import QueryFiltersContext from "../../context/filtersContext";
import Paginator from "../Paginator";
import {useGetProducts} from '../../hooks/useGetProducts'

export default function ProductsGrid({activateProductdetails}) {
  const [numOfProducts, setNumOfProducts] = useState(0)
  const {searchParams, setFilter, getActiveFilter} = useContext(QueryFiltersContext)
  const {products, loading} = useGetProducts({searchParams:searchParams, setNumOfProducts:setNumOfProducts})

  return (
    <>
      {loading ? (
        <section className="products-loader-container">
            <div>
                <Loader />
            </div>
        </section>
      ) : 
      <section className = "products-grid-and-paginator-container">
        <div className="products-grid">
          {products !== null && products !== undefined ? (
            <>
              {products.length > 0 ? (
                products.map((product) => (
                  <ProductCard key={product.id} {...product} isInStore = {true}  onClick = {()=>activateProductdetails(product)} />
                ))
              ) : (
                <div className="products-grid-not-found-message">
                  <strong>No hay productos</strong>
                </div>
              )}
            </>
          ) : (
            <div className="products-grid-not-found-message">
              <strong>No hay productos</strong>
            </div>
          )}
        </div>
        <Paginator 
          numOfProducts={numOfProducts}
          setFilter={setFilter}
          getActiveFilter={getActiveFilter}
          products={products}
          />
      </section>
      }
    </>
  );
}
