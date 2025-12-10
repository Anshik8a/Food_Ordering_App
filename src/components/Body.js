import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerCard from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(()=> {
    fetchData();
  }, []);

// const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4616829&lng=77.05011619999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const fetchData = async () => {
  const data = await fetch(
    "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
  );
    
    const json = await data.json();
  console.log(json?.data?.cards);

  // Get all cards from the API response
  const allCards = json?.data?.cards || [];

  // Combine all restaurant arrays from all cards
  const allRestaurants = [];

  allCards.forEach((card) => {
    const restaurantsInCard =
      card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    if (restaurantsInCard && Array.isArray(restaurantsInCard)) {
      allRestaurants.push(...restaurantsInCard);
    }
  });

  // Remove duplicates by restaurant ID
const uniqueRestaurants = Array.from(
  new Map(allRestaurants.map((res) => [res.info.id, res])).values()
);

setListOfRestaurants(uniqueRestaurants);
setFilteredRestaurants(uniqueRestaurants);
};

  // Show shimmer cards while loading
  if (listOfRestaurants.length === 0) {
    return (
      <div className="res-container">
        {Array(8) // default 8 shimmer cards
          .fill("")
          .map((_, index) => (
            <ShimmerCard key={index} />
          ))}
      </div>
    );
  }


  return (
    <div className="body">
      <div className="filtering">

        <div className="filter-search">
          <input type="text" className="search-box" placeholder="Enter the keywords" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
          }}/>
          <button className="search-btn" onClick={()=>{
            //i want to filter search text and update the ui
            console.log(searchText)
            const filteredRestaurant = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            // setListOfRestaurants(filteredRestaurant)
            setFilteredRestaurants(filteredRestaurant)
          }}>Search</button>
        </div>

        <div className="filter-rating">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((res) => (
          <Link key={res.info.id} to= {"restaurants/" + res.info.id}><RestaurantCard  resData={res} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
