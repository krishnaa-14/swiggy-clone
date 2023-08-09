const RestaurantShimmer = () => {
    return (
        <div className="flex flex-wrap mx-4 md:mx-8 lg:mx-16 xl:mx-24 place-content-center m-">
            {Array(24).fill("").map((elem, index) => (
                <div
                    key={index}
                    className="w-96 h-56 border-solid border-2 border-black-500 bg-slate-300 p-4 m-6 animate-pulse rounded"
                ></div>
            ))}
        </div>
    );
};

export default RestaurantShimmer;
