import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DataStructure from './DataStructure'

const GetData = () => {
    const [getCharacter, setCharacter] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.co/api/people/`)
        .then(response => {
            setCharacter(response.data.results);
            console.log(response.data.results);
        })
        .catch(error => {
            console.log('Something went wrong :(', error);
        })//closes .catch
    }, [])//end of useEffect
    
    return(
        <div>
            {getCharacter.map((character) => {
                return (
                    <DataStructure key={character.index} name={character.name} birth_year={character.birth_year} gender={character.gender} height={character.height} created={character.created}/>
                )
            })}
        </div>
    )
}//end of component function

export default GetData; 