import SearchBar from "./SearchBar";

export default function SearchArea({searchText, setSearchText}) {
    return (
        <div>
            <SearchBar 
            searchText={searchText}
            setSearchText={setSearchText}
            />
        </div>
    )
}