import {useState, useEffect} from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null); 
    useEffect (() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch ("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&restaurantId=" + resId);
        const json = await data.json();
        setResInfo(json.data);
    };
    return resInfo;
};
export default useRestaurantMenu;
