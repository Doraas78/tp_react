import React, { useState } from 'react';

import PlanetCharacteristicsList from "./PlanetCharacteristicsList";
import PlanetTypeList from "./PlanetTypeList";




function Swapi() {
    let [selectedValue, setSelectedPlanet] = useState("");
    let [selectedPokemonUrl, setSelectedPokemonUrl] = useState(null);

    return (

        <div className="Swapi">
            <h2>Dans quelle planète souhaiteriez-vous voyager?</h2>
            <hr className="mt-2 mb-5" />
    <header className="App-header">

        <PlanetTypeList setPlanet={setSelectedPlanet} />
        <PlanetCharacteristicsList type={selectedValue} setPokemonUrl={setSelectedPokemonUrl} />



    </header>
    </div>
    );



}


export default Swapi;