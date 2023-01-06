import React from "react";
import icon_24_search from "../../public/Icons/icon_24_search.svg"

function SearchBox(){
    return (<div className="searchBoxDiv">
        <input type="text" className="searchBox" placeholder="هنا ستجد ما تبحث عنه" />
        <button className="searchButton"><img src={icon_24_search} alt="your Svg" /></button>
    </div>
    )
}

export default SearchBox;