// import MeghanaFoodsImg from "../assests/img/meghana-food-img.jfif"

const RestaurantCard = ({ name, img, cuisines }) => {
    return (
      <div className="max-w-s rounded-lg overflow-hidden shadow-md bg-white p-4">
        <img className="w-full h-56 object-cover" src={img} alt={name} />
        <div className="px-4 py-3">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-gray-600 text-sm">{cuisines}</p>
        </div>
      </div>
    );
  };
  
export default RestaurantCard;
