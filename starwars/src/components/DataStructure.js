//import React, {useState, useEffect} from 'react';
//import axios from 'axios';
import React from 'react'

const DataStructure = (props) => {
    return (
        <div>
            <h1>CHARACTERS</h1>
            <h2>{props.name}</h2>
            <p>{props.gender}</p>
            <p>Born:{props.birth_year}</p>
            <p>Height:{props.height}</p>
            <p>Creation ID: {props.created}</p>
        </div>
    )
}

export default DataStructure