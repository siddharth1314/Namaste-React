import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.js";
import RestaurantCard from "./RestaurantCard.js";
import { HotelJSON } from "./Restaurant.Constants.js";

const App = () => {
   const [searchText, setSearchText] = useState("");
   const [listOfRestaurants, setlistOfRestaurants] = useState(HotelJSON);
   return (
      <div>
         <Header />
         <div className="searchInput">
            <input onChange={(e) => setSearchText(e.target.value)} type="text" value={searchText} placeholder="Search Restaurants...."></input>
            <button onClick={() => {
               const filteredList = listOfRestaurants.filter(res => res?.data?.data?.name.toLowerCase().includes(searchText));
               if(searchText.length>0){
               setlistOfRestaurants(filteredList)
               }else setlistOfRestaurants(HotelJSON);
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
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);