import './index.css'
import {useState, useEffect, useContext} from 'react'
import QueryFiltersContext from '../../context/filtersContext';
import SearchIcon from '../../assets/search-icon.svg'

function Search() {
    const {searchParams, setFilter, getActiveFilter, removeFilter} = useContext(QueryFiltersContext)
    const [mounted, setMounted] = useState(false)
    const [searchingValue, setSearchingValue] = useState("")

    //search the product when the user ends writting on the search form
    useEffect(() => {
        if(mounted){
            let timeOut = setTimeout(() => {searchingValue == ""?removeFilter("search"):setFilter({name: "search", value:searchingValue})}, 500)
            return () => clearTimeout(timeOut)
        }
        else{
            setMounted(true)
        }
    },[searchingValue])

    useEffect(() => {
        setSearchingValue(getActiveFilter("search"))
    },[searchParams])

    return (
        <form onSubmit={(e) => e.preventDefault()} className = "search-form">
        <img src={SearchIcon} />
        <input
            placeholder="Buscar"
            onChange={(e) => setSearchingValue(e.target.value)}
            value={searchingValue}
            style={{ color: "black" }}
        />
        </form>
    );
}

export default Search;
