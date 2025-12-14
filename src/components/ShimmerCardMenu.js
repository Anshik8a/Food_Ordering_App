const MenuShimmer = () => {
  return (
    <div className="max-w-3xl mx-auto p-5 animate-pulse">

      {/* Restaurant Title Shimmer */}
      <div className="h-8 w-60 bg-gray-300 rounded-md mb-3"></div>

      {/* Cuisines shimmer */}
      <div className="h-5 w-40 bg-gray-200 rounded mb-8"></div>

      {/* 3 Menu Sections */}
      {[1, 2, 3].map((_, idx) => (
        <div key={idx} className="mb-8">
          
          {/* Section Title Shimmer */}
          <div className="h-6 w-48 bg-gray-300 rounded mb-4"></div>

          {/* Item shimmer list */}
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex justify-between items-center border rounded-lg bg-gray-100 p-4 h-16 mb-3"
            >
              {/* name shimmer */}
              <div className="h-4 w-40 bg-gray-300 rounded"></div>

              {/* price shimmer */}
              <div className="h-4 w-16 bg-gray-300 rounded"></div>
            </div>
          ))}

        </div>
      ))}

    </div>
  );
};

export default MenuShimmer;