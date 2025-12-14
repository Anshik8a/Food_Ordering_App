import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerCard from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
 console.log(listOfRestaurants);
  useEffect(() => {
    fetchData();
  }, []);

  const isPromoted = (res) => res?.info?.avgRating > 4.5;

  const fetchData = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const allCards = json?.data?.cards || [];

    const allRestaurants = [];

    allCards.forEach((card) => {
      const restaurantsInCard =
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (restaurantsInCard && Array.isArray(restaurantsInCard)) {
        allRestaurants.push(...restaurantsInCard);
      }
    });

    const uniqueRestaurants = Array.from(
      new Map(allRestaurants.map((res) => [res.info.id, res])).values()
    );

    setListOfRestaurants(uniqueRestaurants);
    setFilteredRestaurants(uniqueRestaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1 className="text-center mt-10 text-xl font-semibold">
        Looks like you are offline!! Please check your internet connection
      </h1>
    );

  // Show shimmer cards while loading
  if (listOfRestaurants.length === 0) {
    return (
      <div className="flex flex-wrap gap-5 mt-5 justify-center items-center w-full">
        {Array(8)
          .fill("")
          .map((_, index) => (
            <ShimmerCard key={index} />
          ))}
      </div>
    );
  }

  return (
    <div className="p-5">
      
      {/* Filter Section */}
      <div className="flex justify-center flex-wrap items-center gap-4 mb-6">

        {/* Search Box */}
        <div className="flex gap-3">
          <input
            type="text"
            className="border px-3 py-2 rounded-md shadow w-60 focus:ring focus:ring-blue-300"
            placeholder="Enter the keywords"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        {/* Filter by Rating */}
        <div>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
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

      {/* Restaurant Cards */}
      <div className="flex flex-wrap gap-6 mt-7 justify-center items-center w-full">
        {filteredRestaurants.map((res) => (
          <Link key={res.info.id} to={"restaurants/" + res.info.id}>
            <RestaurantCard
              resData={res}
              isPromoted={isPromoted(res)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};


export default Body;
