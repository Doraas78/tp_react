import React, { useEffect, useState } from "react";

export default function PlanetCharacteristicsList({ type }) {
    let [details, setDetails] = useState([]);

    useEffect(() => {
        let lastCalled = true;
        const fetchData = async () => {
            fetch(`https://swapi.dev/api/planets/?search=${type}`)
                .then((response) => response.json())
                .then((data) => lastCalled && setDetails(data["results"]))
                .catch((e) => console.error(e));
        };

        fetchData();

        return () => {
            lastCalled = false;
        };
    }, [type]);
    console.log(type);
    return (
        <div className="container">
            {details?.slice(0,1).map(({ name,
                               rotation_period, orbital_period,
                               diameter,climate,gravity,terrain,
                               surface_water,population,created,
                               edited,}) =>
                <div className="card">
                    <span>{name}</span>
                    <div className="card-body">
                        <span className="card-title"><b>Rotation period: </b>{rotation_period}</span><br/>
                        <span className="card-title"><b>Orbital Period: </b>{orbital_period}</span><br/>
                        <span className="card-title"><b>Diameter: </b>{diameter}</span><br/>
                        <span className="card-title"><b>Climate: </b>{climate}</span><br/>
                        <span className="card-title"><b>Gravity: </b>{gravity}</span><br/>
                        <span className="card-title"><b>Terrain: </b>{terrain}</span><br/>
                        <span className="card-title"><b>Surface Water: </b>{surface_water}</span><br/>
                        <span className="card-title"><b>Population: </b>{population}</span><br/>
                        <span className="card-title"><b>Date of creation: </b>{created}</span><br/>
                        <span className="card-title"><b>Date of edition: </b>{edited}</span>


                    </div>
                </div>



            )}
        </div>
    );
}
