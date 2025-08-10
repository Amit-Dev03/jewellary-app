import { necklaceArr } from "../../../utils/necklaceSetData";
import { useState } from "react";
import NecklaceSet from "./NecklaceSet";
import { Link } from "react-router-dom";

const Body = () => {
  // state variables
  const [neckList] = useState(necklaceArr);
  const [filteredNecklace, setFilteredNecklace] = useState(necklaceArr);
  const [searchInput, setSearchInput] = useState("");
  //handler functions
  const handleFilter = () => {
    const filterNecklaceArr = neckList.filter(
      (necklace) => necklace.rating > 4
    );
    setFilteredNecklace(filterNecklaceArr);
  };

  const handleSearch = () => {
    const searchedNecklace = neckList.filter((necklace) =>
      necklace.desc.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredNecklace(searchedNecklace);
  };

  const resetFilters = () => {
    setFilteredNecklace(necklaceArr);
    setSearchInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50 py-8">
      {/* Enhanced Header Section */}
      <div className="text-center mb-12 px-4 p-2">
        <h1
          className="text-4xl mt-2 md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-rose-500 to-purple-600 bg-clip-text text-transparent mb-2 drop-shadow-sm"
          style={{
            fontFamily: '"Great Vibes", cursive',
            fontWeight: 600,
            fontStyle: "normal",
          }}
        >
          Necklace Set
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-400 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Discover our exquisite collection of handcrafted necklaces
        </p>
      </div>

      {/*  Search and Filter Section */}
      <div className="max-w-5xl mx-auto px-4 mb-12">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/30 p-8 hover:shadow-2xl transition-all duration-300">
          {/* Filter Section */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <button
              onClick={handleFilter}
              className="group relative bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-lg">⭐</span>
                Top Rated (4.0+)
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={resetFilters}
              className="group relative bg-gradient-to-r from-slate-500 to-slate-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-lg">🔄</span>
                Show All
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <div className="text-sm text-gray-600 bg-amber-50 px-4 py-2 rounded-full border border-amber-200">
              Showing {filteredNecklace.length} of {necklaceArr.length} items
            </div>
          </div>

          {/*  Search Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative group flex-1 max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-rose-400 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <input
                type="text"
                placeholder="Search for jewelry styles..."
                value={searchInput}
                className="relative w-full px-6 py-4 pl-14 bg-white/90 backdrop-blur-sm border-2 border-transparent rounded-2xl focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all duration-300 text-gray-700 placeholder-gray-500 shadow-lg"
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
              <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-amber-500">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <button
              onClick={handleSearch}
              className="group relative bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 overflow-hidden whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-rose-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/*  Results Section */}
      <div className="max-w-7xl mx-auto px-4">
        {filteredNecklace.length > 0 ? (
          <>
            {/* Results Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {searchInput
                  ? `Results for "${searchInput}"`
                  : "Our Collection"}
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-rose-400 mx-auto"></div>
            </div>

            {/*  Necklace Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {filteredNecklace.map((card, idx) => (
                <div
                  key={idx}
                  className="group transform hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl hover:border-amber-200 transition-all duration-300">
                    <Link to={`/necklace/${idx}`}>
                      <NecklaceSet card={card} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /*  Empty State */
          <div className="text-center py-20">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 max-w-md mx-auto p-12">
              <div className="text-8xl mb-6">💍</div>
              <h3 className="text-3xl font-bold text-gray-700 mb-4">
                No jewelry found
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                We couldn't find any necklaces matching your search. Try
                different keywords or browse our full collection.
              </p>
              <button
                onClick={resetFilters}
                className="group relative bg-gradient-to-r from-amber-500 to-rose-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  <span className="text-lg">✨</span>
                  Explore All Collections
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>
    </div>
  );
};
export default Body;
