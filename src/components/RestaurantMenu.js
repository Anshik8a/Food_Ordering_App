
import { useState, useEffect } from "react";
import ShimmerCard from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&restaurantId=" + resId
    );

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if(resInfo === null) {
   return <ShimmerCard/>  
  }

   const restaurantInfo = resInfo?.cards
    ?.map((c) => c?.card?.card)
    ?.find((c) => c?.info);

  const { name, cuisines, costForTwoMessage } = restaurantInfo?.info || {};

  const menuSections = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  // itemCards?.card?.info;
  // const {imageId} = resInfo?.cards?.[4].groupedCard?.cardGroupMap?.REGULAR?.cards?.card?.card?.itemCards?.card?.info;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>

      <h2>Menu</h2>

      {menuSections.map((section, index) => {
        const sectionTitle = section?.card?.card?.title;
        const items = section?.card?.card?.itemCards;

        // Skip if no items (some sections have none)
        if (!items) return null;

        return (
          <div key={index} className="menu-section">
            <h3>{sectionTitle}</h3>
            <ul>
              {items.map((item) => {
                const info = item?.card?.info;
                return (
                  <li key={info?.id}>
                    {info?.name}  Rs:  
                    {(info?.price || info?.defaultPrice || 0) / 100}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  ); 
};

export default RestaurantMenu;
