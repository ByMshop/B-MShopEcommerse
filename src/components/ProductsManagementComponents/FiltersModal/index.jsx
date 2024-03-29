import FilterIcon from "../../../assets/filter-icon.svg";
import { Dialog } from "primereact/dialog";
import { useState, useContext, useEffect } from "react";
import OrderingProducts from "../../OrderingProducts";
import CategorieSideBar from "../../CategorieSideBar";
import {Checkbox} from 'primereact/checkbox'
import QueryFiltersContext from "../../../context/filtersContext";
import "./index.css";

function FiltersModal({
  categories,
  loadingCategories,
  promotions,
  loadingPromotions,
}) {
  const [showModal, setShowModal] = useState(false);
  const [recommendedFilterCheck, setRecommendedFilterCheck] = useState(false)
  const [inactiveFilterCheck, setInactiveFilterCheck] = useState(false)
  const {searchParams, setFilter, removeFilter, getActiveFilter} = useContext(QueryFiltersContext)

  function updateRecommendedFilter(value){
    value == true? setFilter({name:"recommended", value:value}): removeFilter("recommended")
    setRecommendedFilterCheck(value)
  }

  function updateInactiveFilter(value){
    value == true? setFilter({name:"is_active", value:!value}): removeFilter("is_active")
    setInactiveFilterCheck(value)
  }

  //update the recommende and inactive filter by the searchParams 
  useEffect(() => {
    getActiveFilter("recommended") == ""?setRecommendedFilterCheck(false):setRecommendedFilterCheck(true)
    getActiveFilter("is_active") == ""?setInactiveFilterCheck(false):setInactiveFilterCheck(true)
  },[searchParams])

  return (
    <section>
      <button
        className="products-management-filters-bar-button btn-general-styles"
        onClick={() => setShowModal(true)}
      >
        <img src={FilterIcon} />
        <span>Filtros</span>
      </button>
      <Dialog
        contentClassName="categories-mobile-modal-content products-management-filters-modal"
        visible={showModal}
        position="top"
        showHeader={false}
        draggable={false}
        resizable={false}
      >
        <button
          className="close-modal-button btn-general-styles"
          onClick={() => setShowModal(false)}
        >
          X
        </button>
        <OrderingProducts />
        <CategorieSideBar
          forceMobileMode={true}
          categories={categories}
          loading={loadingCategories}
          promotions={promotions}
          loadingPromotions={loadingPromotions}
        />
        {/*products recommended filter*/}
        <div className="recommended-products-checkbox">
          <Checkbox
            id="recommended"
            aria-describedby="recommended-help"
            checked={recommendedFilterCheck}
            onChange={(e) => updateRecommendedFilter(e.checked)}
          />
          <label htmlFor="active">Recommendados</label>
        </div>
        {/*inactive products filter*/}
        <div className="recommended-products-checkbox">
          <Checkbox
            id="inactive"
            aria-describedby="inactive-help"
            checked={inactiveFilterCheck}
            onChange={(e) => updateInactiveFilter(e.checked)}
          />
          <label htmlFor="active">No Visibles</label>
        </div>
      </Dialog>
    </section>
  );
}

export default FiltersModal;
