import React from 'react';

const Search = () => {
    return (
        <div>
            <form>

                    <div className="relative w-full">
                        <input type="search" id="location-search" className=" block p-2 w-full z-20 text-sm text-gray-900 focus:outline-none bg-gray-50 rounded-2xl " placeholder="Search" required />
                        <button type="submit"
                                className="absolute shop-search-btn top-0 right-0 p-2 text-sm font-medium text-white rounded-rb-2xl rounded-r-2xl focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                                <span className="sr-only">Search</span>
                        </button>
                    </div>

            </form>
        </div>
    );
};

export default Search;