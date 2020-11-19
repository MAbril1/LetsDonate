import React, { useState, useContext }  from 'react';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';

function SearchData(searchTerm) {
    let searchable = {};
    let items;

    const makeSearch = () => {
        searchable["searchItem"] = searchTerm;
        axios.post("api/makeSearch", searchable)
        .then((result) => {
            if(!result.data.success){
                alert("Failed Search");
            }else{
                items = result.data.products;
                console.log(items);
            }
        })
        .catch(exception => {
            alert("Failed Search");
        })
    }

    makeSearch();

    return items;
}

export default SearchData
