import { useContext } from "react"
import { SearchTextContext } from "./SearchTextContext"

export default function SearchBar() {
    const {searchText, setSearchText} = useContext(SearchTextContext)
    
    return (
        <input 
        type="text" 
        className="search-bar"
        value={searchText}
        placeholder="Search"
        onChange={(e)=> setSearchText(e.target.value)}
        />
    )
}