
const ShimmerCard = () => {
  return (
    <div className="w-56 p-3 m-2 rounded-xl bg-gray-100 shadow animate-fade">
      
      {/* Image shimmer */}
      <div className="w-full h-40 rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>

      {/* Lines */}
      <div className="flex flex-col gap-2 mt-5">
        <div className="h-5 w-2/5 rounded bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
        <div className="h-5 w-full rounded bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
        <div className="h-5 w-3/5 rounded bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
        <div className="h-5 w-full rounded bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
        <div className="h-5 w-3/5 rounded bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
        <div className="h-5 w-full rounded bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
      </div>

    </div>
  );
};

export default ShimmerCard;
