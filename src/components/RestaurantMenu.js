import MenuShimmer from "./ShimmerCardMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return (
      <MenuShimmer />
    );
  }

  const restaurantInfo = resInfo?.cards
    ?.map((c) => c?.card?.card)
    ?.find((c) => c?.info);

  const { name, cuisines, costForTwoMessage } = restaurantInfo?.info || {};

  const menuSections =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <div className="max-w-3xl mx-auto p-5">
      {/* Restaurant Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>

      {/* Cuisines */}
      <p className="text-gray-600 text-lg mb-6">
        {cuisines?.join(", ")} • {costForTwoMessage}
      </p>

      {/* Menu Header */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
        Menu
      </h2>

      {/* Menu Sections */}
      {menuSections.map((section, index) => {
        const sectionTitle = section?.card?.card?.title;
        const items = section?.card?.card?.itemCards;

        if (!items) return null;

        return (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              {sectionTitle}
            </h3>

            <ul className="space-y-3">
              {items.map((item) => {
                const info = item?.card?.info;

                return (
                  <li
                    key={info?.id}
                    className="p-4 border rounded-lg shadow-sm bg-white flex justify-between"
                  >
                    <span className="font-medium text-gray-700">
                      {info?.name}
                    </span>

                    <span className="text-gray-900 font-semibold">
                      ₹{(info?.price || info?.defaultPrice || 0) / 100}
                    </span>
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
