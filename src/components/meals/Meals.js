import React, {useEffect, useState} from "react";

function Meals() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [photos, setPhotos] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://www.themealdb.com/api/json/v1/1/search.php?s'
        );

        const photos = await data.json();
        setPhotos(photos.meals)
    }

    return (
        <div className="pictures">

            <h2>Meals</h2>
            <hr className="mt-2 mb-5" />
            {photos.slice(0,10).map(({strMealThumb}) =>

            <div className="row text-center text-lg-left">
                    <div className="col-lg-3 col-md-4 col-6">
                        <span className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" alt="" src={strMealThumb} />
                        </span>
                    </div>

            </div>
            )}
        </div>

            );


}

export default Meals;
