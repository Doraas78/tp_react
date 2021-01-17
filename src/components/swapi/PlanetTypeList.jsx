import React, { useEffect, useState } from "react";


export default function PlanetTypeList({ setPlanet }) {
    let [planets, setPlanets] = useState([]);
    let [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        let lastCalled = true;
        const fetchPlanets = () => {
            fetch("https://swapi.dev/api/planets/")
                .then((response) => response.json())
                .then((data) => lastCalled && setPlanets(data["results"]));
        };
        fetchPlanets();
        return () => {
            lastCalled = false;
        };
    }, []);

    const handleSelection = (event) => {
        setPlanet(event.target.value);
        setSelectedValue(event.target.value);
    };

    return (


        <select value={selectedValue} onChange={handleSelection}>
            <option selected>Déroulez la liste</option>
            {planets.map(({ name }) => (
                <option value={name}>
                    {name}
                </option>
            ))}
        </select>




    );
}
