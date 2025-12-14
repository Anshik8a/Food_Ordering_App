import { CDN_URL } from "../utils/common";

const RestaurantCard = ({ resData, isPromoted }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    areaName,
    sla,
  } = resData?.info;

  return (
    <div className="relative w-64">

      {isPromoted && (
        <span className="absolute top-2 left-2 z-20 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
          PROMOTED
        </span>
      )}

      <div className="w-56 h-[21.3rem] bg-gray-100 border border-gray-300 rounded-lg p-3 shadow-sm transition duration-300 hover:shadow-xl hover:scale-[1.03]">

        <img
          src={CDN_URL + cloudinaryImageId}
          className="w-full h-40 object-cover rounded-md"
          alt={name}
        />

        <h3 className="mt-2 font-semibold text-lg text-gray-900 truncate">
          {name}
        </h3>

        <h4 className="text-sm text-gray-600 truncate">
          {cuisines.join(", ")}
        </h4>

        <p className="text-sm font-medium text-gray-800">
          ⭐ {avgRating} Rating
        </p>

        <p className="text-sm text-gray-700">{costForTwo}</p>

        <h5 className="text-sm text-gray-800">📍 {areaName}</h5>

        <p className="text-sm text-gray-700">⏱ {sla?.slaString}</p>

      </div>
    </div>
  );
};

export default RestaurantCard;