import { useState } from "react";
import RestaurantCard from "./RestaurantCard.js";
import { HotelJSON } from "./Restaurant.Constants.js";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [listOfRestaurants, setlistOfRestaurants] = useState(HotelJSON);
    const [filterClearButton, setFilterdClearButton] = useState(false);
    return (
        <div>
            <button onClick={() => {
                const resRating = listOfRestaurants.filter(filteredRes => filteredRes?.data?.data?.avgRating >= 4);
                setlistOfRestaurants(resRating);
                setFilterdClearButton(true);
            }}>Top Rated Restaurants</button>
            &nbsp;
            {filterClearButton &&(
                <button onClick={() => { setlistOfRestaurants(HotelJSON); setFilterdClearButton(false) }}>Clear Filter</button>
            )}
            <div className="searchInput">
                <input onChange={(e) => setSearchText(e.target.value)} type="text" value={searchText} placeholder="Search Restaurants...."></input>
                <button onClick={() => {
                    const filteredList = listOfRestaurants.filter(res => res?.data?.data?.name.toLowerCase().includes(searchText));
                    if (searchText.length > 0) {
                        setlistOfRestaurants(filteredList)
                    } else setlistOfRestaurants(HotelJSON);
                }}>Search</button>
            </div>
            <div className="restaurant-cards">
                {
                    listOfRestaurants.map(resData => (
                        <RestaurantCard key={resData?.data?.data?.id} resObj={resData} />
                    ))
                }
            </div>
        </div>
    );

};

export default Body;