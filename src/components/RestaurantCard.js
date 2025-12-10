import { CDN_URL } from "../utils/common"

const RestaurantCard = ({resData}) => {
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, areaName, sla} = resData?.info
    
    return (
            <div className="res-card">
                <img src={ CDN_URL + cloudinaryImageId} className="res-image" />
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <p className="ratings">Rating: {avgRating} stars</p>
                <p className="price">{costForTwo}</p>
                <h5>Address: {areaName}</h5>
                <p>Delivery-Time: {sla?.slaString}</p>
            </div>
    )
}

export default RestaurantCard;