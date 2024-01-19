import { CDN_URL } from "../utils/constants";
import { star } from "../utils/Icon";

const ResturantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const {
    name,
    cuisines,
    avgRating,
    sla,
    cloudinaryImageId,
    locality,
    aggregatedDiscountInfoV3,
  } = resData?.info;
  // console.log(resData);
  return (
    <div className="m-4 w-[250px] bg-white rounded overflow-hidden shadow-md">
      <div className="relative">
        <img
          alt="res-logo"
          className="rounded-lg w-64 h-56"
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="absolute top-15 left-0 right-0 bottom-1 flex items-center justify-center font-extrabold">
          <p className="text-white text-xl font-bold">
            {aggregatedDiscountInfoV3.header}{" "}
            {aggregatedDiscountInfoV3.subHeader}
          </p>
        </div>
      </div>
      <div className="p-2 font-sans">
        <h4 className="font-bold text-md w-60 overflow-hidden">
          <span
            style={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
            }}
          >
            {name}
          </span>
        </h4>
        <div className="flex">
          <h4 className="flex pr-2">
            {star}
            {avgRating}
          </h4>
          <h4>{sla.slaString}</h4>
        </div>
        <h5 className="font-extralight w-60 overflow-hidden">
          <span
            style={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
            }}
          >
            {cuisines.join(" , ")}
          </span>
        </h5>
        <h5 className="font-extralight w-60 overflow-hidden">
          <span
            style={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
            }}
          >
            {locality}
          </span>
        </h5>
      </div>
    </div>
  );
};

export default ResturantCard;
