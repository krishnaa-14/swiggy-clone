import RestaurantCard from './RestaurantCard';
import {useState, useEffect } from "react";
import {SWIGGY_RESTAURANTS_URL, SWIGGY_RESTAURANT_IMG_URL} from '../constants';
import React from 'react';
import RestaurantShimmer from './RestaurantShimmer';


const Body = () => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        getRestaurantData();
    }, [])

    const getRestaurantData = async () => {
        const data = await fetch(SWIGGY_RESTAURANTS_URL);
        const json = await data.json();
        // console.log(json);
        // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    // return <RestaurantShimmer></RestaurantShimmer>

    if(restaurants?.length === 0) {
      return <RestaurantShimmer />;
    }

    return (
        <React.Fragment>
          <div className="flex flex-wrap mx-4 md:mx-8 lg:mx-16 xl:mx-24 place-content-center">
            {restaurants?.map((restaurant, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 m-5">
                <RestaurantCard
                  name={restaurant.info.name}
                  img={SWIGGY_RESTAURANT_IMG_URL + restaurant.info.cloudinaryImageId}
                  cuisines={restaurant.info.cuisines}
                />
              </div>
            ))}
          </div>
        </React.Fragment>
    );
}

export default Body;