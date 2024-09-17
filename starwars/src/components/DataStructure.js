//import React, {useState, useEffect} from 'react';
//import axios from 'axios';
import React from 'react'
import styled from 'styled-components'

const CardBack = styled.div`
    margin: 0 25% 30% 25%;
    padding: 20px;
    border-radius: 20px;
    color: white;
    background: black;
    box-shadow: 2% 4% grey;
    width: 50%;
`;

const CardTitle = styled.h1`
    color: #FFBF00;
    border-bottom: 1px solid orange;
`;

const CardName = styled.h2`
    color: hotpink;
`;

const CardPars = styled.p`
    font-size: 1.5 rem
`;

const DataStructure = (props) => {
    return (
        <CardBack>
            <CardTitle>CHARACTERS</CardTitle>
            <CardName>{props.name}</CardName>
            <CardPars>{props.gender}</CardPars>
            <CardPars>Born:{props.birth_year}</CardPars>
            <CardPars>Height:{props.height}</CardPars>
            <CardPars>Creation ID: {props.created}</CardPars>
        </CardBack>
    )
}

export default DataStructure