import { IMAGE_URL } from "./Restaurant.Constants";

const RestaurantCard = (props) => {
    const { resObj } = props;
    const { name, cuisines, avgRating, area, cloudinaryImageId } = resObj?.data?.data

    return (
        <div>
            <div className="card-container">
                <img src={IMAGE_URL + cloudinaryImageId} className="image-banner" />
                <div className="info-container">
                <h2>{name}</h2>
                <p className="cuisines">{cuisines.join(',')}</p>
                <h4>Rating: {avgRating}</h4>
                <h4>Location: {area}</h4>
                </div>
            </div>
        </div>
    );
}

export default RestaurantCard;