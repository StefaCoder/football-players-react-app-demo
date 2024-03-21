import { useState } from "react"

const SearchBar = ({ dataObj }) => {
    const [searchText, setSearchText] = useState('')
    const [filteredDataObj, setFilteredDataObj] = useState(dataObj)


    const handleSearch = (e) => {
        const searchQuery = e.target.value
        setSearchText(searchQuery)
        const filteredData = dataObj.filter((player) => (player.role).toLowerCase() === searchQuery)
        setFilteredDataObj(filteredData)
    }


    return (
        <div className="searchDivWrapper">
            <div className="searchInputDiv">
                <input type="text"
                    value={searchText}
                    onChange={handleSearch}
                    placeholder="Search player by role"
                />
            </div>
            {Object.keys(filteredDataObj).length > 0 && <div className="filteredDataWrapper">
                    {filteredDataObj.map((p, index) => {
                        return <div key={index} className="playerCardContainer">
                            <p className="playerID">{p.playerID}</p>
                            <p><strong>Name:</strong> {p.name}</p>
                            <p><strong>Last Name:</strong> {p.lastName}</p>
                            <p><strong>Age:</strong> {p.age}</p>
                            <p><strong>Role:</strong> {p.role}</p>
                            <p><strong>Value:</strong> ${p.value}</p>
                        </div>
                    })}
            </div>}
            {Object.keys(filteredDataObj).length > 0 && <div className="backPanelBlurred"></div>}
        </div>
    )
}

export default SearchBar