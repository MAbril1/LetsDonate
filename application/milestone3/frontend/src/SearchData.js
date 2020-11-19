import React, { useState, useContext }  from 'react';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';

function SearchData(searchTerm) {
    // const [search, setSearch] = useState("");
    // const [items, setItems] = useState([]);

    // let searchable = {};

    // setSearch(searchTerm);

    // const makeSearch = () => {
    //     searchable["searchItem"] = search;
    //     axios.post("api/makeSearch", searchable)
    //     .then((result) => {
    //         if(!result.data.success){
    //             alert("Failed Search");
    //         }else{
    //             setItems(result.data.products);
    //             console.log(items.products);
    //         }
    //     })
    //     .catch(exception => {
    //         alert("Failed Search");
    //     })
    // }

    return console.log(searchTerm);
}

export default SearchData
